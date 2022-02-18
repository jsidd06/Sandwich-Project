import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Animal from '../../views/Animal/Animal'
import CovidScreen from '../../views/CovidScreen/CovidScreen'
import Home from '../../views/Home/Home'
import IpGeo from '../../views/IpGeo/IpGeo'
import QuotesScreen from '../../views/QuotesScreen/Quotes'
import QuranBookScreen from '../../views/QuranBookScreen/QuranBookScreen'
import UniversityCardScreen from '../../views/UniversityCardScreen/UniversityCardScreen'
import WeatherCardScreen from '../../views/WeatherCardScreen/WeatherCardScreen'

function ScreenRoutes() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/weather" element={<WeatherCardScreen />} />
      <Route path="/university" element={<UniversityCardScreen />} />
      <Route path="/animal" element={<Animal />} />
      <Route path="/quotes" element={<QuotesScreen />} />
      <Route path="/covid" element={<CovidScreen />} />
      <Route path="/quran-book" element={<QuranBookScreen />} />
      <Route path="/ip-geo" element={<IpGeo />} />
    </Routes>
  );
}

export default ScreenRoutes