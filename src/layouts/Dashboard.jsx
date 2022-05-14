import React from 'react'
import MainPage from '../pages/MainPage'
import { Routes,Route } from 'react-router-dom'
import Yonetim from '../pages/Yonetim'
import Bolumler from '../pages/Bolumler'
import Fakulteler from '../pages/Fakulteler'
import Misyon from '../pages/Misyon'
import Kantin from '../pages/Kantin'
import Yerleskeler from '../pages/Yerleskeler'
export default function Dasboard () {
  return (
    <div>
        <Routes>  
        <Route path="/" element={<MainPage />} />
        <Route path='/Yonetim' element={<Yonetim/>} exact/>
        <Route path='/Bolumler' element={<Bolumler/>} exact/>
        <Route path='/Fakulteler' element={<Fakulteler/>} exact/>
        <Route path='/Misyon' element={<Misyon/>} exact/>
        <Route path='/Kantin' element={<Kantin/>} exact/>
        <Route path='/Yerleskeler' element={<Yerleskeler/>} exact/>
      </Routes>
    </div>
  )
}
