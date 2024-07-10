import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { CharactersScreen } from '../components/characters/CharactersScreen'
import { ComicsScreen } from '../components/comics/ComicsScreen'
import { SeriesScreen } from '../components/series/SeriesScreen'
import { StoriesScreen } from '../components/stories/StoriesScreen'
import { Navbar } from '../components/ui/Navbar'



export const DashboardRoutes = () => {
  return (
    <>
        <Navbar/>

        <div className="container animate__animated animate__fadeInDown">
          <Routes>
              <Route path="/Comics" element={<ComicsScreen />} />
              <Route path="/Series" element={<SeriesScreen/>} />
              <Route path="/Stories" element={<StoriesScreen/>} />
              <Route path="/Characters" element = {<CharactersScreen/>} />
              <Route path="/" element={<ComicsScreen />} />
              <Route path="/*" element={ <ComicsScreen/> } /> 
          </Routes>
        </div>

        

    </>
  )
}
