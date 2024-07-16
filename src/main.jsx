import ReactDOM from 'react-dom/client'
import './index.css'

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { About, Home , Layout , AuthAccessToken , UserInformation, Contact, Login, Jenkins , Blogs , LearningPath, Linux, Docker, Python, GitHub, Terraform, Kubernetes, Java, ChatGPT, Ansible, AWS, MySQL } from './components/index.js'


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
      <Route path='/LearningPath' element={<LearningPath/>}/>
      <Route path='/Linux' element={<Linux/>}/> 
      <Route path='/Docker' element={<Docker/>}/> 
      <Route path='/Python' element={<Python/>}/> 
      <Route path='/GitHub' element={<GitHub/>}/> 
      <Route path='/Terraform' element={<Terraform/>}/> 
      <Route path='/Kubernetes' element={<Kubernetes/>}/> 
      <Route path='/Java' element={<Java/>}/> 
      <Route path='/ChatGPT' element={<ChatGPT/>}/> 
      <Route path='/Ansible' element={<Ansible/>}/> 
      <Route path='/AWS' element={<AWS/>}/> 
      <Route path='/MySQL' element={<MySQL/>}/> 
    </Route>
   
    </>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
