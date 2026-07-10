import React from 'react'
import backgroundImage from "@/assets/bgImage.jpg"

function Header() {
  return (
    <header style={{
        backgroundImage:`url(${backgroundImage})`,
        backgroundSize:"cover",
        backgroundPosition:"center",
        height: "500px",
        }}>
    </header>

  )
}

export default Header