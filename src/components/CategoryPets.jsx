import React from 'react'
import { useParams } from 'react-router-dom'
import PetData from "../data/pets.json"
import PetCard from './PetCard'

function CategoryPets() {
    //Gets pets from the url
    const {categoryName} = useParams();

    //Find only pets belonging to this category
    const filteredPets = PetData.filter(
        (pet) => pet.category === categoryName
    )
  return (
    <section className='max-w-6xl mx-auto p-8'>
      <h1 className='text-3xl font-bold mb-8'>
        {categoryName} Pets
      </h1>

      <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-6'>
        {filteredPets.map((pet) => (
            <PetCard 
            key={pet.id}
            pet={pet}/>
        ))}
      </div>
    </section>
  )
}

export default CategoryPets
