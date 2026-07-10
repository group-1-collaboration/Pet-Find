import React from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

function Footer() {
    return(
    <footer className="bg-zinc-700 border-t border-cyan-500/10 text-slate-300 dark:bg-gray-900 dark:text-white">

    <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Pet<span className="text-orange-400">Find</span>
            </h2>

            <p className="text-white text-4xl font-bold leading-relaxed">
               Adopt a pet today.
            </p>
        </div>

       
        <div>
            <h3 className="text-white font-semibold mb-4">
                Quick Links
            </h3>

            <ul className="space-y-3 text-orange-200">

                <li>
                    <Link to={'/'} className="hover:text-orange-400 transition duration-300">
                        Home
                    </Link>
                    
                </li>

             <li>
            <Link to={'/login'}className="hover:text-orange-400 transition duration-300">
                Sign In
             </Link>
             </li>
             
             <li>
                <Link to={'/register'} className="hover:text-orange-400 transition duration-300">
                 sign up
                </Link>
             </li>
                
                    
             <Link to={'/contact'} className="hover:text-orange-400 transition duration-300">
                  <li>
                        contacts
                </li>
             </Link>

            </ul>
        </div>

        <div>
        
            <ul className="space-y-3 text-orange-200">
               
                <li>
                    <Link to={'/privacy'} className="hover:text-orange-400 transition duration-300">
                        Privacy Policy
                    </Link>
                   
                </li>

                <li>
                    <Link to={'/terms'} className=" text hover:text-orange-400 transition duration-300">
                        Terms of Service
                    </Link>
                    
                </li>

            </ul>
        </div>

        <div>
            <h3 className="text-orange-500 font-semibold mb-4">
                Stay Updated
            </h3>

            <p className="text-white mb-4">
                Get the latest updates  from Pet Find.
            </p>

            <form className="flex flex-col gap-3">
                <input
                type="email" 
                    placeholder="Enter your email"
                    className="bg-orange-200 border border-orange-500/20 rounded-lg px-4 py-3 text-black focus:outline-none focus:border-orange-400">
 
                </input>
                    
                <button 
                    className="bg-yellow-500 hover:bg-yellow-300 text-slate-900 font-semibold py-3 rounded-lg transition duration-300">
                    Subscribe
                </button>
            </form>
        </div>

    </div>


    <div className="border-t border-cyan-500/10 py-6 text-center text-black text-sm">
        © 2026 Pet Find. All rights reserved.
    </div>

</footer>
    )
}

export default Footer