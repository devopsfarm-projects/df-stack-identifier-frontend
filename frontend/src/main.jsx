import ReactDOM from 'react-dom/client'
import './index.css'

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from "./components/Home/Home.jsx"
// import About from "./components/About/About.jsx"
import Layout from "./components/Layout/Layout.jsx"
import AuthAccessToken from './components/AuthHandleLogin/AuthAccessToken.jsx'
import UserInformation from './components/UserInformation/UserInformation.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element = {<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='/userdata' element={<UserInformation/>}/>
      {/* <Route path='/about' element={<About/>}/> */}
      <Route path='/callback' element={<AuthAccessToken/>}/>
    </Route>
    
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  // <>
  // <App />
  // </>
    <RouterProvider router={router}/>
  
)
