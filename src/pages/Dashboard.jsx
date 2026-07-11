import React, { useState, useMemo } from "react";
import { PawPrint, LayoutGrid, PlusCircle, ClipboardList, Home } from "lucide-react";
import AddPet from "../components/AddPet";
import EditPet from "../components/EditPet";
import ManagePets from "../components/ManagePets";
import ManageRequests from "../components/ManageRequests";

const initialPets = [
  {
    id: "p1",
    name: "Miso",
    species: "Dog",
    breed: "Shiba Inu mix",
    age: "2 yrs",
    gender: "Female",
    description: "Loves belly rubs and long walks. Good with kids.",
    image: "",
    status: "available",
    dateAdded: "2026-06-02",
  },
  {
    id: "p2",
    name: "Clementine",
    species: "Cat",
    breed: "Tabby",
    age: "8 months",
    gender: "Female",
    description: "Curious and playful, needs a cat tree.",
    image: "",
    status: "pending",
    dateAdded: "2026-06-18",
  },
  {
    id: "p3",
    name: "Baxter",
    species: "Dog",
    breed: "Beagle",
    age: "5 yrs",
    gender: "Male",
    description: "Calm senior boy, great couch companion.",
    image: "",
    status: "adopted",
    dateAdded: "2026-05-11",
  },
];

const initialRequests = [
  {
    id: "r1",
    petId: "p2",
    petName: "Clementine",
    adopterName: "Amara Otieno",
    adopterEmail: "amara.o@example.com",
    adopterPhone: "+254 700 111 222",
    message: "We have a quiet home and a cat-proofed balcony.",
    status: "pending",
    dateSubmitted: "2026-07-01",
  },
  {
    id: "r2",
    petId: "p1",
    petName: "Miso",
    adopterName: "James Mwangi",
    adopterEmail: "jmwangi@example.com",
    adopterPhone: "+254 700 333 444",
    message: "Experienced dog owner, fenced yard.",
    status: "pending",
    dateSubmitted: "2026-07-05",
  },
  {
    id: "r3",
    petId: "p13",
    petName: "Baxter",
    adopterName: "Peter Kimani",
    adopterEmail: "Pkimani@example.com",
    adopterPhone: "+254 712 345 678",
    message: "Experienced dog trainer.",
    status: "pending",
    dateSubmitted: "2026-07-07",
  },
];

const NAV_ITEMS = [
  { id: "overview", label: "Overview", icon: Home },
  { id: "managePets", label: "Manage pets", icon: LayoutGrid },
  { id: "addPet", label: "Add a pet", icon: PlusCircle },
  { id: "manageRequests", label: "Adoption requests", icon: ClipboardList },
];

export default function Dashboard() {
  const [pets, setPets] = useState(initialPets);
  const [requests, setRequests] = useState(initialRequests);
  const [activeView, setActiveView] = useState("overview");
  const [editingPet, setEditingPet] = useState(null);

  const stats = useMemo(() => {
    const total = pets.length;
    const available = pets.filter((p) => p.status === "available").length;
    const pending = pets.filter((p) => p.status === "pending").length;
    const adopted = pets.filter((p) => p.status === "adopted").length;
    const openRequests = requests.filter((r) => r.status === "pending").length;
    return { total, available, pending, adopted, openRequests };
  }, [pets, requests]);

  function addPet(pet) {
    const newPet = {
      ...pet,
      id: `p${Date.now()}`,
      status: "available",
      dateAdded: new Date().toISOString().slice(0, 10),
    };
    setPets((prev) => [newPet, ...prev]);
    setActiveView("managePets");
  }

  function saveEditedPet(updatedPet) {
    setPets((prev) => prev.map((p) => (p.id === updatedPet.id ? updatedPet : p)));
    setEditingPet(null);
  }

  function deletePet(id) {
    setPets((prev) => prev.filter((p) => p.id !== id));
    setRequests((prev) => prev.filter((r) => r.petId !== id));
  }

  function markAdopted(id) {
    setPets((prev) => prev.map((p) => (p.id === id ? { ...p, status: "adopted" } : p)));
  }

  function setPetStatus(id, status) {
    setPets((prev) => prev.map((p) => (p.id === id ? { ...p, status } : p)));
  }

  function approveRequest(id) {
    const req = requests.find((r) => r.id === id);
    setRequests((prev) => prev.map((r) => (r.id === id ? { ...r, status: "approved" } : r)));
    if (req) setPetStatus(req.petId, "adopted");
  }

  function rejectRequest(id) {
    setRequests((prev) => prev.map((r) => (r.id === id ? { ...r, status: "rejected" } : r)));
  }

  return (
    <div className=" min-h-screen bg-[#e4dad0] bg-[url('/path-to-your/image.png')] bg-cover bg-center bg-no-repeat w-full" style={{ fontFamily: "Inter, sans-serif" }}>
      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <aside className="md:w-64 shrink-0 border-b md:border-b-0 md:border-r border-[#2B4038] p-5">
          <div className="flex items-center gap-2 mb-8">
            <PawPrint className="w-6 h-6 text-[#da760c]" />
            <span
              className="text-xl tracking-tight"
              style={{ fontFamily: "Fraunces, serif", fontWeight: 600 }}
            >
              Shelter Admin
            </span>
          </div>
          <nav className="flex md:flex-col gap-1 overflow-x-auto md:overflow-visible">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = activeView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveView(item.id)}
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
                        isActive ? "bg-black text-white" : "bg-orange-400 text-[#12201D]"
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
          {activeView === "overview" && <Overview stats={stats} pets={pets} requests={requests} />}

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
            <ManageRequests requests={requests} onApprove={approveRequest} onReject={rejectRequest} />
          )}
        </main>
      </div>

      {editingPet && (
        <EditPet pet={editingPet} onSave={saveEditedPet} onCancel={() => setEditingPet(null)} />
      )}
    </div>
  );
}

function StatCard({ label, value, accent }) {
  return (
    <div className="bg-white border border-[#2B4038] rounded-xl px-5 py-4 flex-1 min-w-[140px]">
      <p className="text-xs uppercase tracking-wide  mb-1 font-bold">{label}</p>
      <p
        className="text-3xl"
        style={{ fontFamily: "Fraunces, serif", fontWeight: 600, color: accent || "black" }}
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
      <h1 className=" text-4xl mb-1" style={{ fontFamily: "Fraunces, serif", fontWeight: 600 }}>
        Dashboard Overview
      </h1>
      <p className="mb-6 text-sm">A snapshot of pets and adoption activity.</p>

      <div className="flex flex-wrap gap-4 mb-8">
        <StatCard label="Total pets" value={stats.total} />
        <StatCard label="Available" value={stats.available} accent="#4FA88C" />
        <StatCard label="Pending" value={stats.pending} accent="#E8A33D" />
        <StatCard label="Adopted" value={stats.adopted} accent="#D9695F" />
        <StatCard label="Open requests" value={stats.openRequests} accent="#E8A33D" />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white border border-[#2B4038] rounded-xl p-5">
          <h2 className="text-sm uppercase tracking-wide mb-3 font-extrabold">Recently added pets</h2>
          <ul className="space-y-2">
            {recentPets.map((p) => (
              <li key={p.id} className="flex items-center justify-between text-sm">
                <span>{p.name} · {p.breed}</span>
                <StatusBadge status={p.status} />
              </li>
            ))}
            {recentPets.length === 0 && <li className=" text-sm">No pets yet.</li>}
          </ul>
        </div>

        <div className="bg-white border border-#2B4038 rounded-xl p-5">
          <h2 className="text-sm uppercase tracking-wide mb-3 font-extrabold">Recent adoption requests</h2>
          <ul className="space-y-2">
            {recentRequests.map((r) => (
              <li key={r.id} className="flex items-center justify-between text-sm">
                <span>{r.adopterName} → {r.petName}</span>
                <StatusBadge status={r.status} />
              </li>
            ))}
            {recentRequests.length === 0 && <li className="text-#9FB3AC text-sm">No requests yet.</li>}
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
      className="text-xs px-2 py-0.5 rounded-full font-medium"
      style={{ backgroundColor: s.bg, color: s.color }}
    >
      {s.label}
    </span>
  );
}