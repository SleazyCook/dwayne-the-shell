import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './components/App'
import ErrorPage from './components/ErrorPage'
import Home from './components/Home'

import Navigation from './components/Navigation'

import Journal from './components/Journal'

const appElement = document.getElementById('app')
const root = createRoot(appElement)

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "navigate",
        element: <Navigation />
      },
      {
        path: "journal",
        element: <Journal />
      }
    ]
  }
])

root.render(<RouterProvider router={router} />)