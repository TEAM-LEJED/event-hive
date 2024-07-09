import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignUp from './pages/signUp'
import SignIn from './pages/signIn'
import HomePage from './pages/homePage'
import CreateEvents from './pages/createEvents'
import EventPage from './pages/eventPage'
import CollegeEvents from './pages/collegeEvents'
import NotFoundPage from './pages/notFoundPage'

const router = createBrowserRouter([
  { path: "/", element: <SignUp /> },
  { path: "signin", element: <SignIn /> },
  { path: "homepage", element: <HomePage /> },
  { path: "createvents", element: <CreateEvents /> },
  { path: "eventpage", element: <EventPage /> },
  { path: "collegeevents", element: <CollegeEvents /> },
  {path:"notfoundpage",element:<NotFoundPage/>},

])

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App