import React from 'react'
import MainPage from '../pages/MainPage'
import { Routes,Route } from 'react-router-dom'
import Yonetim from '../pages/Yonetim'
import Bolumler from '../pages/Bolumler'
import Fakulteler from '../pages/Fakulteler'
import Misyon from '../pages/Misyon'
import Kantin from '../pages/Kantin'
import Yerleskeler from '../pages/Yerleskeler'
import Besiktas from '../pages/Besiktas'
import Kadikoy from '../pages/Kadikoy'
import Sariyer from '../pages/Sariyer'
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
      </Routes>
    </div>
  )
}
