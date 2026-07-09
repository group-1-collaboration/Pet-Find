import {useState} from 'react'
import PetCard from './PetCard';

//JSON data
import petData from "../data/pets.json";

function PetList() {

    //store the pets in state
    const[pets] = useState(petData);
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6'>
      {/* Loop through every pet in the JSON file */}
      {pets.map((pet) => (
        <PetCard 
        key={pet.id}
        pet={pet}
        />
      ))}

    </div>
  )
}

export default PetList;
