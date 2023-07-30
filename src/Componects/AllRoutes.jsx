import React from 'react'
import Home from '../Pages/Home'
import Card from '../Pages/Card'
import Contact from '../Pages/Contact'
import FAQ from '../Pages/FAQ'
import { Route, Routes } from 'react-router-dom'
import Video from '../Pages/Video'
import ItemDetails from '../Pages/ItemDetails'
import Admin from '../AdminPages/Admin'
import AdminCard from '../AdminPages/AdminCard'
import AdminDelete from '../AdminPages/AdminDelete'
import AdminBanner from '../AdminPages/AdminBanner'
import AdminAds from '../AdminPages/AdminAds'
import AdminForm from '../AdminPages/AdminForm'
import GoggleForm from '../Pages/GoggleForm'
import Login from '../Login/Login'
import VideoShow from '../Pages/VideoShow'
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} ></Route>
      <Route path="/video" element={<Video/>} ></Route>
      <Route path="/videoShow" element={<VideoShow/>} ></Route>
      <Route path="/card" element={<Card/>} ></Route>
      <Route path="/login" element={<Login/>} ></Route>
      <Route path="/contact" element={<Contact/>} ></Route>
      <Route path="/faq" element={<FAQ/>} ></Route>
      <Route path="/ItemDetails" element={<ItemDetails/>} ></Route>
      <Route path="/admin" element={<Admin/>} ></Route>
      <Route path="/adminCard" element={<AdminCard/>} ></Route>
      <Route path="/adminDelete" element={<AdminDelete/>} ></Route>
      <Route path="/adminBanner" element={<AdminBanner/>} ></Route>
      <Route path="/adminAds" element={<AdminAds/>} ></Route>
      <Route path="/adminForm" element={<AdminForm/>} ></Route>
    </Routes>
  )
}

export default AllRoutes
