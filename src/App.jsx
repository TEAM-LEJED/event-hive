import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignUp from './pages/signUp'
import SignIn from './pages/signIn'
import HomePage from './pages/homePage'

const router = createBrowserRouter([
    {path:"/",element:<SignUp/>},
    {path:"signin",element:<SignIn/>},
    {path:"homepage",element:<HomePage/>},
    
])

const App = () => {
  return (
    <div>
        <RouterProvider router={router}/>
    </div>
  )
}

export default App