import { useState } from 'react'
import {Route, Routes} from 'react-router-dom'

import Nav from './Components/Nav'
// import Footer from './Components/Footer'
import Project from './Components/Project'
import Home from './Components/Home'
import AboutMe from './Components/AboutMe'

import Education from './Components/Education'
import WorkHistory from './Components/WorkHistory'
import Skills from './Components/Skills'

import BookNook from './Components/BookNook'

import './App.css'

function App() {
  

  return (
    <>
      <Nav/>
        <Routes>
          <Route path = '/' element = { <Home /> } />
          <Route path = '/aboutme' element = { <AboutMe /> } />
          <Route path = '/project' element = { <Project /> } />
          <Route path = '/education' element = {<Education />} />
          <Route path = '/workhistory' element = {<WorkHistory />} />
          <Route path = '/skills' element = {<Skills />} />
          <Route path = '/booknook' element = {<BookNook />} />
        </Routes>
      {/* <Footer /> */}
    </>
  )
}

export default App
