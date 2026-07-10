import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'
import PetList from './components/PetList'
import Navbar from './components/Navbar'
import Header from './components/Header'
import AboutUs from './components/AboutUs'
import Footer from './components/footer'


function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <PetList/>
      <Footer />
    </div>
  )
}

export default App
