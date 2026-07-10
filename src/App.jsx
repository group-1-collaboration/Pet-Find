import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'
import PetList from './components/PetList'
import Navbar from './components/Navbar'
import Header from './components/Header'
import PetDetails from './components/PetDetails'

function App() {
  return (
    <>
    <Router>
      <Navbar /> 
      <Header />
      <Routes>
        <Route path='/' element={<PetList/>}/>
        <Route path='/pets/:id' element={<PetDetails/>}/>
      </Routes>
    </Router>
     
      
    </>
  )
}

export default App
