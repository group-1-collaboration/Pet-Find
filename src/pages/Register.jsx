import React from 'react'
import loginBackground from "@/assets/loginbg.png"


function Register() {
  return (

   <section className="min-h-screen bg-cover bg-center flex items-center justify-end px-6 md:px-20" style={{
               backgroundImage:`url(${loginBackground})`,
               backgroundSize:"cover",
               backgroundPosition:"center",
               height: "500px",
               }}>

   <div className="mb-8 text-center">
  <h1 className="text-3xl font-bold text-slate-900">
    Create Your Pet Adoption Account
  </h1>

  <p className="mt-2 text-slate-700">
    Register to begin your adoption journey. An account is required before
    booking a visit or submitting an adoption application.
  </p>
</div>

<form className="space-y-5">

  <div>
    <label className="block mb-2 text-sm font-medium">
      Full Name
    </label>

    <input
      type="text"
      placeholder="John Doe"
      className="w-full rounded-xl border border-white/40 bg-white/30 px-4 py-3 outline-none backdrop-blur-md placeholder:text-slate-500 focus:border-orange-400 focus:ring-2 focus:ring-orange-300 transition"
    />
  </div>

  <div>
    <label className="block mb-2 text-sm font-medium">
      Email Address
    </label>

    <input
      type="email"
      placeholder="you@example.com"
      className="w-full rounded-xl border border-white/40 bg-white/30 px-4 py-3 outline-none backdrop-blur-md placeholder:text-slate-500 focus:border-orange-400 focus:ring-2 focus:ring-orange-300 transition"
    />
  </div>

  <div>
    <label className="block mb-2 text-sm font-medium">
      Phone Number
    </label>

    <input
      type="tel"
      placeholder="+254 712 345 678"
      className="w-full rounded-xl border border-white/40 bg-white/30 px-4 py-3 outline-none backdrop-blur-md placeholder:text-slate-500 focus:border-orange-400 focus:ring-2 focus:ring-orange-300 transition"
    />
  </div>

  <div>
    <label className="block mb-2 text-sm font-medium">
      Password
    </label>

    <input
      type="password"
      placeholder="Create a secure password"
      className="w-full rounded-xl border border-white/40 bg-white/30 px-4 py-3 outline-none backdrop-blur-md placeholder:text-slate-500 focus:border-orange-400 focus:ring-2 focus:ring-orange-300 transition"
    />
  </div>

  <div>
    <label className="block mb-2 text-sm font-medium">
      Confirm Password
    </label>

    <input
      type="password"
      placeholder="Confirm your password"
      className="w-full rounded-xl border border-white/40 bg-white/30 px-4 py-3 outline-none backdrop-blur-md placeholder:text-slate-500 focus:border-orange-400 focus:ring-2 focus:ring-orange-300 transition"
    />
  </div>

  <button
    type="submit"
    className="w-full rounded-xl bg-orange-500 py-3 font-semibold text-white transition hover:bg-orange-600 hover:shadow-lg"
  >
    Create Account
  </button>

</form>

<div className="my-6 flex items-center gap-4">
  <div className="h-px flex-1 bg-white/40"></div>
  <span className="text-sm text-slate-600">NEXT STEPS</span>
  <div className="h-px flex-1 bg-white/40"></div>
</div>

<p className="text-center text-sm text-slate-700">
  After creating your account, you'll be able to:
</p>

<ul className="mt-3 space-y-2 text-center text-sm text-slate-700">
  <li>🐾 Browse available pets</li>
  <li>📅 Book a shelter visit</li>
  <li>📝 Complete your adoption application</li>
</ul>

<p className="mt-8 text-center text-sm text-slate-700">
  Already have an account?
  <a
    href="#login"
    className="ml-1 font-semibold text-orange-500 hover:text-orange-600"
  >
    Sign In
  </a>
</p>

</section>

  )
}

export default Register