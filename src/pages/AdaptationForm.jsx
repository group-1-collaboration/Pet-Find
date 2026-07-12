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

  return (<div className="max-w-xl mx-auto mt-10 p-6 bg-black/80 shadow-lg rounded-lg text-white">

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
