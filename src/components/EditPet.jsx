import React, { useState } from "react";
import { X, Save } from "lucide-react";

export default function EditPet({ pet, onSave, onCancel }) {
  const [form, setForm] = useState(pet);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSave(form);
  }

  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50"
      onClick={onCancel}
    >
      <div
        className="bg-[#e4dad0] border rounded-xl p-6 w-full max-w-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4 ">
          <h2 className="text-2xl font-extrabold" style={{ fontFamily: "Fraunces, serif", fontWeight: 600 }}>
            Edit {pet.name}
          </h2>
          <button onClick={onCancel} className=" hover:text-[#454545]">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Field label="Name">
              <input name="name" value={form.name} onChange={handleChange} className="input" />
            </Field>
            <Field label="Species">
              <select name="species" value={form.species} onChange={handleChange} className="input">
                <option>Dog</option>
                <option>Cat</option>
                <option>Rabbit</option>
                <option>Bird</option>
                <option>Other</option>
              </select>
            </Field>
            <Field label="Breed">
              <input name="breed" value={form.breed} onChange={handleChange} className="input" />
            </Field>
            <Field label="Age">
              <input name="age" value={form.age} onChange={handleChange} className="input" />
            </Field>
            <Field label="Gender">
              <select name="gender" value={form.gender} onChange={handleChange} className="input">
                <option>Female</option>
                <option>Male</option>
                <option>Unknown</option>
              </select>
            </Field>
            <Field label="Status">
              <select name="status" value={form.status} onChange={handleChange} className="input">
                <option value="available">Available</option>
                <option value="pending">Pending</option>
                <option value="adopted">Adopted</option>
              </select>
            </Field>
          </div>

          <Field label="Description">
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              rows={3}
              className="input resize-none"
            />
          </Field>

          <div className="flex gap-3 justify-end pt-2">
            <button
              type="button"
              onClick={onCancel}
              className="px-4 py-2 rounded-lg text-sm bg-white hover:text-[#464646]"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex items-center gap-2 bg-[#da760c] text-[#12201D] font-medium px-4 py-2 rounded-lg text-sm hover:opacity-90 transition-opacity"
            >
              <Save className="w-4 h-4" />
              Save changes
            </button>
          </div>
        </form>
      </div>

      <style>{`
        .input {
          width: 100%;
          background: #ffff;
          border: 1px solid #2B4038;
          border-radius: 0.5rem;
          padding: 0.5rem 0.75rem;
          font-size: 0.875rem;
          outline: none;
        }
        .input:focus { border-color: #E8A33D; }
      `}</style>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="block text-xs mb-1">{label}</span>
      {children}
    </label>
  );
}