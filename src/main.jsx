import ReactDOM from 'react-dom/client'
import './index.css'

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { About, Home , Layout , AuthAccessToken , UserInformation, Contact, Login, Jenkins , Blogs } from './components/index.js'


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element = {<Layout/>}>
    <Route path='/' element={<Home/>}/> 
      <Route path='/login' element={<Login/>}/> 
      <Route path='/userdata' element={<UserInformation/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/callback' element={<AuthAccessToken/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/Jenkins' element={<Jenkins/>}/>
      <Route path='/Blogs' element={<Blogs/>}/>
    </Route> 
    </>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
