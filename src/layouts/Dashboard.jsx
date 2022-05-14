import React from 'react'
import MainPage from '../pages/MainPage'
import { Routes,Route } from 'react-router-dom'
import Yonetim from '../pages/Yonetim'
export default function Dasboard () {
  return (
    <div>
        <Routes>  
        <Route path="/" element={<MainPage />} />
        <Route path='/Yonetim' element={<Yonetim/>} exact/>
      </Routes>
    </div>
  )
}
