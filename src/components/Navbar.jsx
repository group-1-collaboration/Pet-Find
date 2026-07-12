import { Link } from "react-router-dom"
import { Button } from "@base-ui/react"
import { Heart,Sun,Moon } from "lucide-react"
import { useContext, useState } from "react"
import { FavouritesContext } from './context/FavouritesContext'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import { useAuth } from "@/context/AuthContext"
import { ThemeContext } from "./context/ThemeContext"

function Navbar() {
  const {favourites} = useContext(FavouritesContext)
  const [isFavouritesOpen, setisFavouritesOpen] = useState(false)
  const favouriteCount = favourites?.length || 0;

   const { theme, toggleTheme } = useContext(ThemeContext);
   const {isAuthenticated } = useAuth();

  return (
<nav className="sticky top-0 z-50 w-full border-b border-orange-100/20 bg-black/80 backdrop-blur-md dark:bg-black supports-[backdrop-filter]:bg-black/60 flex justify-between items-center p-4 text-white">
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

  {/*make the favorites icon conditionally render for a logged in user*/}
    {/* favorites pop up */}
   {isAuthenticated && (
    <Dialog 
    open={isFavouritesOpen}
    onOpenChange={setisFavouritesOpen}>
      {/* button that opens pop up */}
     <DialogTrigger asChild>
      <button className="relative p-2">

        <Heart className="w-5 h-5"/>

        {/* only show the number when favourites exists */}
        {favouriteCount > 0 && (
          <span className="absolute -top-1 -right-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-xs font-bold text-white">
            {favouriteCount}
          </span>
        )}
      </button>
     </DialogTrigger>

     {/* pop up content */}
     <DialogContent className="text-white">
      <DialogHeader>
        <DialogTitle className="text-white">
          My Favourite pets
        </DialogTitle>
      </DialogHeader>

      {/* If there are no favourites */}
      {favourites.length === 0 ? (
        <p>You haven't added any favourite pets yet.</p>
      ): (
        //loop through favourites pets
        favourites.map((pet) => (
          <div 
          key={pet.id}
          className="flex items-center gap-4 border-b py-3">

            <img src={pet.image} alt={pet.name} className="w-16 h-16 object-cover rounded-lg"/>

            <div>
              <h3 className="font-bold">{pet.name}</h3>
              <p className="text-sm">{pet.Breed}</p>
            </div>
          </div>
        ))
      )}
     </DialogContent>
    </Dialog>
   )}
    
        
         {/* Theme Controller */}
        <Button variant="ghost" size="icon" onClick={toggleTheme} className="h-9 w-9">
          {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </Button>
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