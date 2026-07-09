import {useState} from 'react'

//JSON data
import petData from "../data/pets.json";

function PetList() {

    //store the pets in state
    const[pets] = useState(petData);
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6'>
      {/* Loop through every pet in the JSON file */}
      {pets.map((pet) => (

        //Create one card for each pet
        <div className='bg-white rounded-lg shadow-md p-4 '
        key={pet.id}
        >
        <img src={pet.image} alt={pet.name} className='w-full h-52 object-cover rounded-md'/>

        <h2 className='text-xl font-bold mt-3'>{pet.name}</h2>
        <p>
            <strong>Breed:</strong>{pet.Breed}
        </p>

        <p>
            <strong>Gender:</strong>{pet.gender}
        </p>

        <p className='mt-2'>
            {pet.description}
        </p>

        <button className='mt-4 bg-orange-500 text-white px-4 py-2 rounded'>
            View Details
        </button>

        </div>
      ))}

    </div>
  )
}

export default PetList;
