import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './views/Home/Home'
import WeatherCardScreen from './views/WeatherCardScreen/WeatherCardScreen'
function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/weather" element={<WeatherCardScreen />} />
            </Routes>
    </BrowserRouter>
  )
}

export default App