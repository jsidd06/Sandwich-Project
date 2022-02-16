import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Animal from './views/Animal/Animal'
import Home from './views/Home/Home'
import UniversityCardScreen from './views/UniversityCardScreen/UniversityCardScreen'
import WeatherCardScreen from './views/WeatherCardScreen/WeatherCardScreen'
function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/weather" element={<WeatherCardScreen />} />
            <Route path="/university" element={<UniversityCardScreen />} />
            <Route path="/animal" element={<Animal />} />
            </Routes>
    </BrowserRouter>
  )
}

export default App