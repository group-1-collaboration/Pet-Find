import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import {useNavigate } from "react-router-dom";

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
  <div className="max-w-xl mx-auto mt-10 p-6 bg-black/80 shadow-lg rounded-lg text-white">

  <h2 className="text-2xl font-bold mb-6">
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

  );
}

export default AdoptionForm;
