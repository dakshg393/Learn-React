import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { AuthLayout } from './components/index.js'
import {AddPost,AllPost,EditPost,Home,Login,Post,Signup} from './pages/index.js'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>

      <Route path='/' element={<Home/>} />
      
        <Route 
          path='/login'
          element={
            <AuthLayout authentication={false}>
              {""}
              <Login/>
            </AuthLayout> 
          } 
        />

        <Route 
          path='/signup'
          element={
            <AuthLayout authentication={false}>
              {""}
              <Signup/>
            </AuthLayout> 
          } 
        />

        <Route  
          path='/all-posts'
          element={
            <AuthLayout authentication={false}>
              {""}
              <AllPost/>
            </AuthLayout> 
          } 
        />

        <Route 
        path='/edit-post/:slug'
        element={
          <AuthLayout authentication={true}>
            {""}
            <EditPost/>
          </AuthLayout>
        }/>

        <Route
        path='/post/:slug'
        element={
          <AuthLayout authentication={true}>
            {""}
            <Post/>
          </AuthLayout>
        }/>

        <Route 
        path='/add-post'
        element={
          <AuthLayout authentication={true}>
            {""}
            <AddPost/>
          </AuthLayout>
        }
        />



      
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
