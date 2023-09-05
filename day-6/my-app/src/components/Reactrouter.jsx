import React from 'react'
import Navbar from './Navbar'
import { Routes,BrowserRouter} from 'react-router-dom'
import { Route } from 'react-router-dom'
import Register from '../pages/Register'
// import Login from '../pages/Login'
// import Login from '../pages/Login/jsx'
import Login from '../pages/Login'
import Createrecipe from '../pages/Createrecipe'
import Homepage from '../pages/Homepage'
import Myrecipies from '../pages/Myrecipies'
import Myfavouriterecipies from '../pages/Myfavouriterecipies'
export default function Reactrouter() {
  return (
    // <div>Reactrouter</div>
    <>
    <BrowserRouter>

    <Routes>
     {/* <Route path="/" element={<Layout />}> */}
       {/* <Route index element={<Home />} /> */}
       <Route path="/login" element={<Login />} />
       <Route path="/register" element={<Register />} />
       <Route path="/createrecipe" element={<Createrecipe />} />
       <Route path="/home" element={<Homepage/>} />
       <Route path="/myrecipe" element={<Myrecipies/>} />
       <Route path="/myfavouriterecipe" element={<Myfavouriterecipies/>} />
       <Route path="*" element={<Register />} />
     {/* </Route> */}
   </Routes>
    </BrowserRouter>
 </>
        
  )
}
