import React from 'react'
import Home from '../Pages/Home'
import Card from '../Pages/Card'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import FAQ from '../Pages/FAQ'
import { Route, Routes } from 'react-router-dom'
import Video from '../Pages/Video'
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} ></Route>
      <Route path="/video" element={<Video/>} ></Route>
      <Route path="/card" element={<Card/>} ></Route>
      <Route path="/about" element={<About/>} ></Route>
      <Route path="/contact" element={<Contact/>} ></Route>
      <Route path="/faq" element={<FAQ/>} ></Route>
    </Routes>
  )
}

export default AllRoutes
