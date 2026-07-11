import React from 'react'
import loginBackground from "@/assets/loginbg.png"

export const Login = () => { //create the react component
  const users = JSON.parse(localStorage.getItem("users")) || []; //retrieve the logged in users
  //find matching user
  const user = users.find(
    (u) => 
      u.email === FormData.email &&
      u.password === FormData.password
  );
  //check if login failed
  
 if (!user) {
  searchResultErrorSchema("Invalid email or password")
  return;
 } 

  return (
    <section className="min-h-screen bg-cover bg-center flex items-center justify-end px-6 md:px-20" style={{
            backgroundImage:`url(${loginBackground})`,
            backgroundSize:"cover",
            backgroundPosition:"center",
            height: "500px",
     }}>

<div className="w-full max-w-md rounded-3xl border border-white/30 bg-white/10 backdrop-blur-xl shadow-2xl p-8 text-slate-800">

    <div className="mb-8 text-center">
      <h1 className="text-3xl font-bold text-slate-900">
        Welcome Back
      </h1>

      <p className="mt-2 text-slate-700">
        Sign in to continue your adoption journey.
      </p>
    </div>

    <form className="space-y-5">

      <div>
        <label className="block mb-2 text-sm font-medium">
          Email
        </label>

        <input
          type="email"
          placeholder="you@example.com"
          className="w-full rounded-xl border border-white/40 bg-white/30 px-4 py-3 outline-none backdrop-blur-md placeholder:text-slate-500 focus:border-orange-400 focus:ring-2 focus:ring-orange-300 transition"
        />
      </div>

      <div>
        <label className="block mb-2 text-sm font-medium">
          Password
        </label>

        <input
          type="password"
          placeholder="••••••••"
          className="w-full rounded-xl border border-white/40 bg-white/30 px-4 py-3 outline-none backdrop-blur-md placeholder:text-slate-500 focus:border-orange-400 focus:ring-2 focus:ring-orange-300 transition"
        />
      </div>

      <button
        className="w-full rounded-xl bg-orange-500 py-3 font-semibold text-white transition hover:bg-orange-600 hover:shadow-lg">
        Login
      </button>

    </form>

    <div className="my-6 flex items-center gap-4">
      <div className="h-px flex-1 bg-white/40"></div>
      <span className="text-sm text-slate-600">OR</span>
      <div className="h-px flex-1 bg-white/40"></div>
    </div>

    <p className="mt-8 text-center text-sm text-slate-700">
      Don't have an account?
      <a href='#register' className="ml-1 cursor-pointer font-semibold text-orange-500 hover:text-orange-600">
        Sign Up
      </a>
    </p>

  </div>        

    </section>

  )
}
