import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'
import PetList from './components/PetList'
import Navbar from './components/Navbar'
import Header from './components/Header'

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <PetList/>
    </div>
  )
}

export default App
