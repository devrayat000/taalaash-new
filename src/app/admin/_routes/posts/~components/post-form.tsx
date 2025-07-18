import { z } from "zod";
import { Suspense, use, useEffect, useRef, useState } from "react";
import { useFormState } from "react-dom";
import { useForm, useStore } from "@tanstack/react-form";
import { toast } from "@/components/ui/use-toast";
import { FileImageIcon, Trash } from "lucide-react";
import { useParams, useRouter, useNavigate } from "@tanstack/react-router";
import { InferSelectModel } from "drizzle-orm";
import merge from "lodash/merge";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Heading } from "@/components/ui/heading";
import { AlertModal } from "@/components/modals/alert-modal";
import { bookAuthor, chapter, post, subject } from "@/db/schema";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { createPost, deletePost, updatePost } from "@/server/post/action";
import { getBooksBySubject } from "@/server/book/action/book";
import { getChaptersByBooks } from "@/server/chapter/action/chapter";
import { Textarea } from "@/components/ui/textarea";
import { upload } from "@vercel/blob/client";
import {
	FileUploader,
	FileUploaderContent,
	FileUploaderItem,
	FileInput,
} from "@/components/ui/drop-zone";
import { createFile, env } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";
import { Loader } from "@/components/ui/loader";
import { Label } from "@/components/ui/label";
import { useQuery } from "@tanstack/react-query";

const postFormSchema = z.object({
	subjectId: z.string().min(1),
	bookAuthorId: z.string().min(1),
	chapterId: z.string().min(1),
	files: z.file().array(),
	pages: z.number().int().array(),
	// page: z.number().int().positive().optional(),
	// keywords: z
	//     .preprocess(
	//         (x) =>
	//             String(x)
	//                 .split(",")
	//                 .map((t) => t.trim()),
	//         z.string().array(),
	//     )
	//     .optional(),
});

type PostFormValues = z.infer<typeof postFormSchema>;

type Chapter = InferSelectModel<typeof chapter>;
type Subject = InferSelectModel<typeof subject>;
type Post = InferSelectModel<typeof post> & {
	subject: {
		id: string;
		name: string;
	};
	book: {
		id: string;
		name: string;
	};
	chapter: {
		id: string;
		name: string;
	};
};
interface PostFormProps {
	initialData: {
		subjects: Subject[];
		books: InferSelectModel<typeof bookAuthor>[] | null;
		chapters: Chapter[] | null;
		post: Post | null;
	};
}

export const PostForm: React.FC<PostFormProps> = ({
	initialData: { post: initialData, subjects, books = null, chapters = null },
}) => {
	const params = useParams({ from: "/admin/_routes/posts/$postId" });
	const router = useRouter();
	const navigate = useNavigate();

	const [open, setOpen] = useState(false);
	const [loading, setLoading] = useState(false);
	const embedRef = useRef<HTMLInputElement>(null);

	const title = initialData ? "Edit post" : "Create post";
	const description = initialData ? "Edit a post." : "Add a new post";
	const toastMessage = initialData ? "Post updated." : "Post created.";
	const action = initialData ? "Save changes" : "Create";

	const defaultEmbed = initialData?.imageUrl
		? use(createFile(initialData.imageUrl, "image/jpeg"))
		: null;

	const form = useForm({
		defaultValues: {
			// text: initialData?.text ?? "",
			// page: initialData?.page ?? undefined,
			subjectId: initialData?.subject.id ?? "",
			bookAuthorId: initialData?.book.id ?? "",
			chapterId: initialData?.chapter.id ?? "",
			// image: defaultEmbed,
			files: [],
			pages: [],
			// keywords: initialData?.keywords ?? [],
		},
		validators: {
			onSubmitAsync: postFormSchema,
		},
		onSubmit: async ({ value: { subjectId, bookAuthorId, ...data } }) => {
			console.log("submitting");

			if (params.postId === "bulk") {
				const formData = new FormData();
				formData.append("subjectId", subjectId);
				formData.append("bookAuthorId", bookAuthorId);
				formData.append("chapterId", data.chapterId);
				if (data.image && Array.isArray(data.image)) {
					data.image.forEach((file: File) => {
						formData.append("files", file);
					});
				}
				await onUploadBulk(formData);
				return;
			}

			try {
				setLoading(true);
				// console.log(data);

				if (
					!!data.image &&
					initialData?.imageUrl?.split("/")?.pop() !== data.image?.name
				) {
					const newBlob = await upload(
						`images/${data.image.name}`,
						data.image,
						{
							access: "public",
							handleUploadUrl: "/api/image/upload",
							multipart: true,
						},
					);
					data.image = null;
					// @ts-ignore
					data["imageUrl"] = newBlob.url;
				}

				if (initialData) {
					console.log("updating", data);

					await updatePost({ data: { id: initialData.id, params: data } });
					// router.history.replace();
					navigate({ reloadDocument: true });
				} else {
					const [{ id }] = await createPost({
						data: {
							text: data.text,
							page: data.page ?? 0,
							chapterId: data.chapterId,
							keywords: data.keywords,
							// @ts-ignore
							imageUrl: data["imageUrl"] as string,
						},
					});
					// router.replace(`/admin/posts/${id}`);
					navigate({
						to: "/admin/posts/$postId",
						params: { postId: id },
						reloadDocument: true,
					});
				}
				toast({
					description: toastMessage,
					variant: "default",
				});
			} catch (error: any) {
				toast({
					description: "Something went wrong.",
					variant: "destructive",
				});
			} finally {
				setLoading(false);
			}
		},
	});

	const subjectId = useStore(form.store, (state) => state.values.subjectId);
	const { data: booksBySubject, isLoading: isBooksLoading } = useQuery({
		queryKey: ["books", subjectId],
		queryFn: () => getBooksBySubject({ data: { id: subjectId } }),
		enabled: !!subjectId,
	});

	const bookId = useStore(form.store, (state) => state.values.bookAuthorId);
	const { data: chaptersByBook, isLoading: isChaptersLoading } = useQuery({
		queryKey: ["chapters", bookId],
		queryFn: () => getChaptersByBooks({ data: { id: bookId } }),
		enabled: !!bookId,
	});

	const onUploadBulk = async (formData: FormData) => {
		const { dismiss } = toast({
			title: "Uploading files...",
			variant: "default",
			description: <Loader />,
			duration: Infinity,
		});

		// upload images using client upload
		const files = formData.getAll("files");
		const blobsPrommise = files
			.map((file) => {
				if (typeof file !== "string") {
					return upload(`demo/${file.name}`, file, {
						access: "public",
						handleUploadUrl: "/api/image/upload",
						multipart: true,
					});
				}
			})
			.filter(Boolean);

		// upload images for extraction
		const fetchUrl = new URL(
			"/bulk-upload",
			process.env.NEXT_PUBLIC_OCR_URL || "http://127.0.0.1:8000",
		);
		const extractedPromise = fetch(fetchUrl, {
			method: "POST",
			body: formData,
			signal: AbortSignal.timeout(1000 * 60 * 5),
		})
			.then((res) => res.json())
			.then((data) => data.results as { text: string; file: string }[]);

		// await results
		const [blobs, results] = await Promise.all([
			Promise.all(blobsPrommise),
			extractedPromise,
		]);

		const data = merge(blobs, results).map((obj) => ({
			//   @ts-ignore
			text: obj.text,
			imageUrl: obj!.url,
			chapterId: formData.get("chapterId")!.toString(),
		}));

		await createPost({ data });
		dismiss();
		// router.replace(`/admin/posts`);
		navigate({
			to: "/admin/posts",
			reloadDocument: true,
		});
	};

	// const onDelete = async () => {
	// 	try {
	// 		setLoading(true);
	// 		if (typeof params.postId === "string")
	// 			await deletePost(params.postId as string);
	// 		router.replace(`/admin/posts`);
	// 		toast({ description: "Post deleted." });
	// 	} catch (error: any) {
	// 		toast({
	// 			description:
	// 				"Make sure you removed all products using this post first.",
	// 			variant: "destructive",
	// 		});
	// 	} finally {
	// 		setLoading(false);
	// 		setOpen(false);
	// 	}
	// };

	useEffect(() => {
		if (embedRef.current && initialData?.imageUrl) {
			const dataTransfer = new DataTransfer();
			dataTransfer.items.add(defaultEmbed!);
			embedRef.current.files = dataTransfer.files;
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [initialData?.imageUrl]);

	// const [booksBySubject, getBooksAction] = useFormState(
	// 	getBooksBySubject,
	// 	books,
	// );

	// const [chaptersByBook, getChaptersAction] = useFormState(
	// 	getChaptersByBooks,
	// 	chapters,
	// );

	return (
		<>
			{initialData && (
				<AlertModal
					isOpen={open}
					onClose={() => setOpen(false)}
					// onConfirm={onDelete}
					loading={loading}
				/>
			)}
			<div className="flex items-center justify-between">
				<Heading title={title} description={description} />
				{initialData && (
					<Button
						disabled={loading}
						variant="destructive"
						size="sm"
						onClick={() => setOpen(true)}
					>
						<Trash className="h-4 w-4" />
					</Button>
				)}
			</div>
			<Separator />
			<form
				onSubmit={form.handleSubmit}
				className="flex flex-col gap-y-8 max-w-lg mx-auto"
			>
				<div className="flex flex-col items-stretch gap-y-4">
					<form.Field name="subjectId">
						{(field) => (
							<div>
								<Label>Subject</Label>
								<Select
									onValueChange={(value) => {
										field.handleChange(value);
										// getBooksAction(value);
									}}
									onBlur={field.handleBlur}
									value={field.state.value}
									required
									disabled={loading}
								>
									<SelectTrigger>
										<SelectValue placeholder="Select a subject" />
									</SelectTrigger>
									<SelectContent>
										{subjects.map((subject) => (
											<SelectItem key={subject.id} value={subject.id}>
												{subject.name}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
								{/* <FormMessage /> */}
							</div>
						)}
					</form.Field>
					<form.Field name="bookAuthorId">
						{(field) => (
							<div>
								<Label>Book/Author</Label>
								<Select
									onValueChange={(value) => {
										field.handleChange(value);
										// getChaptersAction(value);
									}}
									value={field.state.value}
									disabled={!booksBySubject || loading || isBooksLoading}
									required
								>
									<SelectTrigger>
										<SelectValue placeholder="Select a book" />
									</SelectTrigger>
									<SelectContent>
										{booksBySubject?.map((book) => (
											<SelectItem key={book.id} value={book.id}>
												{book.name}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
								{/* <FormMessage /> */}
							</div>
						)}
					</form.Field>
					<form.Field name="chapterId">
						{(field) => (
							<div>
								<Label>Chapter</Label>
								<Select
									onValueChange={field.handleChange}
									value={field.state.value}
									disabled={!chaptersByBook || loading}
									required
								>
									<SelectTrigger>
										<SelectValue placeholder="Select a chapter" />
									</SelectTrigger>
									<SelectContent>
										{chaptersByBook?.map((chapter) => (
											<SelectItem key={chapter.id} value={chapter.id}>
												{chapter.name}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
								{/* <FormMessage /> */}
							</div>
						)}
					</form.Field>
					<form.Field name="files">
						{(field) => (
							<div>
								<Label>Image</Label>
								<Suspense>
									{/* <DropZoneInput
										ref={embedRef}
										onFileDrop={(files) =>
											field.handleChange(
												params.postId === "bulk" ? files : files[0],
											)
										}
										onBlur={field.handleBlur}
										defaultFile={field.state.value || undefined}
										multiple={params.postId === "bulk"}
										maxFiles={params.postId === "bulk" ? 50 : undefined}
										disabled={loading}
									/> */}
									<FileUploader
										value={field.state.value || []}
										onValueChange={field.handleChange}
										dropzoneOptions={{
											maxFiles: 100,
											maxSize: 1024 * 1024 * 4,
											multiple: true,
										}}
										className="relative bg-background rounded-lg p-2"
									>
										<FileInput className="outline-dashed outline-1 outline-white">
											<div className="flex items-center justify-center flex-col pt-3 pb-4 w-full ">
												<FileImageIcon />
											</div>
										</FileInput>
										<FileUploaderContent>
											{field.state.value &&
												field.state.value.length > 0 &&
												field.state.value.map((file, i) => (
													<FileUploaderItem key={i} index={i}>
														<Paperclip className="h-4 w-4 stroke-current" />
														<span>{file.name}</span>
													</FileUploaderItem>
												))}
										</FileUploaderContent>
									</FileUploader>
								</Suspense>
							</div>
						)}
					</form.Field>
					{/* {params.postId !== "bulk" && (
						<div className="md:grid md:grid-cols-2 gap-x-8 gap-y-4">
							<FormField
								control={form.control}
								name="page"
								disabled={loading}
								render={({ field }) => (
									<FormItem>
										<FormLabel>Page No.</FormLabel>
										<FormControl>
											<Input
												placeholder="e.g. 40"
												type="tel"
												{...field}
												onChange={field.onChange}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="keywords"
								disabled={loading}
								render={({ field }) => (
									<FormItem>
										<FormLabel>Keywords</FormLabel>
										<FormControl>
											<Input
												placeholder="e.g. vector,curl,divergence"
												{...field}
												// value={field.value?.join(",")}
												onChange={(e) =>
													field.onChange(
														e.target.value.split(",").map((t) => t.trim()),
													)
												}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
					)} */}
				</div>
				<Button disabled={loading} className="ml-auto" type="submit">
					{action}
				</Button>
			</form>
		</>
	);
};
