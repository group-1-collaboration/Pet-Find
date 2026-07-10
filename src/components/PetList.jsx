import {useState} from 'react'
import PetCard from './PetCard';
import SearchBar from './SearchBar';

//JSON data
import petData from "../data/pets.json";

function PetList() {

    //store the pets in state
    const[pets] = useState(petData);
    const [search, setSearch] = useState("");

    const filteredPets = pets.filter((pet) => pet.Breed.toLowerCase().includes(search.toLowerCase()))
  return (
    <div>
        {/* Display the search bar */}
        <SearchBar 
        search={search}
        setSearch={setSearch}
        />
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6'>
      {/* Loop through every pet in the JSON file */}
      {filteredPets.map((pet) => (
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
