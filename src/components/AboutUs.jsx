import React from 'react'
import AboutImage from "@/assets/about.jpg"
import { ArrowRight } from 'lucide-react'


function AboutUs() {
  return (
     <section className="max-w-7xl mx-auto px-6 py-16">

      <div className="flex flex-col md:flex-row items-center gap-12">  

         <div className="md:w-5/5">
          <img
             src={AboutImage}
             alt="Pets: dogs running"
             className="w-full h-[450px] object-cover rounded-2xl shadow-lg"
            />
         </div> 
         
        <div>
         <h1 className='text-7xl text-orange-500 font-bold'>About Us</h1>
          <p className='text-lg'>Every adoption is the beginning of a beautiful story. We work with shelters and rescue organizations to help pets find families where they can feel safe, loved, and cherished. 
          <p className='text-lg'> By making it easy to browse available pets and book a visit, we hope to make finding your newest family member a joyful experience.</p>
          <a className='text-blue-600' href="#learn-more">Learn more <ArrowRight /></a>
          </p>
        </div>
        
       </div>
     </section>
  )
}

export default AboutUs