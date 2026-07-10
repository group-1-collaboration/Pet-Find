import React from 'react'

function PetCard({pet}) {
  return (
    <div className='bg-white rounded-lg shadow-md p-4 overflow-hidden flex flex-col h-full'>
      
      <img src={pet.image} alt={pet.name} className='w-full h-56 object-cover rounded-md'/>

      <h2 className='text-xl font-bold mt-3'>
        {pet.name}
      </h2>

      <p>
        <strong>Breed:</strong>{pet.Breed}
      </p>

      <p>
         <strong>Gender:</strong>{pet.gender}     
          </p>

      <p>
        <strong>Description:</strong>{pet.description}
      </p>

      <button className='mt-4 bg-orange-500 text-white px-4 py-2 rounded mt-auto hover:bg-orange-600 '>
        View Details
      </button>
    </div>
  )
}

export default PetCard
