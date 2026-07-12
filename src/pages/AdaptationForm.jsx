import { useState } from "react";

function AdoptionForm() {
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

      <button>Submit</button>
    </form>
  );
}

export default AdoptionForm;