
import {useState} from 'react'
import PetCard from './PetCard';
import SearchBar from './SearchBar';
import Categories from './Categories';

//JSON data
import petData from "../data/pets.json";

function PetList() {

    //store the pets in state
    const[pets] = useState(petData);
    const [search, setSearch] = useState("");
    // const [category, setCategory] = useState("All")
    const filteredPets = pets.filter((pet) => pet.Breed.toLowerCase().includes(search.toLowerCase()))
  return (
    <>
      <section className='max-w-6xl mx-auto px-6 py-10'>
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
      </section>
       
    </>
    
  )
}

export default PetList;
