import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import {useNavigate } from "react-router-dom";
import AdoptionFormBackground from  "@/assets/loginbg.png";

function AdoptionForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    reason: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form);

    // Navigate to success page
  };

  return (
<section
  className="min-h-screen bg-cover bg-center bg-fixed flex items-center justify-center px-4 md:px-10 py-12"
  style={{
    backgroundImage: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url(${AdoptionFormBackground})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div
    className="
     w-full max-w-md rounded-3xl border border-white/30 bg-white/10 backdrop-blur-xl shadow-2xl p-8 text-slate-800
    "
  >

  <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-orange-600">
    Adoption Request Form
  </h2>

  <form onSubmit={handleSubmit} className="space-y-4">

    <input
      type="text"
      placeholder="Full Name"
      className="w-full border border-gray-300 p-3 rounded-lg text-black
      focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
      onChange={(e) =>
        setForm({ ...form, name: e.target.value })
      }
      required
    />

    <input
      type="email"
      placeholder="Email"
      className="w-full border border-gray-300 p-3 rounded-lg text-black
      focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
      onChange={(e) =>
        setForm({ ...form, email: e.target.value })
      }
      required
    />


    <textarea
      placeholder="Why do you want to adopt?"
      rows="4"
      className="w-full border border-gray-300 p-3 rounded-lg text-black
      focus:outline-none focus:ring-2 focus:ring-orange-500 transition resize-none"
      onChange={(e) =>
        setForm({ ...form, reason: e.target.value })
      }
      required
    />
    <div className="grid md:grid-cols-2 gap-4">

  <input
    type="text"
    name="address"
    placeholder="Home Address"
    className="w-full border border-gray-300 p-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
  />

  <input
    type="text"
    name="occupation"
    placeholder="Occupation"
    className="w-full border border-gray-300 p-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
  />

  <input
    type="text"
    value="pet Name"
    readOnly
    className="w-full border border-gray-300 p-3 rounded-lg bg-gray text-black"
  />

  <input
    type="text"
    value= "pet Breed"
    readOnly
    className="w-full border border-gray-300 p-3 rounded-lg bg-gray text-black"
  />

  <select
    name="residenceType"
    className="w-full border border-gray-300 p-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
  >
    <option>Type of Residence</option>
    <option>House</option>
    <option>Apartment</option>
    <option>Farm</option>
  </select>

  <select
    name="ownership"
    className="w-full border border-gray-300 p-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
  >
    <option>Own or Rent?</option>
    <option>Own</option>
    <option>Rent</option>
  </select>

  <select
    name="petsAllowed"
    className="w-full border border-gray-300 p-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
  >
    <option>Are pets allowed?</option>
    <option>Yes</option>
    <option>No</option>
  </select>

  <select
    name="fencedYard"
    className="w-full border border-gray-300 p-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
  >
    <option>Fenced Yard?</option>
    <option>Yes</option>
    <option>No</option>
  </select>

  <input
    type="number"
    placeholder="Number of Adults"
    className="w-full border border-gray-300 p-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
  />

  <input
    type="number"
    placeholder="Number of Children"
    className="w-full border border-gray-300 p-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
  />

  <select
    name="currentPets"
    className="w-full border border-gray-300 p-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
  >
    <option>Do you currently own pets?</option>
    <option>Yes</option>
    <option>No</option>
  </select>

  <input
    type="text"
    placeholder="If yes, what pets do you own?"
    className="w-full border border-gray-300 p-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
  />

  <select
    name="ownedPetsBefore"
    className="w-full border border-gray-300 p-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
  >
    <option>Owned pets before?</option>
    <option>Yes</option>
    <option>No</option>
  </select>

  <input
    type="text"
    placeholder="Hours pet will be alone each day"
    className="w-full border border-gray-300 p-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
  />

  <input
    type="text"
    placeholder="Primary Caregiver"
    className="w-full border border-gray-300 p-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
  />

  <input
    type="text"
    placeholder="Emergency Contact Name"
    className="w-full border border-gray-300 p-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
  />

  <input
    type="tel"
    placeholder="Emergency Contact Phone"
    className="w-full border border-gray-300 p-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
  />

  <input
    type="date"
    className="w-full border border-gray-300 p-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
  />

</div>

<textarea
  rows="4"
  placeholder="Why do you want to adopt this pet?"
  className="w-full mt-4 border border-gray-300 p-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
/>

<textarea
  rows="4"
  placeholder="Additional Comments (Optional)"
  className="w-full mt-4 border border-gray-300 p-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-orange-500"
/>

<div className="mt-6 space-y-3 text-sm">

  <label className="flex items-start gap-3">
    <input
      type="checkbox"
      className="mt-1 accent-orange-500"
      required
    />
    <span>
      I confirm the information provided is accurate.
    </span>
  </label>

  <label className="flex items-start gap-3">
    <input
      type="checkbox"
      className="mt-1 accent-orange-500"
      required
    />
    <span>
      I agree to the Pet Find adoption terms and conditions.
    </span>
  </label>

</div>

<Link
  to={`/booking/${id}`}
  className="inline-block mt-6 bg-orange-500 text-white px-6 py-3 rounded-lg
  hover:bg-orange-600 cursor-pointer transition duration-300
  font-semibold shadow-md"
>
  Submit
</Link>

  </form>

</div>
         </section>
 

  );
}

export default AdoptionForm;
