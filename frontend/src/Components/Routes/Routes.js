import React from 'react'
import { Route,Routes } from 'react-router-dom'
import AdministrativeDivisons from '../../views/AdministrativeDivisons/AdministrativeDivisons'
import Animal from '../../views/Animal/Animal'
import LastSixMonthArticle from '../../views/Articals/AllArticals'
import AllArticals from '../../views/Articals/AllArticals'
import BusinessArticals from '../../views/Articals/BusinessArticals'
import TechCrunchArticles from '../../views/Articals/TechCrunchArticles'
import YesterdayArticles from '../../views/Articals/YesterdayArtical'
import BikeScreen from '../../views/BikeScreen/BikeScreen'
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
      <Route path="/Sandwich-Project" exact element={<Home />} />
      <Route path="/Sandwich-Project/weather" element={<WeatherCardScreen />} />
      <Route
        path="/Sandwich-Project/university"
        element={<UniversityCardScreen />}
      />
      <Route path="/Sandwich-Project/animal" element={<Animal />} />
      <Route path="/Sandwich-Project/quotes" element={<QuotesScreen />} />
      <Route path="/Sandwich-Project/covid" element={<CovidScreen />} />
      <Route
        path="/Sandwich-Project/quran-book"
        element={<QuranBookScreen />}
      />
      <Route path="/Sandwich-Project/ip-geo" element={<IpGeo />} />
      <Route
        path="/Sandwich-Project/live-all-articles"
        element={<AllArticals />}
      />
      <Route
        path="/Sandwich-Project/business-articles"
        element={<BusinessArticals />}
      />
      <Route
        path="/Sandwich-Project/last-six-month-articles"
        element={<LastSixMonthArticle />}
      />
      <Route
        path="/Sandwich-Project/tech-crunch-article"
        element={<TechCrunchArticles />}
      />
      <Route
        path="/Sandwich-Project/yesterday-article"
        element={<YesterdayArticles />}
      />
      <Route path="/Sandwich-Project/bike-screen" element={<BikeScreen />} />
      <Route
        path="/Sandwich-Project/administrative-divisions-db"
        element={<AdministrativeDivisons />}
      />
    </Routes>
  );
}

export default ScreenRoutes