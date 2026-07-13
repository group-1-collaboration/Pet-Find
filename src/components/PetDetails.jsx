import React from 'react'
import { Link } from 'react-router-dom'
import petData from "../data/pets.json"
import { useParams } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import {useNavigate } from "react-router-dom";

function PetDetails() {
    //Get the id from the URL
    const {id} = useParams()
          // request adoption navigate
     const navigate = useNavigate();

    //find the selected pet
    const pet = petData.find((pet) => pet.id === Number(id))
    if(!pet) {
        return <h2>Pet not found.</h2>
    }

  return (
    <Card className='max-w-6xl mx-auto mt-10 shadow-lg dark:bg-black/80 dark:text-white'>

      <CardContent className="p-3 grid md:grid-cols-2 gap-5 items-start">
        <img src={pet.image} alt={pet.name} className='w-full object-contain  rounded-lg'/>

     <div>
      <CardTitle className='text-3xl font-bold mt-6'>
        {pet.name}
      </CardTitle>
     <div className='space-y-4'>
       <p className='mt-2'>
        <strong>Breed:</strong> {pet.Breed}
      </p>

      <p>
        <strong>Gender:</strong> {pet.gender}
      </p>

      <p>
        <strong>Age:</strong> {pet.age} years
      </p>

      <p className=''>
        <strong>Description</strong> {pet.description}
      </p>

      <p>
        <strong>Vaccinated:</strong> {""}
        {pet.vaccinated ? "Yes": "No"}
      </p>

      <p>
        <strong>House Trained:</strong> {""}
        {pet.houseTrained ? "Yes" : "No"}
      </p>
      <p>
        <strong>Health Status:</strong> {pet.healthStatuse}
      </p>

      <button onClick={() => navigate(`/adopt/${pet.id}`)} className='mt-6 bg-orange-500 text-white px-6 p-4 rounded-lg hover:bg-orange-600 cursor-pointer'>
        Request Adoption
      </button>
     </div>
      
</div>
  
      </CardContent>
      
    </Card>
  )
}

export default PetDetails
