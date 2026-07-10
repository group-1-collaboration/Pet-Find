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
    <div className="max-w-8/12 px-10">
      <h1 className="text-4xl mb-1 text-white text-center" style={{ fontFamily: "Fraunces, serif", fontWeight: 600 }}>
        Add a pet
      </h1>
      <p className="text-white mb-6 text-sm text-center">Add a new pet to the shelter's listing.</p>

      <form onSubmit={handleSubmit} className="bg-white border  rounded-xl p-6 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <Field label="Name:">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="e.g. Luna"
              className="input p-2 border-2 rounded-lg text-sm w-65"
            />
          </Field>
          <Field label="Species:">
            <select name="species" value={form.species} onChange={handleChange} className="input p-2 border-2 rounded-lg text-sm w-65">
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
              className="input p-2 border-2 rounded-lg text-sm w-65"
            />
          </Field>
          <Field label="Age:">
            <input
              name="age"
              value={form.age}
              onChange={handleChange}
              placeholder="e.g. 1.5 yrs"
              className="input p-2 border-2 rounded-lg text-sm w-65"
            />
          </Field>
          <Field label="Gender:">
            <select name="gender" value={form.gender} onChange={handleChange} className="input p-2 border-2 rounded-lg text-sm w-65">
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
              className="input p-2 border-2 rounded-lg text-sm w-65"
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
            className="input resize-none border-2 p-5 rounded-2xl w-10/12"
          />
        </Field>

        {error && <p className="text-sm text-[#D9695F]">{error}</p>}

        <button
          type="submit"
          className="flex items-center gap-2 bg-[#da760c] text-[#12201D] font-medium px-4 py-2 rounded-lg text-sm hover:opacity-90 transition-opacity"
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
    <label className="block font">
      <span className="block text-sm text-black mb-1"><p className="font-extrabold">{label}</p></span>
      {children}
    </label>
  );
}