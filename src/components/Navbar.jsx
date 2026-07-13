import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
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
   const {user,isAuthenticated ,logout} = useAuth();

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
    <Link to={'/about'} className="hover:text-orange-400 transition duration-300">
      About us 
    </Link>
    </div>

   <div>
    <Link to={'/contact'} className="hover:text-orange-400 transition duration-300">
      contact
    </Link>
    </div>

  {/* Show favourites only for logged-in users */}
{isAuthenticated && (
  <Dialog
    open={isFavouritesOpen}
    onOpenChange={setisFavouritesOpen}
  >
    {/* Button that opens the dialog */}
    <DialogTrigger
      className="relative inline-flex items-center justify-center rounded-lg p-2 hover:bg-muted transition-colors"
    >
      <Heart className="w-5 h-5" />

      {favouriteCount > 0 && (
        <span className="absolute -top-1 -right-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-xs font-bold text-white">
          {favouriteCount}
        </span>
      )}
    </DialogTrigger>

    {/* Dialog content */}
    <DialogContent className="text-white">
      <DialogHeader>
        <DialogTitle className="text-white">
          My Favourite Pets
        </DialogTitle>
      </DialogHeader>

      {favourites.length === 0 ? (
        <p>You haven't added any favourite pets yet.</p>
      ) : (
        favourites.map((pet) => (
          <div
            key={pet.id}
            className="flex items-center gap-4 border-b py-3"
          >
            <img
              src={pet.image}
              alt={pet.name}
              className="w-16 h-16 rounded-lg object-cover"
            />

            <div>
              <h3 className="font-bold">{pet.name}</h3>
              <p className="text-sm">{pet.breed}</p>
            </div>
          </div>
        ))
      )}
    </DialogContent>
  </Dialog>
)}
        <div>
         {/* Theme Controller */}
        <Button variant="ghost" size="icon" onClick={toggleTheme} className="h-9 w-9">
          {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </Button>
        </div>

{isAuthenticated && user?.role === "admin" && (
  <Link to="/dashboard">
    <Button className="bg-orange-700 text-white rounded hover:bg-orange-600">
      Admin Dashboard
    </Button>
  </Link>
)}

<div className="flex items-center gap-3 pl-2 border-l border-muted text-sm font-medium">             
{isAuthenticated ? (
  <>
  <div className="flex items-center gap-4">
    <span className="font-medium text-slate-800 dark:text-white">
      👤 {user.fullName}
    </span>

    <Button
      onClick={logout}
      className="rounded-md bg-orange-500 px-3 py-2 text-white hover:bg-orange-600"
    >
      Logout
    </Button>
    </div >
    </>
 ) : (
<>
<Link to={'/login'}>
             <Button className="bg-orange-400 text-primary-foreground px-3 py-1.5 rounded-md hover:opacity-90 transition-opacity">
              Login
             </Button>
            </Link>
</>        
)}

</div>
</nav>
 
)
}

export default Navbar