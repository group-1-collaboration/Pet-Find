import React, { useState, useMemo, useEffect, useCallback } from "react";
import { PawPrint, LayoutGrid, PlusCircle, ClipboardList, Home, Loader2, Menu, X } from "lucide-react";
import AddPet from "../components/AddPet";
import EditPet from "../components/EditPet";
import ManagePets from "../components/ManagePets";
import ManageRequests from "../components/ManageRequests";

// -----------------------------------------------------------------------------
// Local JSON data source
// -----------------------------------------------------------------------------

const PETS_JSON_PATH = "/src/data/pets.json";
const PETS_STORAGE_KEY = "shelter_admin_pets";
const REQUESTS_STORAGE_KEY = "shelter_admin_requests";

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

// -----------------------------------------------------------------------------
// localStorage helpers
// -----------------------------------------------------------------------------

function loadFromStorage(key) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (err) {
    console.warn(`Could not read ${key} from localStorage:`, err);
    return null;
  }
}

function saveToStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.warn(`Could not save ${key} to localStorage:`, err);
  }
}

const NAV_ITEMS = [
  { id: "overview", label: "Overview", icon: Home },
  { id: "managePets", label: "Manage pets", icon: LayoutGrid },
  { id: "addPet", label: "Add a pet", icon: PlusCircle },
  { id: "manageRequests", label: "Adoption requests", icon: ClipboardList },
];

export default function Dashboard() {
  const [pets, setPets] = useState([]);
  const [requests, setRequests] = useState([]);
  const [activeView, setActiveView] = useState("overview");
  const [editingPet, setEditingPet] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  // Tracks whether initial load (from storage or fetch) has finished,
  // so we don't immediately overwrite storage with an empty array.
  const [hydrated, setHydrated] = useState(false);

  const loadPets = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      // Prefer whatever's saved locally so edits survive a refresh.
      const stored = loadFromStorage(PETS_STORAGE_KEY);
      if (stored && Array.isArray(stored)) {
        setPets(stored);
        setLoading(false);
        setHydrated(true);
        return;
      }

      const res = await fetch(PETS_JSON_PATH);
      if (!res.ok)
        throw new Error(
          `Failed to load ${PETS_JSON_PATH} (HTTP ${res.status})`,
        );
      const data = await res.json();
      setPets(data.map(normalizePet));
    } catch (err) {
      setError(err.message || "Could not load pets.json.");
    } finally {
      setLoading(false);
      setHydrated(true);
    }
  }, []);

  useEffect(() => {
    loadPets();
    const storedRequests = loadFromStorage(REQUESTS_STORAGE_KEY);
    if (storedRequests && Array.isArray(storedRequests)) {
      setRequests(storedRequests);
    }
  }, [loadPets]);

  // Persist pets to localStorage any time they change, once we've hydrated.
  useEffect(() => {
    if (!hydrated) return;
    saveToStorage(PETS_STORAGE_KEY, pets);
  }, [pets, hydrated]);

  // Persist requests to localStorage any time they change, once we've hydrated.
  useEffect(() => {
    if (!hydrated) return;
    saveToStorage(REQUESTS_STORAGE_KEY, requests);
  }, [requests, hydrated]);

  const stats = useMemo(() => {
    const total = pets.length;
    const available = pets.filter((p) => p.status === "available").length;
    const pending = pets.filter((p) => p.status === "pending").length;
    const adopted = pets.filter((p) => p.status === "adopted").length;
    const openRequests = requests.filter((r) => r.status === "pending").length;
    return { total, available, pending, adopted, openRequests };
  }, [pets, requests]);

  function addPet(pet) {
    const newPet = normalizePet({
      ...pet,
      id: `local-${Date.now()}`,
      status: "available",
      dateAdded: new Date().toISOString().slice(0, 10),
    });
    setPets((prev) => [newPet, ...prev]);
    setActiveView("managePets");
  }

  function saveEditedPet(updatedPet) {
    setPets((prev) =>
      prev.map((p) => (p.id === updatedPet.id ? updatedPet : p)),
    );
    setEditingPet(null);
  }

  function deletePet(id) {
    setPets((prev) => prev.filter((p) => p.id !== id));
    setRequests((prev) => prev.filter((r) => r.petId !== id));
  }

  function markAdopted(id) {
    setPetStatus(id, "adopted");
  }

  function setPetStatus(id, status) {
    setPets((prev) => prev.map((p) => (p.id === id ? { ...p, status } : p)));
  }

  function approveRequest(id) {
    const req = requests.find((r) => r.id === id);
    setRequests((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status: "approved" } : r)),
    );
    if (req) setPetStatus(req.petId, "adopted");
  }

  function rejectRequest(id) {
    setRequests((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status: "rejected" } : r)),
    );
  }

  // Wipes local edits and reloads the original pets.json data.
  function resetToDefaults() {
    try {
      localStorage.removeItem(PETS_STORAGE_KEY);
      localStorage.removeItem(REQUESTS_STORAGE_KEY);
    } catch (err) {
      console.warn("Could not clear localStorage:", err);
    }
    setRequests([]);
    setHydrated(false);
    loadPets().then(() => setHydrated(true));
  }

  function handleNavClick(id) {
    setActiveView(id);
    setMobileNavOpen(false);
  }

  return (
    <div
      className="w-full min-h-screen bg-[#e4dad0] bg-[url('/path-to-your/image.png')] bg-cover bg-center bg-no-repeat"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <aside className="md:w-64 shrink-0 border-b md:border-b-0 md:border-r border-[#2B4038] p-5">
          <div className="flex items-center justify-between md:justify-start md:gap-2 mb-2 md:mb-8">
            <div className="flex items-center gap-2">
              <PawPrint className="w-6 h-6 text-[#da760c]" />
              <span
                className="text-2xl tracking-tight"
                style={{ fontFamily: "Fraunces, serif", fontWeight: 600 }}
              >
                Shelter Admin
              </span>
            </div>

            {/* Hamburger toggle: mobile only */}
            <button
              onClick={() => setMobileNavOpen((prev) => !prev)}
              aria-label={mobileNavOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileNavOpen}
              className="md:hidden p-2 rounded-lg border border-[#2B4038] hover:bg-[#da760c] hover:text-[#F2EFE9] transition-colors"
            >
              {mobileNavOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          <nav
            className={`${
              mobileNavOpen ? "flex" : "hidden"
            } flex-col gap-1 mt-3 md:mt-0 md:flex md:flex-col`}
          >
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = activeView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm whitespace-nowrap transition-colors ${
                    isActive
                      ? "bg-[#da760c] font-medium"
                      : "hover:bg-[#da760c] hover:text-[#F2EFE9]"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                  {item.id === "manageRequests" && stats.openRequests > 0 && (
                    <span
                      className={`ml-auto text-xs rounded-full px-1.5 py-0.5 ${
                        isActive
                          ? "bg-black text-white"
                          : "bg-orange-400 text-[#12201D]"
                      }`}
                    >
                      {stats.openRequests}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-6 md:p-10">
          {error && (
            <div className="mb-5 rounded-lg border border-[#D9695F] bg-[#D9695F22] text-[#D9695F] text-sm px-4 py-3 flex items-center justify-between gap-3">
              <span>{error}</span>
              <button
                onClick={loadPets}
                className="text-xs font-medium underline underline-offset-2 shrink-0"
              >
                Retry
              </button>
            </div>
          )}

          {loading ? (
            <div className="flex items-center gap-2 text-sm">
              <Loader2 className="w-4 h-4 animate-spin" />
              Loading pets…
            </div>
          ) : (
            <>
              {activeView === "overview" && (
                <Overview stats={stats} pets={pets} requests={requests} />
              )}

              {activeView === "managePets" && (
                <ManagePets
                  pets={pets}
                  onEdit={(pet) => setEditingPet(pet)}
                  onDelete={deletePet}
                  onMarkAdopted={markAdopted}
                />
              )}

              {activeView === "addPet" && <AddPet onAddPet={addPet} />}

              {activeView === "manageRequests" && (
                <ManageRequests
                  requests={requests}
                  onApprove={approveRequest}
                  onReject={rejectRequest}
                />
              )}
            </>
          )}
        </main>
      </div>

      {editingPet && (
        <EditPet
          pet={editingPet}
          onSave={saveEditedPet}
          onCancel={() => setEditingPet(null)}
        />
      )}
    </div>
  );
}

function StatCard({ label, value, accent }) {
  return (
    <div className="bg-white shadow-sm border border-[#2B4038] rounded-xl px-5 py-4 flex-1 min-w-[140px]">
      <p className="text-xs uppercase tracking-wide  mb-1 font-bold">{label}</p>
      <p
        className="text-3xl"
        style={{
          fontFamily: "Fraunces, serif",
          fontWeight: 600,
          color: accent || "black",
        }}
      >
        {value}
      </p>
    </div>
  );
}

function Overview({ stats, pets, requests }) {
  const recentPets = pets.slice(0, 5);
  const recentRequests = requests.slice(0, 5);

  return (
    <div>
      <h1
        className="text-3xl sm:text-4xl mb-1"
        style={{ fontFamily: "Fraunces, serif", fontWeight: 600 }}
      >
        Dashboard Overview
      </h1>
      <p className="mb-6 text-sm">A snapshot of pets and adoption activity.</p>

      <div className="flex flex-wrap gap-4 mb-8">
        <StatCard label="Total pets" value={stats.total} />
        <StatCard label="Available" value={stats.available} accent="#4FA88C" />
        <StatCard label="Pending" value={stats.pending} accent="#E8A33D" />
        <StatCard label="Adopted" value={stats.adopted} accent="#D9695F" />
        <StatCard
          label="Open requests"
          value={stats.openRequests}
          accent="#E8A33D"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white shadow-sm border border-[#2B4038] rounded-xl p-5">
          <h2 className="text-sm uppercase tracking-wide mb-3 font-extrabold">
            Recently added pets
          </h2>
          <ul className="space-y-2">
            {recentPets.map((p) => (
              <li
                key={p.id}
                className="flex items-center justify-between text-sm gap-2"
              >
                <span className="truncate">
                  {p.name} · {p.breed}
                </span>
                <StatusBadge status={p.status} />
              </li>
            ))}
            {recentPets.length === 0 && (
              <li className=" text-sm">No pets yet.</li>
            )}
          </ul>
        </div>

        <div className="bg-white shadow-sm border border-#2B4038 rounded-xl p-5">
          <h2 className=" text-sm uppercase tracking-wide mb-3 font-extrabold">
            Recent adoption requests
          </h2>
          <ul className="space-y-2">
            {recentRequests.map((r) => (
              <li
                key={r.id}
                className="flex items-center justify-between text-sm gap-2"
              >
                <span className="truncate">
                  {r.adopterName} → {r.petName}
                </span>
                <StatusBadge status={r.status} />
              </li>
            ))}
            {recentRequests.length === 0 && (
              <li className="text-#9FB3AC text-sm">No requests yet.</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function StatusBadge({ status }) {
  const map = {
    available: { label: "Available", bg: "#4FA88C22", color: "#4FA88C" },
    pending: { label: "Pending", bg: "#E8A33D22", color: "#E8A33D" },
    adopted: { label: "Adopted", bg: "#D9695F22", color: "#D9695F" },
    approved: { label: "Approved", bg: "#4FA88C22", color: "#4FA88C" },
    rejected: { label: "Rejected", bg: "#D9695F22", color: "#D9695F" },
  };
  const s = map[status] || map.available;
  return (
    <span
      className="text-xs px-2 py-0.5 rounded-full font-medium shrink-0"
      style={{ backgroundColor: s.bg, color: s.color }}
    >
      {s.label}
    </span>
  );
}