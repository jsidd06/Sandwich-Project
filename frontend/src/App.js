import React from 'react'
import {BrowserRouter} from "react-router-dom"
import ScreenRoutes from './Components/Routes/Routes'

function App() {
  return (
    <BrowserRouter>
    <ScreenRoutes />
    </BrowserRouter>
  )
}

export default App