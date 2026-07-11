import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'
import PetList from './components/PetList'
import Navbar from './components/Navbar'
import Header from './components/Header'
import AboutUs from './components/AboutUs'
import Footer from './components/footer'
import  Login  from './pages/Login'
import Register from './pages/Register'
import { seedAdmin } from './utils/seedAdmin'
import Dashboard from './pages/Dashboard'
import { useEffect } from 'react'
import { useAuth } from './context/AuthContext'

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

  const {user,isAuthenticated}= useAuth();

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
