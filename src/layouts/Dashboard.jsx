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
import SosyalBilimler from '../pages/Fakulteler/SosyalBilimler'
import BilgisayarMuhendisligi from '../pages/Bolumler/Fakulteler/Muhendislik/BilgisayarMuhendisligi'
import EndustriMuhendisligi from '../pages/Bolumler/Fakulteler/Muhendislik/EndustriMuhendisligi'
import InsaatMuhendisligi from '../pages/Bolumler/Fakulteler/Muhendislik/InsaatMuhendisligi'
import VeterinerHekimligiTemelBilimler from '../pages/Bolumler/Fakulteler/Veteriner/VeterinerHekimligiTemelBilimler'
import KlinikBilimler from '../pages/Bolumler/Fakulteler/Veteriner/KlinikBilimler'
import BesinGidaHijyeniTeknolojisi from '../pages/Bolumler/Fakulteler/Veteriner/BesinGidaHijyeniTeknolojisi'
import OrmanMuhendisligi from '../pages/Bolumler/Orman/OrmanMuhendisligi'
import OrmanEndustriMuhendisligi from '../pages/Bolumler/Orman/OrmanEndustriMuhendisligi'
import PeyzajMimarligi from '../pages/Bolumler/Orman/PeyzajMimarligi'
import Psikoloji from '../pages/Bolumler/Fakulteler/SosyalBilimler/Psikoloji'

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
        <Route path='/Fakulteler/SosyalBilimler' element={<SosyalBilimler/>} exact/>
        <Route path='/Bolumler/BilgisayarMuhendisligi' element={<BilgisayarMuhendisligi/>} exact/>
        <Route path='/Bolumler/EndustriMuhendisligi' element={<EndustriMuhendisligi/>} exact/>
        <Route path='/Bolumler/InsaatMuhendisligi' element={<InsaatMuhendisligi/>} exact/>
        <Route path='/Bolumler/KlinikBilimler' element={<KlinikBilimler/>} exact/>
        <Route path='/Bolumler/VeterinerHekimligiTemelBilimler' element={<VeterinerHekimligiTemelBilimler/>} exact/>
        <Route path='/Bolumler/BesinGidaHijyeniTeknolojisi' element={<BesinGidaHijyeniTeknolojisi/>} exact/>
        <Route path='/Bolumler/OrmanMuhendisligi' element={<OrmanMuhendisligi/>} exact/>
        <Route path='/Bolumler/OrmanEndustriMuhendisligi' element={<OrmanEndustriMuhendisligi/>} exact/>
        <Route path='/Bolumler/PeyzajMimarligi' element={<PeyzajMimarligi/>} exact/>
        <Route path='/Bolumler/Psikoloji' element={<Psikoloji/>} exact/>
      </Routes>
    </div>
  )
}
