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
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Full Name"
        onChange={(e) =>
          setForm({ ...form, name: e.target.value })
        }
      />

      <input
        placeholder="Email"
        onChange={(e) =>
          setForm({ ...form, email: e.target.value })
        }
      />

      <textarea
        placeholder="Why do you want to adopt?"
        onChange={(e) =>
          setForm({ ...form, reason: e.target.value })
        }
      />

<Link
  to={`/booking/${id}`}
  className="inline-block mt-6 bg-orange-500 text-white px-6 py-4 rounded-lg hover:bg-orange-600"
>
  Submit
</Link>
    </form>
  );
}

export default AdoptionForm;