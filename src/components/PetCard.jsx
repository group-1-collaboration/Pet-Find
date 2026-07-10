import React from 'react'
import { Link } from 'react-router-dom'

function PetCard({pet}) {
  return (
    <div className='bg-white rounded-lg shadow-md p-4 '>
      
      <img src={pet.image} alt={pet.name} className='w-full object-cover rounded-md'/>

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

     <Link to={`/pets/${pet.id}`}>
     <button className='mt-7 bg-orange-500 text-white px-4 py-2 rounded mt-auto hover:bg-orange-600 cursor-pointer'>
        View Details
      </button>
     </Link>
      
    </div>
  )
}

export default PetCard
