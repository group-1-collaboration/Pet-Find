import { Link } from "react-router-dom"
import { Button } from "@base-ui/react"

function Navbar() {
  return (
<nav className="sticky top-0 z-50 w-full border-b border-orange-100/20 bg-black/80 backdrop-blur-md supports-[backdrop-filter]:bg-black/60 flex justify-between items-center p-4 text-white">
    {/* Clickable Brand Title navigating back home */}
      <div className="text-xl font-bold tracking-tight hover:opacity-90 transition-opacity">
        <Link to={'/'}>
        <p className='text-2xl'> Pet<span className='text-orange-400'>Find</span></p>  
        </Link>
      </div>
    
     <div>
     <Link to={'/'} className="hover:text-orange-400 transition duration-300">
     Home
     </Link>
    </div>

     
   <div>
    <Link to={'/contact'} className="hover:text-orange-400 transition duration-300">
      About us 
    </Link>
    </div>

   <div>
    <Link to={'/footer'} className="hover:text-orange-400 transition duration-300">
      contact
    </Link>
    </div>
    
          <div className="flex items-center gap-3 pl-2 border-l border-muted text-sm font-medium">
            <Link to={'/login'}>
             <Button className="bg-orange-400 text-primary-foreground px-3 py-1.5 rounded-md hover:opacity-90 transition-opacity">
              Login
            </Button>
            </Link>
            
          </div>
</nav>
 
)
}

export default Navbar