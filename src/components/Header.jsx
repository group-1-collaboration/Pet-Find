import React from 'react'
import backgroundImage from "@/assets/headerbg.png"
import { Link } from 'react-router-dom'
import { Button } from '@base-ui/react'
import { PawPrint } from 'lucide-react'
import { Search } from 'lucide-react'

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
          <p className='text-xl text-white'>Open your heart. Change a life. <p>Find your perfect companion today.</p></p>
          <p className='text-lg text-orange-500'>Register, to adopt a pet or <a href="#login" className='text-orange-300 '> sign in </a> to your account. </p>
         </div>

        <div className=' flex '>
          <div className='p-3'>
           <Link to={'/register'}>
             <Button className="flex items-center gap-2 bg-orange-500 hover:bg-amber-600 text-white text-primary-foreground px-3 py-1.5 rounded-md hover:opacity-90 transition-opacity">
               Register<PawPrint className='w-5 h-5'/> 
             </Button>
            </Link> 
          </div>
          <div className='p-3'>
             <Button className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white text-primary-foreground px-3 py-1.5 rounded-md hover:opacity-90 transition-opacity">
               Browse pets<Search className='w-5 h-5'/> 
             </Button>
          </div>
            
        </div>


            
    </header>

  )
}

export default Header