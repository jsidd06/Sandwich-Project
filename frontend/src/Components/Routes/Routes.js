import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Animal from '../../views/Animal/Animal'
import Home from '../../views/Home/Home'
import UniversityCardScreen from '../../views/UniversityCardScreen/UniversityCardScreen'
import WeatherCardScreen from '../../views/WeatherCardScreen/WeatherCardScreen'

function ScreenRoutes() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/weather" element={<WeatherCardScreen />} />
      <Route path="/university" element={<UniversityCardScreen />} />
      <Route path="/animal" element={<Animal />} />
    </Routes>
  );
}

export default ScreenRoutes