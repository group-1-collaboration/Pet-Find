import { useState, useEffect, useCallback } from "react";
import PetCard from "./PetCard";
import SearchBar from "./SearchBar";
import Categories from "./Categories";
import { StatusBadge } from "../pages/Dashboard";

//JSON data (fallback, used only if nothing's been saved in localStorage yet)
import petData from "../data/pets.json";

const PETS_STORAGE_KEY = "shelter_admin_pets";
const PETS_UPDATED_EVENT = "shelterPetsUpdated";

function normalizePet(apiPet) {
  const breed = apiPet.breed || apiPet.Breed || "Unknown";
  return {
    id: String(apiPet.id),
    name: apiPet.name || "Unnamed",
    species: apiPet.species || inferSpecies(breed),
    breed,
    age:
      typeof apiPet.age === "number"
        ? `${apiPet.age} ${apiPet.age === 1 ? "month" : "months"}`
        : apiPet.age || "Unknown",
    gender: capitalize(apiPet.gender) || "Unknown",
    description: apiPet.description || "",
    image: apiPet.image || "",
    status: apiPet.status || "available",
    dateAdded: apiPet.dateAdded || new Date().toISOString().slice(0, 10),
    vaccinated: Boolean(apiPet.vaccinated),
    houseTrained: Boolean(apiPet.houseTrained),
    healthStatus: apiPet.healthStatus || apiPet.healthStatuse || "Unknown",
  };
}

function inferSpecies(breed = "") {
  const b = breed.toLowerCase();
  if (b.includes("cat") || b.includes("kitten")) return "Cat";
  if (b.includes("parrot") || b.includes("conure") || b.includes("bird"))
    return "Bird";
  if (b.includes("rabbit") || b.includes("bunny")) return "Rabbit";
  if (
    b.includes("puppy") ||
    b.includes("dog") ||
    b.includes("shepherd") ||
    b.includes("shephered") ||
    b.includes("retriver") ||
    b.includes("retriever") ||
    b.includes("weiler") ||
    b.includes("pomeranian") ||
    b.includes("maltese")
  )
    return "Dog";
  return "Other";
}

function capitalize(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

// Reads whatever the admin dashboard has saved. Falls back to the bundled
// pets.json (normalized) if nothing's been saved yet, so the list still
// works on a totally fresh browser with no localStorage data.
function readPets() {
  try {
    const raw = localStorage.getItem(PETS_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) return parsed;
    }
  } catch (err) {
    console.warn("Could not read pets from localStorage:", err);
  }
  return petData.map(normalizePet);
}

function PetList() {
  const [pets, setPets] = useState(readPets);
  const [search, setSearch] = useState("");
  // const [category, setCategory] = useState("All")

  const refreshPets = useCallback(() => {
    setPets(readPets());
  }, []);

  useEffect(() => {
    // Same-tab updates (admin dashboard dispatches this after every save).
    window.addEventListener(PETS_UPDATED_EVENT, refreshPets);
    // Cross-tab updates (e.g. admin dashboard open in another tab/window).
    window.addEventListener("storage", (e) => {
      if (e.key === PETS_STORAGE_KEY) refreshPets();
    });

    return () => {
      window.removeEventListener(PETS_UPDATED_EVENT, refreshPets);
      window.removeEventListener("storage", refreshPets);
    };
  }, [refreshPets]);

  // Hide adopted pets from the public list, and let people browse the rest.
  const visiblePets = pets.filter((pet) => pet.status !== "adopted");

  const filteredPets = visiblePets.filter((pet) =>
    (pet.breed || "").toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      <section className="max-w-6xl mx-auto px-6 py-10">
        {/* Display the search bar */}
        <SearchBar search={search} setSearch={setSearch} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {/* Loop through every pet currently in the shelter's data */}
          {filteredPets.map((pet) => (
            <div key={pet.id} className="relative">
              <div className="absolute top-5 right-5 z-20 text-2xl">
                <StatusBadge status={pet.status} />
              </div>
              <PetCard pet={pet} />
            </div>
          ))}

          {filteredPets.length === 0 && (
            <p className="col-span-full text-sm text-center py-8">
              No pets match your search right now.
            </p>
          )}
        </div>
      </section>
    </>
  );
}

export default PetList;