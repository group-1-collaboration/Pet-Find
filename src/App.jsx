import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import React from 'react'
import PetList from './components/PetList'
import Navbar from './components/Navbar'
import Header from './components/Header'
import PetDetails from './components/PetDetails'
import AboutUs from './components/AboutUs'
import Footer from './components/footer'
import  Login  from './pages/Login'
import Register from './pages/Register'
import { seedAdmin } from './utils/seedAdmin'
import Dashboard from './pages/Dashboard'
import { useEffect } from 'react'
import { useAuth } from './context/AuthContext'
import Categories from './components/Categories'
import CategoryPets from './components/CategoryPets'
import MainLayout from './layouts/MainLayout'

function Home(){
  return(
    <>
     <Navbar />
      <Header />
      <AboutUs />
      <Categories/>
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

        <Route element={<MainLayout/>}>
        
        <Route path='/pets/:id' element={<PetDetails/>}/>
        <Route path='/pets' element={<PetList/>}/>
        <Route path='/category/:categoryName' element={<CategoryPets/>}/>
        </Route>

        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        
        <Route path="/dashboard" 
        element={
        isAuthenticated && user?.role === "admin"
          ?<Dashboard/>
          :<Navigate to= "/" replace/>
        }
        />
      </Routes>
  );
}

export default App;
