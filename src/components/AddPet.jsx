import React, { useState } from "react";
import { PlusCircle } from "lucide-react";

const EMPTY_FORM = {
  name: "",
  species: "Dog",
  breed: "",
  age: "",
  gender: "Female",
  description: "",
  image: "",
};

export default function AddPet({ onAddPet }) {
  const [form, setForm] = useState(EMPTY_FORM);
  const [error, setError] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name.trim() || !form.breed.trim()) {
      setError("Give the pet a name and breed before saving.");
      return;
    }
    setError("");
    onAddPet(form);
    setForm(EMPTY_FORM);
  }

  return (
    <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <h1 className="text-3xl sm:text-4xl mb-1 text-center" style={{ fontFamily: "Fraunces, serif", fontWeight: 600 }}>
        Add a pet
      </h1>
      <p className="mb-6 text-sm text-center">Add a new pet to the shelter's listing.</p>

      <form onSubmit={handleSubmit} className="bg-white shadow-sm border rounded-xl p-4 sm:p-6 space-y-4">
        {/* Responsive Grid: 1 column on mobile, 2 columns on small screens and up */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Name:">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="e.g. Luna"
              className="input p-2 border rounded-lg text-sm w-full focus:outline-none focus:border-[#da760c]"
            />
          </Field>
          
          <Field label="Species:">
            <select 
              name="species" 
              value={form.species} 
              onChange={handleChange} 
              className="input p-2 border rounded-lg text-sm w-full focus:outline-none focus:border-[#da760c]"
            >
              <option>Dog</option>
              <option>Cat</option>
              <option>Rabbit</option>
              <option>Bird</option>
              <option>Other</option>
            </select>
          </Field>
          
          <Field label="Breed:">
            <input
              name="breed"
              value={form.breed}
              onChange={handleChange}
              placeholder="e.g. Labrador mix"
              className="input p-2 border rounded-lg text-sm w-full focus:outline-none focus:border-[#da760c]"
            />
          </Field>
          
          <Field label="Age:">
            <input
              name="age"
              value={form.age}
              onChange={handleChange}
              placeholder="e.g. 1.5 yrs"
              className="input p-2 border rounded-lg text-sm w-full focus:outline-none focus:border-[#da760c]"
            />
          </Field>
          
          <Field label="Gender:">
            <select 
              name="gender" 
              value={form.gender} 
              onChange={handleChange} 
              className="input p-2 border rounded-lg text-sm w-full focus:outline-none focus:border-[#da760c]"
            >
              <option>Female</option>
              <option>Male</option>
              <option>Unknown</option>
            </select>
          </Field>
          
          <Field label="Photo URL (optional)">
            <input
              name="image"
              value={form.image}
              onChange={handleChange}
              placeholder="https://…"
              className="input p-2 border rounded-lg text-sm w-full focus:outline-none focus:border-[#da760c]"
            />
          </Field>
        </div>

        <Field label="Description:">
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            rows={3}
            placeholder="Personality, needs, good with kids/other pets…"
            className="input resize-none border p-3 sm:p-4 rounded-xl w-full focus:outline-none focus:border-[#da760c]"
          />
        </Field>

        {error && <p className="text-sm text-[#D9695F] font-medium">{error}</p>}

        <button
          type="submit"
          className="flex items-center justify-center gap-2 bg-[#da760c] font-medium px-5 py-2.5 rounded-lg text-sm hover:opacity-95 transition-opacity w-full sm:w-auto"
        >
          <PlusCircle className="w-4 h-4" />
          Add pet
        </button>
      </form>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="block text-sm font-extrabold text-black mb-1">{label}</span>
      {children}
    </label>
  );
}