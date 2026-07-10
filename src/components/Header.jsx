import React from 'react'
import backgroundImage from "@/assets/headerbg.png"

function Header() {
  return (
    <header style={{
        backgroundImage:`url(${backgroundImage})`,
        backgroundSize:"cover",
        backgroundPosition:"center",
        height: "500px",
        }}>
          <h1 className='text-7xl text-white font-bold'>Everyone needs a </h1>
          <span className='text-7xl text-orange-500 font-bold'>Home.</span>
          <p className='text-xl text-white'>Open your heart. Change a life. <p>Find your perfect companion today.</p> </p>
    </header>

  )
}

export default Header