import React from "react";
import loginBackground from "@/assets/loginbg.png";

function Register() {

//set variables
const { register } = useAuth();
const navigate = useNavigate();

const [formData, setFormData] = useState({
  fullName: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
});
//handle input changes
const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};
// handle registration
const handleSubmit = (e) => {
    e.preventDefault();

    setError("");
    //check matching passwords
     if (formData.password !== formData.confirmPassword) {
    setError("Passwords do not match.");
    return;
  }
  //get registered users
  const users = JSON.parse(localStorage.getItem("users")) || [];

  //check if email already exists
  const existingUser = users.find(
    (user) => user.email === formData.email
  );
   if (existingUser) {
    setError("An account with this email already exists.");
    return;
  }

//create new user object
const newUser ={
    id: Date.now(),
    fullName: formData.fullName,
    email: formData.email,
    phone: formData.phone,
    password: formData.password,
    role: "user", 
}
 // Add the new user
  users.push(newUser);

  // Save all users
  localStorage.setItem("users", JSON.stringify(users));

  // Create a login token
  const token = Date.now().toString();

  // Log the user in using AuthContext
  register(token, newUser);

  // Go to the home page
  navigate("/login");
};

}

const [error, setError] = useState("");

  return (
    <section
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-6"
      style={{
        backgroundImage: `url(${loginBackground})`,
      }}
    >
      <div className="w-full max-w-md rounded-3xl border border-white/30 bg-white/20 p-8 backdrop-blur-xl shadow-2xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-slate-900">
            Create Your Pet Find Account.
          </h1>

          <p className="mt-2 text-slate-700">
            Register to begin your adoption journey. Create an account before
            booking visits or submitting an adoption application.
          </p>
        </div>

        <form className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium">
              Full Name
            </label>

            <input
              type="text"
              placeholder="full name"
              className="w-full rounded-xl border border-white/40 bg-white/30 px-4 py-3 outline-none backdrop-blur-md placeholder:text-slate-500 focus:border-orange-400 focus:ring-2 focus:ring-orange-300 transition"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Email Address
            </label>

            <input
              type="email"
              placeholder="@gmail.com"
              className="w-full rounded-xl border border-white/40 bg-white/30 px-4 py-3 outline-none backdrop-blur-md placeholder:text-slate-500 focus:border-orange-400 focus:ring-2 focus:ring-orange-300 transition"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Phone Number
            </label>

            <input
              type="tel"
              placeholder="+254 *** *** ***"
              className="w-full rounded-xl border border-white/40 bg-white/30 px-4 py-3 outline-none backdrop-blur-md placeholder:text-slate-500 focus:border-orange-400 focus:ring-2 focus:ring-orange-300 transition"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Password
            </label>

            <input
              type="password"
              placeholder="Create a password"
              className="w-full rounded-xl border border-white/40 bg-white/30 px-4 py-3 outline-none backdrop-blur-md placeholder:text-slate-500 focus:border-orange-400 focus:ring-2 focus:ring-orange-300 transition"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
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
          <span className="text-sm text-slate-600">OR</span>
          <div className="h-px flex-1 bg-white/40"></div>
        </div>

        <p className="text-center text-sm text-slate-700">
          Already have an account?
          <a
            href="/login"
            className="ml-1 font-semibold text-orange-500 hover:text-orange-600"
          >
            Sign In
          </a>
        </p>
      </div>
    </section>
  );
}

export default Register;