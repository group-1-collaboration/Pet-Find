
function Navbar() {
  return (
<nav className="sticky top-0 z-50 w-full border-b bg-slate-700/95 backdrop-blur supports-backdrop-filter:bg-slate-700/60 flex justify-between items-center p-4 text-white">
      {/* Clickable Brand Title navigating back home */}
      <div className="text-xl font-bold tracking-tight hover:opacity-90 transition-opacity">
        <Link to={'/'}>
        <p className='text-2xl'> Eye<span className='text-blue-400'>see</span></p>  
        </Link>
      </div>
    
     <div>
     <Link to={'/'} className="hover:text-cyan-400 transition duration-300">
     Home
     </Link>
    </div>

     
   <div>
    <Link to={'/footer'} className="hover:text-cyan-400 transition duration-300">
      contact 
    </Link>
    </div>
    
          <div className="flex items-center gap-3 pl-2 border-l border-muted text-sm font-medium">
            <Link to={'/login'}>
             <Button className="bg-primary text-primary-foreground px-3 py-1.5 rounded-md hover:opacity-90 transition-opacity">
              Login
            </Button>
            </Link>
           

             <Link to={'/register'}>
             <Button className="bg-primary text-primary-foreground px-3 py-1.5 rounded-md hover:opacity-90 transition-opacity">
              sign up 
            </Button>
             </Link>
            
          </div>
</nav>
 
)
}

export default Navbar