import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './components/App'
import ErrorPage from './components/ErrorPage'
import Home from './components/Home'

import Navigation from './components/Navigation'

import Journal from './components/Journal'
import J01 from './components/Journals/J01'
import J02 from './components/Journals/J01'
import J03 from './components/Journals/J01'

import Inventory from './components/Inventory'

import Artwork from './components/Artwork'

import Backstory from './components/Backstory'

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
      },
      {
        path: "journal/01",
        element: <J01 />
      },
      {
        path: "journal/02",
        element: <J02 />
      },
      {
        path: "journal/03",
        element: <J03 />
      },
      {
        path: "inventory",
        element: <Inventory />
      },
      {
        path: "artwork",
        element: <Artwork />
      },
      {
        path: "backstory",
        element: <Backstory />
      }
    ]
  }
])

root.render(<RouterProvider router={router} />)