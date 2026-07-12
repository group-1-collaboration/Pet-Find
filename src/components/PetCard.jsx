import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Heart } from 'lucide-react'
import { FavouritesContext } from './context/FavouritesContext'

function PetCard({pet}) {
  //Get the favourites list and setFavourite formthe context
  const {favourites, setFavourites} = useContext(FavouritesContext);

  //Add and remove a pet
  function toggleFavourites(){
    //check if pet is already there
    const exists = favourites.find(
      (item) => item.id === pet.id
    );

    if(exists){
      setFavourites(favourites.filter((item)=> item.id !== pet.id))
  }else{
    //add to fav
    setFavourites([...favourites, pet]);
  }
    }
  
  return (
    <div className='bg-white rounded-lg shadow-md p-4 '>
      
      <img src={pet.image} alt={pet.name} className='w-full h-90 object-cover rounded-md'/>

      <h2 className='text-xl font-bold mt-3'>
        {pet.name}
      </h2>

      <p>
        <strong>Breed:</strong> {pet.Breed}
      </p>

      <p>
         <strong>Gender:</strong> {pet.gender}     
          </p>

      <p>
        <strong>Description:</strong> {pet.description}
      </p>
    <div className='flex justfy-between gap-50 mt-6'>
   <Link to={`/pets/${pet.id}`}>
     <button className='mt-7 bg-orange-500 text-white px-4 py-2 rounded mt-auto hover:bg-orange-600 cursor-pointer'>
        View Details
      </button>
     </Link>
      
      <Heart
      onClick={toggleFavourites}
      fill={favourites.some(item => item.id === pet.id)
             ? "red"
             : "none"
      }
      className='cursor-pointer hover:text-red-500'/>
     </div>
    
    </div>
  )

}

export default PetCard
