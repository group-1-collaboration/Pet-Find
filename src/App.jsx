import React from 'react'
import PetList from './components/PetList'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Footer from './components/footer'

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <PetList/>
      <Footer />
    </div>
  )
}

export default App
