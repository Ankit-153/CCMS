import { useState } from 'react'
import './App.css'
import SignUp from './components/SignUp'
import Login from './components/Login'
import Root from './components/Root'
import Home from './components/Home'
import CollegePredictor from './components/CollegePredictor'
import College from './components/College.jsx'
import UpdateProfile from './components/UpdateProfile.jsx'
import { createBrowserRouter,RouterProvider } from "react-router-dom";


const BrowserRouter = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "/predict-college", Component: CollegePredictor,},
      { path: "/college", Component: College},
      { path : "/update-profile", Component: UpdateProfile},
    ],
   
  },
  { path: "/login", Component: Login, },
  {path: "/Signup", Component:SignUp,}

]);


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <RouterProvider router={BrowserRouter}/> 
    </>
  )
}

export default App
