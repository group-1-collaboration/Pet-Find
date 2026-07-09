import {useState} from 'react'
import PetCard from './PetCard';
import SearchBar from './SearchBar';

//JSON data
import petData from "../data/pets.json";

function PetList() {

    //store the pets in state
    const[pets] = useState(petData);
    const [search, setSearch] = useState("");

    const filterPets = pets.filter((pet) => pet.name.toLowerCase().includes(search.toLowerCase()))
  return (
    <div>
        <SearchBar 
        search={search}
        setSearch={setSearch}
        />
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6'>
      {/* Loop through every pet in the JSON file */}
      {filterPets.map((pet) => (
        <PetCard 
        key={pet.id}
        pet={pet}
        />
      ))}

    </div>
    </div>
    
  )
}

export default PetList;
