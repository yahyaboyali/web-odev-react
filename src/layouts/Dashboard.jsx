import React from 'react'
import { Routes,Route } from 'react-router-dom'

import MainPage from '../pages/MainPage'
import Yonetim from '../pages/Yonetim'
import Misyon from '../pages/Misyon'
import IdariBirimler from '../pages/IdariBirimler'
import Kantin from '../pages/Kantin'
import Yerleskeler from '../pages/Yerleskeler'
import Takvim from '../pages/Takvim'
import Yerleske from '../pages/Yerleskeler/Yerleske'
import Department from '../pages/Bolumler/Department'
import DepartmentSlides from '../pages/Bolumler/DepartmentSlide'

export default function Dasboard () {
  return (
    <div>
        <Routes>  
        <Route path="/" element={<MainPage />} />
        <Route path='/Yonetim' element={<Yonetim/>} exact/>
        <Route path='/Misyon' element={<Misyon/>} exact/>
        <Route path='/IdariBirimler' element={<IdariBirimler/>} exact/>
        <Route path='/Kantin' element={<Kantin/>} exact/>
        <Route path='/Yerleskeler' element={<Yerleskeler/>} exact/>
        <Route path='/Takvim' element={<Takvim/>} exact/>
        <Route path='/Yerleskeler/:id' element={<Yerleske/>} exact/>
        <Route path='/Department/:id' element={<Department/>} exact/>
        <Route path='/Department-Slides/:id' element={<DepartmentSlides/>} exact/>
      </Routes>
    </div>
  )
}
