import React from 'react'
import { Link } from 'react-router-dom'
import petData from "../data/pets.json"
import { useParams } from 'react-router-dom'

function PetDetails() {
    //Get the id from the URL
    const {id} = useParams

    //find the selected pet
    const pet = petData.find((pet) => pet.id === Number(id))
    
  return (
    <div className='max-w-4xl mx-auto p-6'>
      <img src={pet.image} alt={pet.name} className='w-full object-cover rounded-lg'/>

      <h1 className='text-3xl font-bold mt-6'>
        {pet.name}
      </h1>

      <p>
        <strong>Breed:</strong>{pet.Breed}
      </p>

      <p>
        <strong>Gender:</strong>{pet.gender}
      </p>

      <p>
        <strong>Age:</strong>{pet.age} yes
      </p>

      <p className='mt-4'>
        <strong>Description</strong>{pet.description}
      </p>

      <p>
        <strong>Vaccinated:</strong>{""}
        {pet.vaccinated ? "Yes": "No"}
      </p>

      <p>
        <strong>House Trained</strong>{""}
        {pet.houseTrained ? "Yes" : "No"}
      </p>

      <p>
        <strong>Health Status:</strong> {pet.healthstatuse}
      </p>

      <button className='mt-6 bg-orange-500 text-white px-6 rounded-lg hover:bg-orange-600'>
        Request Adoption
      </button>
    </div>
  )
}

export default PetDetails
