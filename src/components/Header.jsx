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
          <div className='p-3'>
          <h1 className='text-7xl text-white font-bold'>Everyone needs a </h1>
          <span className='text-7xl text-orange-500 font-bold'>Home.</span>
          </div>

         <div className='p-3'>
          <p className='text-xl text-white'>Open your heart. Change a life. <p>Find your perfect companion today.</p> </p>
         </div>

        <div>
          <Link to={'/register'}>
             <Button className="bg-amber-500 hover:bg-amber-600 text-white text-primary-foreground px-3 py-1.5 rounded-md hover:opacity-90 transition-opacity">
              sign up 
             </Button>
            </Link>
        </div>
            
    </header>

  )
}

export default Header