import React,{ useState }  from 'react'
import loginBackground from "@/assets/loginbg.png"
import {useNavigate } from 'react-router-dom';
import { useAuth } from "@/context/AuthContext";
import Dashboard from './Dashboard';


const Login = () => { //create the react component
  
  const { login } = useAuth();
  const navigate = useNavigate(); 

// Stores the form inputs
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Stores any login error
  const [error, setError] = useState("");

  // Updates formData whenever the user types
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Runs when the Login button is clicked
  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");

 //get all registered users

  const users = JSON.parse(localStorage.getItem("users")) || []; //retrieve the logged in users

  //find matching user
  const user = users.find(
    (u) => 
      u.email === formData.email &&
      u.password === formData.password
  );

//check if login failed
 if (!user) {
  setError("Invalid email or password");
  return;
 }

 //create token
 const token = Date.now().toString();

 //call  AuthContext
 login(token, user);
 //redirect based on role
 if(user.role === "admin"){
  navigate("/dashboard");
 }else{ 
  navigate("/");
 }
};

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

    {error && (
    <p className="mb-4 rounded-lg bg-red-100 p-3 text-center text-red-600">
    {error}
     </p>
        )}

    <form className="space-y-5" onSubmit={handleSubmit}>

      <div>
        <label className="block mb-2 text-sm font-medium">
          Email
        </label>

        <input
          type="email"
          name='email'
          value={formData.email}
          onChange={handleChange}
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
          name='password'
          placeholder="••••••••"
           value={formData.password}
           onChange={handleChange}
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
};

export default Login;
