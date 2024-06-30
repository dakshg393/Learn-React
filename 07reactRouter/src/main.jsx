import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider , createBrowserRouter, createRoutesFromChildren, createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Layout from './Layout.jsx'
import Contact from './components/ContactUs/ContactUs.jsx'
import User from './components/User/User.jsx'
import Github ,  { githubInfoLoder } from './components/Github/Github.jsx'

// const router= createBrowserRouter([
//   {
//     path:'/',
//     element: <Layout />,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"about",
//         element: <About />
//       },
//       {
//         path:"contactUs",
//         element: <Contact />
//       }
//     ]
//   }
// ])


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>} >
      <Route path='' element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='contactUs' element={<Contact/>} />
      <Route path='user/:userid/:name' element={<User/>} />
      <Route
      loader={githubInfoLoder}
      path='github' 
      element={<Github/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
