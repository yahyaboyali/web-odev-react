import React from 'react'
import MainPage from '../pages/MainPage'
import { Routes,Route } from 'react-router-dom'
import Yonetim from '../pages/Yonetim'
import Bolumler from '../pages/Bolumler'
import Fakulteler from '../pages/Fakulteler'
import Misyon from '../pages/Misyon'
import Kantin from '../pages/Kantin'
import Yerleskeler from '../pages/Yerleskeler'
import Besiktas from '../pages/Yerleskeler/Besiktas'
import Kadikoy from '../pages/Yerleskeler/Kadikoy'
import Sariyer from '../pages/Yerleskeler/Sariyer'
import Muhendislik from '../pages/Fakulteler/Muhendislik'
import Tip from '../pages/Fakulteler/Tip'
import GuzelSanatlar from '../pages/Fakulteler/GuzelSanatlar'
import Veterinerlik from '../pages/Fakulteler/Veterinerlik'
import Orman from '../pages/Fakulteler/Orman'
import SporBilimleri from '../pages/Fakulteler/SporBilimleri'
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
        <Route path='/Yerleskeler/Besiktas' element={<Besiktas/>} exact/>
        <Route path='/Yerleskeler/Kadikoy' element={<Kadikoy/>} exact/>
        <Route path='/Yerleskeler/Sariyer' element={<Sariyer/>} exact/>
        <Route path='/Fakulteler/Muhendislik' element={<Muhendislik/>} exact/>
        <Route path='/Fakulteler/Tip' element={<Tip/>} exact/>
        <Route path='/Fakulteler/GuzelSanatlar' element={<GuzelSanatlar/>} exact/>
        <Route path='/Fakulteler/Veterinerlik' element={<Veterinerlik/>} exact/>
        <Route path='/Fakulteler/Orman' element={<Orman/>} exact/>
        <Route path='/Fakulteler/SporBilimleri' element={<SporBilimleri/>} exact/>
      </Routes>
    </div>
  )
}
