/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createServerRootRoute } from '@tanstack/react-start/server'

import { Route as rootRouteImport } from './app/__root'
import { Route as AdminRouteRouteImport } from './app/admin/route'
import { Route as RootRouteRouteImport } from './app/_root/route'
import { Route as AdminRoutesRouteRouteImport } from './app/admin/_routes/route'
import { Route as RootRoutesRouteRouteImport } from './app/_root/_routes/route'
import { Route as AdminRoutesIndexRouteImport } from './app/admin/_routes/index'
import { Route as AdminAuthSigninRouteImport } from './app/admin/_auth/signin'
import { Route as RootAuthSigninRouteImport } from './app/_root/_auth/signin'
import { Route as RootRoutesSearchRouteRouteImport } from './app/_root/_routes/_search/route'
import { Route as RootRoutesMainRouteRouteImport } from './app/_root/_routes/_main/route'
import { Route as AdminRoutesSubjectsIndexRouteImport } from './app/admin/_routes/subjects/index'
import { Route as AdminRoutesPostsIndexRouteImport } from './app/admin/_routes/posts/index'
import { Route as AdminRoutesContributorsIndexRouteImport } from './app/admin/_routes/contributors/index'
import { Route as AdminRoutesChaptersIndexRouteImport } from './app/admin/_routes/chapters/index'
import { Route as AdminRoutesBooksIndexRouteImport } from './app/admin/_routes/books/index'
import { Route as RootRoutesMainIndexRouteImport } from './app/_root/_routes/_main/index'
import { Route as AdminRoutesSubjectsSubjectIdRouteImport } from './app/admin/_routes/subjects/$subjectId'
import { Route as AdminRoutesPostsNewRouteImport } from './app/admin/_routes/posts/new'
import { Route as AdminRoutesPostsPostIdRouteImport } from './app/admin/_routes/posts/$postId'
import { Route as AdminRoutesChaptersChapterIdRouteImport } from './app/admin/_routes/chapters/$chapterId'
import { Route as AdminRoutesBooksBookIdRouteImport } from './app/admin/_routes/books/$bookId'
import { Route as RootRoutesMainWhatsNewRouteImport } from './app/_root/_routes/_main/whats-new'
import { Route as RootRoutesMainSubscriptionsRouteImport } from './app/_root/_routes/_main/subscriptions'
import { Route as RootRoutesMainSearchHistoryRouteImport } from './app/_root/_routes/_main/search-history'
import { Route as RootRoutesMainMyFootprintsRouteImport } from './app/_root/_routes/_main/my-footprints'
import { Route as RootRoutesMainInitRouteImport } from './app/_root/_routes/_main/init'
import { Route as RootRoutesMainContentGalleryRouteImport } from './app/_root/_routes/_main/content-gallery'
import { Route as RootRoutesMainBookmarksRouteImport } from './app/_root/_routes/_main/bookmarks'
import { Route as RootRoutesMainAboutRouteImport } from './app/_root/_routes/_main/about'
import { Route as RootRoutesSearchSearchIndexRouteImport } from './app/_root/_routes/_search/search/index'
import { ServerRoute as WebhookOcrServerRouteImport } from './app/webhook/ocr'
import { ServerRoute as ApiAuthSplatServerRouteImport } from './app/api/auth/$'

const rootServerRouteImport = createServerRootRoute()

const AdminRouteRoute = AdminRouteRouteImport.update({
  id: '/admin',
  path: '/admin',
  getParentRoute: () => rootRouteImport,
} as any)
const RootRouteRoute = RootRouteRouteImport.update({
  id: '/_root',
  getParentRoute: () => rootRouteImport,
} as any)
const AdminRoutesRouteRoute = AdminRoutesRouteRouteImport.update({
  id: '/_routes',
  getParentRoute: () => AdminRouteRoute,
} as any)
const RootRoutesRouteRoute = RootRoutesRouteRouteImport.update({
  id: '/_routes',
  getParentRoute: () => RootRouteRoute,
} as any)
const AdminRoutesIndexRoute = AdminRoutesIndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => AdminRoutesRouteRoute,
} as any)
const AdminAuthSigninRoute = AdminAuthSigninRouteImport.update({
  id: '/_auth/signin',
  path: '/signin',
  getParentRoute: () => AdminRouteRoute,
} as any)
const RootAuthSigninRoute = RootAuthSigninRouteImport.update({
  id: '/_auth/signin',
  path: '/signin',
  getParentRoute: () => RootRouteRoute,
} as any)
const RootRoutesSearchRouteRoute = RootRoutesSearchRouteRouteImport.update({
  id: '/_search',
  getParentRoute: () => RootRoutesRouteRoute,
} as any)
const RootRoutesMainRouteRoute = RootRoutesMainRouteRouteImport.update({
  id: '/_main',
  getParentRoute: () => RootRoutesRouteRoute,
} as any)
const AdminRoutesSubjectsIndexRoute =
  AdminRoutesSubjectsIndexRouteImport.update({
    id: '/subjects/',
    path: '/subjects/',
    getParentRoute: () => AdminRoutesRouteRoute,
  } as any)
const AdminRoutesPostsIndexRoute = AdminRoutesPostsIndexRouteImport.update({
  id: '/posts/',
  path: '/posts/',
  getParentRoute: () => AdminRoutesRouteRoute,
} as any)
const AdminRoutesContributorsIndexRoute =
  AdminRoutesContributorsIndexRouteImport.update({
    id: '/contributors/',
    path: '/contributors/',
    getParentRoute: () => AdminRoutesRouteRoute,
  } as any)
const AdminRoutesChaptersIndexRoute =
  AdminRoutesChaptersIndexRouteImport.update({
    id: '/chapters/',
    path: '/chapters/',
    getParentRoute: () => AdminRoutesRouteRoute,
  } as any)
const AdminRoutesBooksIndexRoute = AdminRoutesBooksIndexRouteImport.update({
  id: '/books/',
  path: '/books/',
  getParentRoute: () => AdminRoutesRouteRoute,
} as any)
const RootRoutesMainIndexRoute = RootRoutesMainIndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => RootRoutesMainRouteRoute,
} as any)
const AdminRoutesSubjectsSubjectIdRoute =
  AdminRoutesSubjectsSubjectIdRouteImport.update({
    id: '/subjects/$subjectId',
    path: '/subjects/$subjectId',
    getParentRoute: () => AdminRoutesRouteRoute,
  } as any)
const AdminRoutesPostsNewRoute = AdminRoutesPostsNewRouteImport.update({
  id: '/posts/new',
  path: '/posts/new',
  getParentRoute: () => AdminRoutesRouteRoute,
} as any)
const AdminRoutesPostsPostIdRoute = AdminRoutesPostsPostIdRouteImport.update({
  id: '/posts/$postId',
  path: '/posts/$postId',
  getParentRoute: () => AdminRoutesRouteRoute,
} as any)
const AdminRoutesChaptersChapterIdRoute =
  AdminRoutesChaptersChapterIdRouteImport.update({
    id: '/chapters/$chapterId',
    path: '/chapters/$chapterId',
    getParentRoute: () => AdminRoutesRouteRoute,
  } as any)
const AdminRoutesBooksBookIdRoute = AdminRoutesBooksBookIdRouteImport.update({
  id: '/books/$bookId',
  path: '/books/$bookId',
  getParentRoute: () => AdminRoutesRouteRoute,
} as any)
const RootRoutesMainWhatsNewRoute = RootRoutesMainWhatsNewRouteImport.update({
  id: '/whats-new',
  path: '/whats-new',
  getParentRoute: () => RootRoutesMainRouteRoute,
} as any)
const RootRoutesMainSubscriptionsRoute =
  RootRoutesMainSubscriptionsRouteImport.update({
    id: '/subscriptions',
    path: '/subscriptions',
    getParentRoute: () => RootRoutesMainRouteRoute,
  } as any)
const RootRoutesMainSearchHistoryRoute =
  RootRoutesMainSearchHistoryRouteImport.update({
    id: '/search-history',
    path: '/search-history',
    getParentRoute: () => RootRoutesMainRouteRoute,
  } as any)
const RootRoutesMainMyFootprintsRoute =
  RootRoutesMainMyFootprintsRouteImport.update({
    id: '/my-footprints',
    path: '/my-footprints',
    getParentRoute: () => RootRoutesMainRouteRoute,
  } as any)
const RootRoutesMainInitRoute = RootRoutesMainInitRouteImport.update({
  id: '/init',
  path: '/init',
  getParentRoute: () => RootRoutesMainRouteRoute,
} as any)
const RootRoutesMainContentGalleryRoute =
  RootRoutesMainContentGalleryRouteImport.update({
    id: '/content-gallery',
    path: '/content-gallery',
    getParentRoute: () => RootRoutesMainRouteRoute,
  } as any)
const RootRoutesMainBookmarksRoute = RootRoutesMainBookmarksRouteImport.update({
  id: '/bookmarks',
  path: '/bookmarks',
  getParentRoute: () => RootRoutesMainRouteRoute,
} as any)
const RootRoutesMainAboutRoute = RootRoutesMainAboutRouteImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => RootRoutesMainRouteRoute,
} as any)
const RootRoutesSearchSearchIndexRoute =
  RootRoutesSearchSearchIndexRouteImport.update({
    id: '/search/',
    path: '/search/',
    getParentRoute: () => RootRoutesSearchRouteRoute,
  } as any)
const WebhookOcrServerRoute = WebhookOcrServerRouteImport.update({
  id: '/webhook/ocr',
  path: '/webhook/ocr',
  getParentRoute: () => rootServerRouteImport,
} as any)
const ApiAuthSplatServerRoute = ApiAuthSplatServerRouteImport.update({
  id: '/api/auth/$',
  path: '/api/auth/$',
  getParentRoute: () => rootServerRouteImport,
} as any)

export interface FileRoutesByFullPath {
  '/admin': typeof AdminRoutesRouteRouteWithChildren
  '/signin': typeof RootAuthSigninRoute
  '/admin/signin': typeof AdminAuthSigninRoute
  '/admin/': typeof AdminRoutesIndexRoute
  '/about': typeof RootRoutesMainAboutRoute
  '/bookmarks': typeof RootRoutesMainBookmarksRoute
  '/content-gallery': typeof RootRoutesMainContentGalleryRoute
  '/init': typeof RootRoutesMainInitRoute
  '/my-footprints': typeof RootRoutesMainMyFootprintsRoute
  '/search-history': typeof RootRoutesMainSearchHistoryRoute
  '/subscriptions': typeof RootRoutesMainSubscriptionsRoute
  '/whats-new': typeof RootRoutesMainWhatsNewRoute
  '/admin/books/$bookId': typeof AdminRoutesBooksBookIdRoute
  '/admin/chapters/$chapterId': typeof AdminRoutesChaptersChapterIdRoute
  '/admin/posts/$postId': typeof AdminRoutesPostsPostIdRoute
  '/admin/posts/new': typeof AdminRoutesPostsNewRoute
  '/admin/subjects/$subjectId': typeof AdminRoutesSubjectsSubjectIdRoute
  '/': typeof RootRoutesMainIndexRoute
  '/admin/books': typeof AdminRoutesBooksIndexRoute
  '/admin/chapters': typeof AdminRoutesChaptersIndexRoute
  '/admin/contributors': typeof AdminRoutesContributorsIndexRoute
  '/admin/posts': typeof AdminRoutesPostsIndexRoute
  '/admin/subjects': typeof AdminRoutesSubjectsIndexRoute
  '/search': typeof RootRoutesSearchSearchIndexRoute
}
export interface FileRoutesByTo {
  '/admin': typeof AdminRoutesIndexRoute
  '/signin': typeof RootAuthSigninRoute
  '/admin/signin': typeof AdminAuthSigninRoute
  '/about': typeof RootRoutesMainAboutRoute
  '/bookmarks': typeof RootRoutesMainBookmarksRoute
  '/content-gallery': typeof RootRoutesMainContentGalleryRoute
  '/init': typeof RootRoutesMainInitRoute
  '/my-footprints': typeof RootRoutesMainMyFootprintsRoute
  '/search-history': typeof RootRoutesMainSearchHistoryRoute
  '/subscriptions': typeof RootRoutesMainSubscriptionsRoute
  '/whats-new': typeof RootRoutesMainWhatsNewRoute
  '/admin/books/$bookId': typeof AdminRoutesBooksBookIdRoute
  '/admin/chapters/$chapterId': typeof AdminRoutesChaptersChapterIdRoute
  '/admin/posts/$postId': typeof AdminRoutesPostsPostIdRoute
  '/admin/posts/new': typeof AdminRoutesPostsNewRoute
  '/admin/subjects/$subjectId': typeof AdminRoutesSubjectsSubjectIdRoute
  '/': typeof RootRoutesMainIndexRoute
  '/admin/books': typeof AdminRoutesBooksIndexRoute
  '/admin/chapters': typeof AdminRoutesChaptersIndexRoute
  '/admin/contributors': typeof AdminRoutesContributorsIndexRoute
  '/admin/posts': typeof AdminRoutesPostsIndexRoute
  '/admin/subjects': typeof AdminRoutesSubjectsIndexRoute
  '/search': typeof RootRoutesSearchSearchIndexRoute
}
export interface FileRoutesById {
  __root__: typeof rootRouteImport
  '/_root': typeof RootRouteRouteWithChildren
  '/admin': typeof AdminRouteRouteWithChildren
  '/_root/_routes': typeof RootRoutesRouteRouteWithChildren
  '/admin/_routes': typeof AdminRoutesRouteRouteWithChildren
  '/_root/_routes/_main': typeof RootRoutesMainRouteRouteWithChildren
  '/_root/_routes/_search': typeof RootRoutesSearchRouteRouteWithChildren
  '/_root/_auth/signin': typeof RootAuthSigninRoute
  '/admin/_auth/signin': typeof AdminAuthSigninRoute
  '/admin/_routes/': typeof AdminRoutesIndexRoute
  '/_root/_routes/_main/about': typeof RootRoutesMainAboutRoute
  '/_root/_routes/_main/bookmarks': typeof RootRoutesMainBookmarksRoute
  '/_root/_routes/_main/content-gallery': typeof RootRoutesMainContentGalleryRoute
  '/_root/_routes/_main/init': typeof RootRoutesMainInitRoute
  '/_root/_routes/_main/my-footprints': typeof RootRoutesMainMyFootprintsRoute
  '/_root/_routes/_main/search-history': typeof RootRoutesMainSearchHistoryRoute
  '/_root/_routes/_main/subscriptions': typeof RootRoutesMainSubscriptionsRoute
  '/_root/_routes/_main/whats-new': typeof RootRoutesMainWhatsNewRoute
  '/admin/_routes/books/$bookId': typeof AdminRoutesBooksBookIdRoute
  '/admin/_routes/chapters/$chapterId': typeof AdminRoutesChaptersChapterIdRoute
  '/admin/_routes/posts/$postId': typeof AdminRoutesPostsPostIdRoute
  '/admin/_routes/posts/new': typeof AdminRoutesPostsNewRoute
  '/admin/_routes/subjects/$subjectId': typeof AdminRoutesSubjectsSubjectIdRoute
  '/_root/_routes/_main/': typeof RootRoutesMainIndexRoute
  '/admin/_routes/books/': typeof AdminRoutesBooksIndexRoute
  '/admin/_routes/chapters/': typeof AdminRoutesChaptersIndexRoute
  '/admin/_routes/contributors/': typeof AdminRoutesContributorsIndexRoute
  '/admin/_routes/posts/': typeof AdminRoutesPostsIndexRoute
  '/admin/_routes/subjects/': typeof AdminRoutesSubjectsIndexRoute
  '/_root/_routes/_search/search/': typeof RootRoutesSearchSearchIndexRoute
}
export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/admin'
    | '/signin'
    | '/admin/signin'
    | '/admin/'
    | '/about'
    | '/bookmarks'
    | '/content-gallery'
    | '/init'
    | '/my-footprints'
    | '/search-history'
    | '/subscriptions'
    | '/whats-new'
    | '/admin/books/$bookId'
    | '/admin/chapters/$chapterId'
    | '/admin/posts/$postId'
    | '/admin/posts/new'
    | '/admin/subjects/$subjectId'
    | '/'
    | '/admin/books'
    | '/admin/chapters'
    | '/admin/contributors'
    | '/admin/posts'
    | '/admin/subjects'
    | '/search'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/admin'
    | '/signin'
    | '/admin/signin'
    | '/about'
    | '/bookmarks'
    | '/content-gallery'
    | '/init'
    | '/my-footprints'
    | '/search-history'
    | '/subscriptions'
    | '/whats-new'
    | '/admin/books/$bookId'
    | '/admin/chapters/$chapterId'
    | '/admin/posts/$postId'
    | '/admin/posts/new'
    | '/admin/subjects/$subjectId'
    | '/'
    | '/admin/books'
    | '/admin/chapters'
    | '/admin/contributors'
    | '/admin/posts'
    | '/admin/subjects'
    | '/search'
  id:
    | '__root__'
    | '/_root'
    | '/admin'
    | '/_root/_routes'
    | '/admin/_routes'
    | '/_root/_routes/_main'
    | '/_root/_routes/_search'
    | '/_root/_auth/signin'
    | '/admin/_auth/signin'
    | '/admin/_routes/'
    | '/_root/_routes/_main/about'
    | '/_root/_routes/_main/bookmarks'
    | '/_root/_routes/_main/content-gallery'
    | '/_root/_routes/_main/init'
    | '/_root/_routes/_main/my-footprints'
    | '/_root/_routes/_main/search-history'
    | '/_root/_routes/_main/subscriptions'
    | '/_root/_routes/_main/whats-new'
    | '/admin/_routes/books/$bookId'
    | '/admin/_routes/chapters/$chapterId'
    | '/admin/_routes/posts/$postId'
    | '/admin/_routes/posts/new'
    | '/admin/_routes/subjects/$subjectId'
    | '/_root/_routes/_main/'
    | '/admin/_routes/books/'
    | '/admin/_routes/chapters/'
    | '/admin/_routes/contributors/'
    | '/admin/_routes/posts/'
    | '/admin/_routes/subjects/'
    | '/_root/_routes/_search/search/'
  fileRoutesById: FileRoutesById
}
export interface RootRouteChildren {
  RootRouteRoute: typeof RootRouteRouteWithChildren
  AdminRouteRoute: typeof AdminRouteRouteWithChildren
}
export interface FileServerRoutesByFullPath {
  '/webhook/ocr': typeof WebhookOcrServerRoute
  '/api/auth/$': typeof ApiAuthSplatServerRoute
}
export interface FileServerRoutesByTo {
  '/webhook/ocr': typeof WebhookOcrServerRoute
  '/api/auth/$': typeof ApiAuthSplatServerRoute
}
export interface FileServerRoutesById {
  __root__: typeof rootServerRouteImport
  '/webhook/ocr': typeof WebhookOcrServerRoute
  '/api/auth/$': typeof ApiAuthSplatServerRoute
}
export interface FileServerRouteTypes {
  fileServerRoutesByFullPath: FileServerRoutesByFullPath
  fullPaths: '/webhook/ocr' | '/api/auth/$'
  fileServerRoutesByTo: FileServerRoutesByTo
  to: '/webhook/ocr' | '/api/auth/$'
  id: '__root__' | '/webhook/ocr' | '/api/auth/$'
  fileServerRoutesById: FileServerRoutesById
}
export interface RootServerRouteChildren {
  WebhookOcrServerRoute: typeof WebhookOcrServerRoute
  ApiAuthSplatServerRoute: typeof ApiAuthSplatServerRoute
}

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/admin': {
      id: '/admin'
      path: '/admin'
      fullPath: '/admin'
      preLoaderRoute: typeof AdminRouteRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/_root': {
      id: '/_root'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof RootRouteRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/admin/_routes': {
      id: '/admin/_routes'
      path: ''
      fullPath: '/admin'
      preLoaderRoute: typeof AdminRoutesRouteRouteImport
      parentRoute: typeof AdminRouteRoute
    }
    '/_root/_routes': {
      id: '/_root/_routes'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof RootRoutesRouteRouteImport
      parentRoute: typeof RootRouteRoute
    }
    '/admin/_routes/': {
      id: '/admin/_routes/'
      path: '/'
      fullPath: '/admin/'
      preLoaderRoute: typeof AdminRoutesIndexRouteImport
      parentRoute: typeof AdminRoutesRouteRoute
    }
    '/admin/_auth/signin': {
      id: '/admin/_auth/signin'
      path: '/signin'
      fullPath: '/admin/signin'
      preLoaderRoute: typeof AdminAuthSigninRouteImport
      parentRoute: typeof AdminRouteRoute
    }
    '/_root/_auth/signin': {
      id: '/_root/_auth/signin'
      path: '/signin'
      fullPath: '/signin'
      preLoaderRoute: typeof RootAuthSigninRouteImport
      parentRoute: typeof RootRouteRoute
    }
    '/_root/_routes/_search': {
      id: '/_root/_routes/_search'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof RootRoutesSearchRouteRouteImport
      parentRoute: typeof RootRoutesRouteRoute
    }
    '/_root/_routes/_main': {
      id: '/_root/_routes/_main'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof RootRoutesMainRouteRouteImport
      parentRoute: typeof RootRoutesRouteRoute
    }
    '/admin/_routes/subjects/': {
      id: '/admin/_routes/subjects/'
      path: '/subjects'
      fullPath: '/admin/subjects'
      preLoaderRoute: typeof AdminRoutesSubjectsIndexRouteImport
      parentRoute: typeof AdminRoutesRouteRoute
    }
    '/admin/_routes/posts/': {
      id: '/admin/_routes/posts/'
      path: '/posts'
      fullPath: '/admin/posts'
      preLoaderRoute: typeof AdminRoutesPostsIndexRouteImport
      parentRoute: typeof AdminRoutesRouteRoute
    }
    '/admin/_routes/contributors/': {
      id: '/admin/_routes/contributors/'
      path: '/contributors'
      fullPath: '/admin/contributors'
      preLoaderRoute: typeof AdminRoutesContributorsIndexRouteImport
      parentRoute: typeof AdminRoutesRouteRoute
    }
    '/admin/_routes/chapters/': {
      id: '/admin/_routes/chapters/'
      path: '/chapters'
      fullPath: '/admin/chapters'
      preLoaderRoute: typeof AdminRoutesChaptersIndexRouteImport
      parentRoute: typeof AdminRoutesRouteRoute
    }
    '/admin/_routes/books/': {
      id: '/admin/_routes/books/'
      path: '/books'
      fullPath: '/admin/books'
      preLoaderRoute: typeof AdminRoutesBooksIndexRouteImport
      parentRoute: typeof AdminRoutesRouteRoute
    }
    '/_root/_routes/_main/': {
      id: '/_root/_routes/_main/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof RootRoutesMainIndexRouteImport
      parentRoute: typeof RootRoutesMainRouteRoute
    }
    '/admin/_routes/subjects/$subjectId': {
      id: '/admin/_routes/subjects/$subjectId'
      path: '/subjects/$subjectId'
      fullPath: '/admin/subjects/$subjectId'
      preLoaderRoute: typeof AdminRoutesSubjectsSubjectIdRouteImport
      parentRoute: typeof AdminRoutesRouteRoute
    }
    '/admin/_routes/posts/new': {
      id: '/admin/_routes/posts/new'
      path: '/posts/new'
      fullPath: '/admin/posts/new'
      preLoaderRoute: typeof AdminRoutesPostsNewRouteImport
      parentRoute: typeof AdminRoutesRouteRoute
    }
    '/admin/_routes/posts/$postId': {
      id: '/admin/_routes/posts/$postId'
      path: '/posts/$postId'
      fullPath: '/admin/posts/$postId'
      preLoaderRoute: typeof AdminRoutesPostsPostIdRouteImport
      parentRoute: typeof AdminRoutesRouteRoute
    }
    '/admin/_routes/chapters/$chapterId': {
      id: '/admin/_routes/chapters/$chapterId'
      path: '/chapters/$chapterId'
      fullPath: '/admin/chapters/$chapterId'
      preLoaderRoute: typeof AdminRoutesChaptersChapterIdRouteImport
      parentRoute: typeof AdminRoutesRouteRoute
    }
    '/admin/_routes/books/$bookId': {
      id: '/admin/_routes/books/$bookId'
      path: '/books/$bookId'
      fullPath: '/admin/books/$bookId'
      preLoaderRoute: typeof AdminRoutesBooksBookIdRouteImport
      parentRoute: typeof AdminRoutesRouteRoute
    }
    '/_root/_routes/_main/whats-new': {
      id: '/_root/_routes/_main/whats-new'
      path: '/whats-new'
      fullPath: '/whats-new'
      preLoaderRoute: typeof RootRoutesMainWhatsNewRouteImport
      parentRoute: typeof RootRoutesMainRouteRoute
    }
    '/_root/_routes/_main/subscriptions': {
      id: '/_root/_routes/_main/subscriptions'
      path: '/subscriptions'
      fullPath: '/subscriptions'
      preLoaderRoute: typeof RootRoutesMainSubscriptionsRouteImport
      parentRoute: typeof RootRoutesMainRouteRoute
    }
    '/_root/_routes/_main/search-history': {
      id: '/_root/_routes/_main/search-history'
      path: '/search-history'
      fullPath: '/search-history'
      preLoaderRoute: typeof RootRoutesMainSearchHistoryRouteImport
      parentRoute: typeof RootRoutesMainRouteRoute
    }
    '/_root/_routes/_main/my-footprints': {
      id: '/_root/_routes/_main/my-footprints'
      path: '/my-footprints'
      fullPath: '/my-footprints'
      preLoaderRoute: typeof RootRoutesMainMyFootprintsRouteImport
      parentRoute: typeof RootRoutesMainRouteRoute
    }
    '/_root/_routes/_main/init': {
      id: '/_root/_routes/_main/init'
      path: '/init'
      fullPath: '/init'
      preLoaderRoute: typeof RootRoutesMainInitRouteImport
      parentRoute: typeof RootRoutesMainRouteRoute
    }
    '/_root/_routes/_main/content-gallery': {
      id: '/_root/_routes/_main/content-gallery'
      path: '/content-gallery'
      fullPath: '/content-gallery'
      preLoaderRoute: typeof RootRoutesMainContentGalleryRouteImport
      parentRoute: typeof RootRoutesMainRouteRoute
    }
    '/_root/_routes/_main/bookmarks': {
      id: '/_root/_routes/_main/bookmarks'
      path: '/bookmarks'
      fullPath: '/bookmarks'
      preLoaderRoute: typeof RootRoutesMainBookmarksRouteImport
      parentRoute: typeof RootRoutesMainRouteRoute
    }
    '/_root/_routes/_main/about': {
      id: '/_root/_routes/_main/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof RootRoutesMainAboutRouteImport
      parentRoute: typeof RootRoutesMainRouteRoute
    }
    '/_root/_routes/_search/search/': {
      id: '/_root/_routes/_search/search/'
      path: '/search'
      fullPath: '/search'
      preLoaderRoute: typeof RootRoutesSearchSearchIndexRouteImport
      parentRoute: typeof RootRoutesSearchRouteRoute
    }
  }
}
declare module '@tanstack/react-start/server' {
  interface ServerFileRoutesByPath {
    '/webhook/ocr': {
      id: '/webhook/ocr'
      path: '/webhook/ocr'
      fullPath: '/webhook/ocr'
      preLoaderRoute: typeof WebhookOcrServerRouteImport
      parentRoute: typeof rootServerRouteImport
    }
    '/api/auth/$': {
      id: '/api/auth/$'
      path: '/api/auth/$'
      fullPath: '/api/auth/$'
      preLoaderRoute: typeof ApiAuthSplatServerRouteImport
      parentRoute: typeof rootServerRouteImport
    }
  }
}

interface RootRoutesMainRouteRouteChildren {
  RootRoutesMainAboutRoute: typeof RootRoutesMainAboutRoute
  RootRoutesMainBookmarksRoute: typeof RootRoutesMainBookmarksRoute
  RootRoutesMainContentGalleryRoute: typeof RootRoutesMainContentGalleryRoute
  RootRoutesMainInitRoute: typeof RootRoutesMainInitRoute
  RootRoutesMainMyFootprintsRoute: typeof RootRoutesMainMyFootprintsRoute
  RootRoutesMainSearchHistoryRoute: typeof RootRoutesMainSearchHistoryRoute
  RootRoutesMainSubscriptionsRoute: typeof RootRoutesMainSubscriptionsRoute
  RootRoutesMainWhatsNewRoute: typeof RootRoutesMainWhatsNewRoute
  RootRoutesMainIndexRoute: typeof RootRoutesMainIndexRoute
}

const RootRoutesMainRouteRouteChildren: RootRoutesMainRouteRouteChildren = {
  RootRoutesMainAboutRoute: RootRoutesMainAboutRoute,
  RootRoutesMainBookmarksRoute: RootRoutesMainBookmarksRoute,
  RootRoutesMainContentGalleryRoute: RootRoutesMainContentGalleryRoute,
  RootRoutesMainInitRoute: RootRoutesMainInitRoute,
  RootRoutesMainMyFootprintsRoute: RootRoutesMainMyFootprintsRoute,
  RootRoutesMainSearchHistoryRoute: RootRoutesMainSearchHistoryRoute,
  RootRoutesMainSubscriptionsRoute: RootRoutesMainSubscriptionsRoute,
  RootRoutesMainWhatsNewRoute: RootRoutesMainWhatsNewRoute,
  RootRoutesMainIndexRoute: RootRoutesMainIndexRoute,
}

const RootRoutesMainRouteRouteWithChildren =
  RootRoutesMainRouteRoute._addFileChildren(RootRoutesMainRouteRouteChildren)

interface RootRoutesSearchRouteRouteChildren {
  RootRoutesSearchSearchIndexRoute: typeof RootRoutesSearchSearchIndexRoute
}

const RootRoutesSearchRouteRouteChildren: RootRoutesSearchRouteRouteChildren = {
  RootRoutesSearchSearchIndexRoute: RootRoutesSearchSearchIndexRoute,
}

const RootRoutesSearchRouteRouteWithChildren =
  RootRoutesSearchRouteRoute._addFileChildren(
    RootRoutesSearchRouteRouteChildren,
  )

interface RootRoutesRouteRouteChildren {
  RootRoutesMainRouteRoute: typeof RootRoutesMainRouteRouteWithChildren
  RootRoutesSearchRouteRoute: typeof RootRoutesSearchRouteRouteWithChildren
}

const RootRoutesRouteRouteChildren: RootRoutesRouteRouteChildren = {
  RootRoutesMainRouteRoute: RootRoutesMainRouteRouteWithChildren,
  RootRoutesSearchRouteRoute: RootRoutesSearchRouteRouteWithChildren,
}

const RootRoutesRouteRouteWithChildren = RootRoutesRouteRoute._addFileChildren(
  RootRoutesRouteRouteChildren,
)

interface RootRouteRouteChildren {
  RootRoutesRouteRoute: typeof RootRoutesRouteRouteWithChildren
  RootAuthSigninRoute: typeof RootAuthSigninRoute
}

const RootRouteRouteChildren: RootRouteRouteChildren = {
  RootRoutesRouteRoute: RootRoutesRouteRouteWithChildren,
  RootAuthSigninRoute: RootAuthSigninRoute,
}

const RootRouteRouteWithChildren = RootRouteRoute._addFileChildren(
  RootRouteRouteChildren,
)

interface AdminRoutesRouteRouteChildren {
  AdminRoutesIndexRoute: typeof AdminRoutesIndexRoute
  AdminRoutesBooksBookIdRoute: typeof AdminRoutesBooksBookIdRoute
  AdminRoutesChaptersChapterIdRoute: typeof AdminRoutesChaptersChapterIdRoute
  AdminRoutesPostsPostIdRoute: typeof AdminRoutesPostsPostIdRoute
  AdminRoutesPostsNewRoute: typeof AdminRoutesPostsNewRoute
  AdminRoutesSubjectsSubjectIdRoute: typeof AdminRoutesSubjectsSubjectIdRoute
  AdminRoutesBooksIndexRoute: typeof AdminRoutesBooksIndexRoute
  AdminRoutesChaptersIndexRoute: typeof AdminRoutesChaptersIndexRoute
  AdminRoutesContributorsIndexRoute: typeof AdminRoutesContributorsIndexRoute
  AdminRoutesPostsIndexRoute: typeof AdminRoutesPostsIndexRoute
  AdminRoutesSubjectsIndexRoute: typeof AdminRoutesSubjectsIndexRoute
}

const AdminRoutesRouteRouteChildren: AdminRoutesRouteRouteChildren = {
  AdminRoutesIndexRoute: AdminRoutesIndexRoute,
  AdminRoutesBooksBookIdRoute: AdminRoutesBooksBookIdRoute,
  AdminRoutesChaptersChapterIdRoute: AdminRoutesChaptersChapterIdRoute,
  AdminRoutesPostsPostIdRoute: AdminRoutesPostsPostIdRoute,
  AdminRoutesPostsNewRoute: AdminRoutesPostsNewRoute,
  AdminRoutesSubjectsSubjectIdRoute: AdminRoutesSubjectsSubjectIdRoute,
  AdminRoutesBooksIndexRoute: AdminRoutesBooksIndexRoute,
  AdminRoutesChaptersIndexRoute: AdminRoutesChaptersIndexRoute,
  AdminRoutesContributorsIndexRoute: AdminRoutesContributorsIndexRoute,
  AdminRoutesPostsIndexRoute: AdminRoutesPostsIndexRoute,
  AdminRoutesSubjectsIndexRoute: AdminRoutesSubjectsIndexRoute,
}

const AdminRoutesRouteRouteWithChildren =
  AdminRoutesRouteRoute._addFileChildren(AdminRoutesRouteRouteChildren)

interface AdminRouteRouteChildren {
  AdminRoutesRouteRoute: typeof AdminRoutesRouteRouteWithChildren
  AdminAuthSigninRoute: typeof AdminAuthSigninRoute
}

const AdminRouteRouteChildren: AdminRouteRouteChildren = {
  AdminRoutesRouteRoute: AdminRoutesRouteRouteWithChildren,
  AdminAuthSigninRoute: AdminAuthSigninRoute,
}

const AdminRouteRouteWithChildren = AdminRouteRoute._addFileChildren(
  AdminRouteRouteChildren,
)

const rootRouteChildren: RootRouteChildren = {
  RootRouteRoute: RootRouteRouteWithChildren,
  AdminRouteRoute: AdminRouteRouteWithChildren,
}
export const routeTree = rootRouteImport
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()
const rootServerRouteChildren: RootServerRouteChildren = {
  WebhookOcrServerRoute: WebhookOcrServerRoute,
  ApiAuthSplatServerRoute: ApiAuthSplatServerRoute,
}
export const serverRouteTree = rootServerRouteImport
  ._addFileChildren(rootServerRouteChildren)
  ._addFileTypes<FileServerRouteTypes>()
