/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as RoomImport } from './routes/room'
import { Route as QuestionImport } from './routes/question'
import { Route as CreateRoomImport } from './routes/createRoom'
import { Route as AboutImport } from './routes/about'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const RoomRoute = RoomImport.update({
  id: '/room',
  path: '/room',
  getParentRoute: () => rootRoute,
} as any)

const QuestionRoute = QuestionImport.update({
  id: '/question',
  path: '/question',
  getParentRoute: () => rootRoute,
} as any)

const CreateRoomRoute = CreateRoomImport.update({
  id: '/createRoom',
  path: '/createRoom',
  getParentRoute: () => rootRoute,
} as any)

const AboutRoute = AboutImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    '/createRoom': {
      id: '/createRoom'
      path: '/createRoom'
      fullPath: '/createRoom'
      preLoaderRoute: typeof CreateRoomImport
      parentRoute: typeof rootRoute
    }
    '/question': {
      id: '/question'
      path: '/question'
      fullPath: '/question'
      preLoaderRoute: typeof QuestionImport
      parentRoute: typeof rootRoute
    }
    '/room': {
      id: '/room'
      path: '/room'
      fullPath: '/room'
      preLoaderRoute: typeof RoomImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/createRoom': typeof CreateRoomRoute
  '/question': typeof QuestionRoute
  '/room': typeof RoomRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/createRoom': typeof CreateRoomRoute
  '/question': typeof QuestionRoute
  '/room': typeof RoomRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/createRoom': typeof CreateRoomRoute
  '/question': typeof QuestionRoute
  '/room': typeof RoomRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/about' | '/createRoom' | '/question' | '/room'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/about' | '/createRoom' | '/question' | '/room'
  id: '__root__' | '/' | '/about' | '/createRoom' | '/question' | '/room'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AboutRoute: typeof AboutRoute
  CreateRoomRoute: typeof CreateRoomRoute
  QuestionRoute: typeof QuestionRoute
  RoomRoute: typeof RoomRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AboutRoute: AboutRoute,
  CreateRoomRoute: CreateRoomRoute,
  QuestionRoute: QuestionRoute,
  RoomRoute: RoomRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.jsx",
      "children": [
        "/",
        "/about",
        "/createRoom",
        "/question",
        "/room"
      ]
    },
    "/": {
      "filePath": "index.jsx"
    },
    "/about": {
      "filePath": "about.jsx"
    },
    "/createRoom": {
      "filePath": "createRoom.jsx"
    },
    "/question": {
      "filePath": "question.jsx"
    },
    "/room": {
      "filePath": "room.jsx"
    }
  }
}
ROUTE_MANIFEST_END */
