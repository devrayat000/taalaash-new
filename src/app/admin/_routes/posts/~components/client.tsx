import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
// import { ApiList } from "@/components/ui/api-list";

import { columns } from "./columns";
import { deleteManyPosts } from "@/server/post/action";
import { useServerTableStore } from "@/providers/server-table-provider";
import { Link, useSearch } from "@tanstack/react-router";

export const PostsClient: React.FC = () => {
	const { count } = useServerTableStore();
	const searchParams = useSearch({ from: "/admin/_routes/posts/" });

	return (
		<>
			<div className="flex items-center justify-between">
				<Heading
					title={`Posts (${count})`}
					description="Manage posts for your products"
				/>
				<div className="flex items-center gap-2">
					<Button asChild>
						<Link to="/admin/posts/$postId" params={{ postId: "bulk" }}>
							<Plus className="mr-2 h-4 w-4" /> Bulk Upload
						</Link>
					</Button>
					<Button asChild>
						<Link to="/admin/posts/$postId" params={{ postId: "new" }}>
							<Plus className="mr-2 h-4 w-4" /> Add New
						</Link>
					</Button>
				</div>
			</div>
			<Separator />
			<DataTable
				key={searchParams.toString()}
				searchKey="text"
				columns={columns}
				deleteAction={deleteManyPosts}
			/>
			{/* <Heading title="API" description="API Calls for Posts" />
      <Separator /> */}
			{/* <ApiList entityName="posts" entityIdName="postId" /> */}
		</>
	);
};
