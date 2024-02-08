import { useState } from 'react'
import {Route, Routes} from 'react-router-dom'

import Nav from './Components/Nav'
// import Footer from './Components/Footer'
import Project from './Components/Project'
import Home from './Components/Home'
import AboutMe from './Components/AboutMe'

import './App.css'

function App() {
  

  return (
    <>
      <Nav/>
        <Routes>
          <Route path = '/' element = { <Home /> } />
          <Route path = '/aboutme' element = { <AboutMe /> } />
          <Route path = '/project' element = { <Project /> } />
        </Routes>
      {/* <Footer /> */}
    </>
  )
}

export default App
