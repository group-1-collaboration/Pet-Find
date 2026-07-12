import React from 'react'
import backgroundImage from "@/assets/headerbg.png"
import { Link } from 'react-router-dom'
import { Button } from '@base-ui/react'
import { PawPrint } from 'lucide-react'
import { Search } from 'lucide-react'
import { useAuth } from '@/context/AuthContext'

function Header() {

  const {isAuthenticated,user} = useAuth();

  return (
    <header style={{
        backgroundImage:`url(${backgroundImage})`,
        backgroundSize:"cover",
        backgroundPosition:"center",
        height: "500px",
        }}>
          {!isAuthenticated ? (
            <>
            <div className='p-3'>
          <h1 className='text-7xl text-white font-bold'>Everyone needs a </h1>
          <span className='text-7xl text-orange-500 font-bold'>Home.</span>
          </div>

         <div className='p-3'>
          <h3 className='text-2xl text-white'>Open your heart. Change a life. <p>Find your perfect companion today.</p></h3>
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
            <Link to={"/pets"}>
            <Button className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white text-primary-foreground px-3 py-1.5 rounded-md hover:opacity-90 transition-opacity">
               Browse pets<Search className='w-5 h-5'/> 
             </Button>
            </Link>
          </div>
           </div>
            </>
            ):(
              <>
              <div className='p-3'>

              <h1 className="font-bold text-7xl text-white font-bold">
                  Welcome back, <p><span className='text-7xl text-orange-500 font-bold'>{user?.fullName}!</span></p>
                </h1>

                  <h2 className="mt-4 text-lg text-white ">
                        Continue exploring pets, manage your favorites,<p> or book a visit with your future companion.</p>
                    </h2>

                <div className=' py-8 px-7'>
                  <Link to={"/pets"}>
                    <Button className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white text-primary-foreground px-3 py-1.5 rounded-md hover:opacity-90 transition-opacity">
                      Browse pets<Search className='w-5 h-5'/> 
                   </Button>
                 </Link>
                 </div>
                 
                 </div>
                  </>
          )}         
    </header>

  )
}

export default Header