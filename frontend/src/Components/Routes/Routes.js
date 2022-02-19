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
      <Route path="/weather" element={<WeatherCardScreen />} />
      <Route path="/university" element={<UniversityCardScreen />} />
      <Route path="/animal" element={<Animal />} />
      <Route path="/quotes" element={<QuotesScreen />} />
      <Route path="/covid" element={<CovidScreen />} />
      <Route path="/quran-book" element={<QuranBookScreen />} />
      <Route path="/ip-geo" element={<IpGeo />} />
      <Route path="/live-all-articles" element={<AllArticals />} />
      <Route path="/business-articles" element={<BusinessArticals />} />
      <Route
        path="/last-six-month-articles"
        element={<LastSixMonthArticle />}
      />
      <Route path="/tech-crunch-article" element={<TechCrunchArticles />} />
      <Route path="/yesterday-article" element={<YesterdayArticles />} />
      <Route path="/bike-screen" element={<BikeScreen />} />
      <Route
        path="/administrative-divisions-db"
        element={<AdministrativeDivisons />}
      />
    </Routes>
  );
}

export default ScreenRoutes