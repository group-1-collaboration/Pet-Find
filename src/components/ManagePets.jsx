import React, { useState, useMemo } from "react";
import { Edit3, Trash2, PawPrint, Search, ImageOff } from "lucide-react";
import { StatusBadge } from "../pages/Dashboard";

export default function ManagePets({ pets, onEdit, onDelete, onMarkAdopted }) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all");
  const [confirmingDelete, setConfirmingDelete] = useState(null);
  const [brokenImages, setBrokenImages] = useState({});

  const filtered = useMemo(() => {
    return pets.filter((p) => {
      const matchesQuery =
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.breed.toLowerCase().includes(query.toLowerCase());
      const matchesFilter = filter === "all" || p.status === filter;
      return matchesQuery && matchesFilter;
    });
  }, [pets, query, filter]);

  function handleDeleteClick(id) {
    if (confirmingDelete === id) {
      onDelete(id);
      setConfirmingDelete(null);
    } else {
      setConfirmingDelete(id);
    }
  }

  function handleImageError(id) {
    setBrokenImages((prev) => ({ ...prev, [id]: true }));
  }

  return (
    <div>
      <h1 className="text-3xl sm:text-4xl mb-1" style={{ fontFamily: "Fraunces, serif", fontWeight: 600 }}>
        Manage pets
      </h1>
      <p className="mb-6 text-sm">Edit details, mark pets adopted, or remove a listing.</p>

      <div className="flex flex-col sm:flex-row gap-3 mb-5">
        <div className="bg-white shadow-sm flex items-center gap-2 border border-[#2B4038] rounded-lg px-3 py-2 flex-1 min-w-0">
          <Search className="w-4 h-4 text-[#9FB3AC] shrink-0" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name or breed…"
            className="bg-transparent outline-none text-sm flex-1 min-w-0 text-black placeholder:text-gray-400"
          />
        </div>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="bg-white shadow-sm border border-[#2B4038] rounded-lg px-3 py-2 text-sm outline-none w-full sm:w-auto shrink-0"
        >
          <option value="all">All statuses</option>
          <option value="available">Available</option>
          <option value="pending">Pending</option>
          <option value="adopted">Adopted</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((pet) => (
          <div key={pet.id} className="bg-white shadow-sm border rounded-xl overflow-hidden flex flex-col gap-3 min-w-0">
            <div className="w-full h-48 bg-[#F3F1EA] flex items-center justify-center shrink-0">
              {pet.image && !brokenImages[pet.id] ? (
                <img
                  src={pet.image}
                  alt={pet.name}
                  onError={() => handleImageError(pet.id)}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
              ) : (
                <div className="flex flex-col items-center gap-1 text-[#9FB3AC]">
                  <ImageOff className="w-6 h-6" />
                  <span className="text-xs">No image</span>
                </div>
              )}
            </div>

            <div className="flex items-start justify-between gap-2 px-4">
              <div className="min-w-0">
                <p className="font-extrabold truncate">{pet.name}</p>
                <p className="text-xs truncate">
                  {pet.breed} · {pet.age} · {pet.gender}
                </p>
              </div>
              <StatusBadge status={pet.status} />
            </div>

            {pet.description && (
              <p className="text-md line-clamp-2 px-4">{pet.description}</p>
            )}

            {/* Action row: wraps instead of overflowing on narrow cards */}
            <div className="flex flex-wrap items-center gap-2 mt-auto px-4 pb-4 pt-2 border-t border-[#2B4038]">
              <button
                onClick={() => onEdit(pet)}
                className="flex items-center gap-1 text-xs px-3 py-1.5 rounded-md hover:bg-black hover:text-white"
              >
                <Edit3 className="w-3.5 h-3.5" />
                Edit
              </button>

              {pet.status !== "adopted" && (
                <button
                  onClick={() => onMarkAdopted(pet.id)}
                  className="flex items-center gap-1.5 text-xs px-2.5 py-1.5 rounded-md text-[#4FA88C] hover:bg-[#12201D]"
                >
                  <PawPrint className="w-3.5 h-3.5" />
                  <span className="whitespace-nowrap">Mark adopted</span>
                </button>
              )}

              <button
                onClick={() => handleDeleteClick(pet.id)}
                className={`flex items-center gap-1 text-xs px-4 py-1.5 rounded-md sm:ml-auto ${
                  confirmingDelete === pet.id
                    ? "bg-[#D9695F] text-[#12201D]"
                    : "text-[#D9695F] hover:bg-black"
                }`}
              >
                <Trash2 className="w-3.5 h-3.5" />
                {confirmingDelete === pet.id ? "Confirm delete" : "Delete"}
              </button>
            </div>
          </div>
        ))}

        {filtered.length === 0 && (
          <p className="text-sm col-span-full">No pets match your search.</p>
        )}
      </div>
    </div>
  );
}