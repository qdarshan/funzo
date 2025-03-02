import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createRouter, RouterProvider } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'

const router = createRouter({
  routeTree, 
  defaultPreload: 'intent',
  scrollRestoration: true,
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <QueryClientProvider client={queryClient}> */}
    <RouterProvider router={router} />
    {/* </QueryClientProvider> */}
  </StrictMode>,
)
