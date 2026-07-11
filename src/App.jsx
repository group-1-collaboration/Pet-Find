import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'
import PetList from './components/PetList'
import Navbar from './components/Navbar'
import Header from './components/Header'
import AboutUs from './components/AboutUs'
import Footer from './components/footer'
import  Login  from './pages/Login'
import Register from './pages/Register'
<<<<<<< HEAD
=======
import { seedAdmin } from './utils/seedAdmin'
>>>>>>> 8073290ba8e5434b2a6c29f085dfbc3ab6f69f4a
import Dashboard from './pages/Dashboard'

function Home(){
  return(
    <>
     <Navbar />
      <Header />
      <AboutUs />
      <PetList/>
      <Footer />
    </>
  )
}

function App() {
  useEffect(() => {
    seedAdmin();
  }, []);
  return (
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
  )
}

export default App;
