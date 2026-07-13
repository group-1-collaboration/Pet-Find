import { useParams, useNavigate } from "react-router-dom";
import petData from "../data/pets.json";
import { Card, CardContent, CardTitle } from "./ui/card";
import { useAuth } from "@/context/AuthContext";

function PetDetails() {
  // Get the id from the URL
  const { id } = useParams();

  // Navigation
  const navigate = useNavigate();

  // Logged-in user
  const { user } = useAuth();

  // Find the selected pet
  const pet = petData.find((pet) => pet.id === Number(id));

  if (!pet) {
    return (
      <h2 className="text-center mt-10 text-xl font-semibold">
        Pet not found.
      </h2>
    );
  }

  // Handle adoption request
  const handleRequestAdoption = () => {
    if (!user) {
      alert("Please sign in before requesting an adoption.");
      return;
    }

    navigate(`/adopt/${pet.id}`);
  };

  return (
    <Card className="max-w-6xl mx-auto mt-10 shadow-lg dark:bg-black/80 dark:text-white">
      <CardContent className="grid items-start gap-5 p-6 md:grid-cols-2">
        <img
          src={pet.image}
          alt={pet.name}
          className="w-full rounded-lg object-contain"
        />

        <div>
          <CardTitle className="mt-6 text-3xl font-bold">
            {pet.name}
          </CardTitle>

          <div className="mt-4 space-y-4">
            <p>
              <strong>Breed:</strong> {pet.breed || pet.Breed}
            </p>

            <p>
              <strong>Gender:</strong> {pet.gender}
            </p>

            <p>
              <strong>Age:</strong> {pet.age}
            </p>

            <p>
              <strong>Description:</strong> {pet.description}
            </p>

            <p>
              <strong>Vaccinated:</strong>{" "}
              {pet.vaccinated ? "Yes" : "No"}
            </p>

            <p>
              <strong>House Trained:</strong>{" "}
              {pet.houseTrained ? "Yes" : "No"}
            </p>

            <p>
              <strong>Health Status:</strong>{" "}
              {pet.healthStatus || pet.healthStatuse}
            </p>

            <button
              onClick={handleRequestAdoption}
              className="mt-6 rounded-lg bg-orange-500 px-6 py-3 text-white transition hover:bg-orange-600"
            >
              Request Adoption
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default PetDetails;