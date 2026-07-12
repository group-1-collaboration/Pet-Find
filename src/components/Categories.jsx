import React from 'react'
import dogImage from "@/assets/dog (2).jpg"
import catImage from "@/assets/cat.jpg"
import birdImage from "@/assets/bird.jpg"
import { Link } from 'react-router-dom'

function Categories() {
    //store the category information
    const categories = [
        {
            name: "Dogs",
            image: dogImage,
            value: "Dog"
        },
        {
            name: "Cats",
            image: catImage,
            value: "Cat",
        },
        {
            name:"Birds",
            image: birdImage,
            value: "Bird",
        }
    ];

  return (
    <section className='py-12 px-6 dark:bg-black/80 dark:text-white'>
      <h2 className='text-3xl font-bold text-center mb-8'>
        Categories
      </h2>

      <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        {categories.map((category) => (
            <Link 
            to={`/category/${category.value}`}
            key={category.name}
            className='cursor-pointer text-center group'>

            <img src={category.image} alt={category.name} className='w-full h-90 object-cover rounded-xl 
                group-hover:scale-105 transition duration-300'/>  

            <h3 className='text-xl font-bold mt-3'>{category.name}</h3>      
            </Link>
        ))}
      </div>
    </section>
  )
}

export default Categories
