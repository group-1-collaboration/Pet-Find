import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import React from 'react'
import PetList from './components/PetList'
import Navbar from './components/Navbar'
import Header from './components/Header'
import PetDetails from './components/PetDetails'
import AboutUs from './components/AboutUs'
import Footer from './components/Footer'
import  Login  from './pages/Login'
import Register from './pages/Register'
import { seedAdmin } from './utils/seedAdmin'
import Dashboard from './pages/Dashboard'
import { useEffect } from 'react'
import { useAuth } from './context/AuthContext'
import Categories from './components/Categories'
import CategoryPets from './components/CategoryPets'
import MainLayout from './layouts/MainLayout'
import BookingForm from './pages/BookingForm'
import AdoptionForm from './pages/AdaptationForm'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import About from './pages/About'

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
    <div className='min-h-screen bg-white dark:bg-black text-black  dark:text-white'>
       <Routes>

        <Route element={<MainLayout/>}>
        
        <Route path='/pets/:id' element={<PetDetails/>}/>
        <Route path='/pets' element={<PetList/>}/>
        <Route path='/category/:categoryName' element={<CategoryPets/>}/>
        </Route>
        <Route path="/contact" element={<Contact/>} />
        <Route path="/privacy" element={<Privacy/>} />
        <Route path="/terms" element={<Terms/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/booking/:id" element={<BookingForm />} />
        <Route path="/adopt/:id" element={<AdoptionForm />} />

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
    </div>
     
  );
}

export default App;
