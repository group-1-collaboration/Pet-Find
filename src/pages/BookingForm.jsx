import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BookingFormBackground from "@/assets/about.jpg"

const BookingForm = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Pet ID from the URL

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    message: "",
  });

  const [bookedSlots, setBookedSlots] = useState([]);

  // Load booked slots whenever the date changes
  useEffect(() => {
    if (!formData.date) return;

    const bookings =
      JSON.parse(localStorage.getItem("bookings")) || [];

    const slots = bookings
      .filter(
        (booking) =>
          booking.petId === id &&
          booking.date === formData.date
      )
      .map((booking) => booking.time);

    setBookedSlots(slots);
  }, [formData.date, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

const handleSubmit = (e) => {
  e.preventDefault();

  const requests =
    JSON.parse(localStorage.getItem("shelter_admin_requests")) || [];

  const newRequest = {
    id: `request-${Date.now()}`,
    petId: id,
    adopterName: formData.fullName,
    email: formData.email,
    phone: formData.phone,
    date: formData.date,
    time: formData.time,
    message: formData.message,
    status: "pending",
    createdAt: new Date().toISOString(),
  };

  requests.push(newRequest);

  localStorage.setItem(
    "shelter_admin_requests",
    JSON.stringify(requests)
  );

  navigate("/success");
};

  return (
        <section className="min-h-screen bg-cover bg-center flex items-center justify-end px-6 md:px-20" style={{
                backgroundImage:`url(${BookingFormBackground})`,
                backgroundSize:"cover",
                backgroundPosition:"center",
                height: "500px",
         }}>
    
   <div className="w-full rounded-3xl border border-white/30 bg-white/10 backdrop-blur-xl shadow-2xl p-8 text-slate-800">

  <h2 className="text-2xl font-bold mb-6">
    Book a Shelter Visit.
  </h2>

  <form onSubmit={handleSubmit} className="space-y-4">

    <input
      type="text"
      name="fullName"
      placeholder="Full Name"
      className="w-full border border-gray-300 p-3 rounded-lg text-black 
      focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
      value={formData.fullName}
      onChange={handleChange}
      required
    />

    <input
      type="email"
      name="email"
      placeholder="Email Address"
      className="w-full border border-gray-300 p-3 rounded-lg text-black 
      focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
      value={formData.email}
      onChange={handleChange}
      required
    />

    <input
      type="tel"
      name="phone"
      placeholder="Phone Number"
      className="w-full border border-gray-300 p-3 rounded-lg text-black 
      focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
      value={formData.phone}
      onChange={handleChange}
      required
    />

    <input
      type="date"
      name="date"
      className="w-full border border-gray-300 p-3 rounded-lg text-black 
      focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
      value={formData.date}
      onChange={handleChange}
      required
    />


    <div>

      <label className="font-semibold block mb-2">
        Select Time
      </label>

      <div className="space-y-2">

        {["Morning", "Afternoon", "Evening"].map((slot) => (
          <label
            key={slot}
            className={`flex items-center gap-2 p-2 rounded-md transition
            ${
              bookedSlots.includes(slot)
                ? "text-gray-400 cursor-not-allowed"
                : "hover:bg-white/10 cursor-pointer"
            }`}
          >

            <input
              type="radio"
              name="time"
              value={slot}
              checked={formData.time === slot}
              onChange={handleChange}
              disabled={bookedSlots.includes(slot)}
              required
              className="accent-orange-500"
            />

            {slot}

            {bookedSlots.includes(slot) && (
              <span className="text-red-500 text-sm">
                (Booked)
              </span>
            )}

          </label>
        ))}

      </div>

    </div>


    <textarea
      name="message"
      placeholder="Special Requests (Optional)"
      rows="4"
      className="w-full border border-gray-300 p-3 rounded-lg text-black 
      focus:outline-none focus:ring-2 focus:ring-orange-500 transition resize-none"
      value={formData.message}
      onChange={handleChange}
    />


    <button
      type="submit"
      className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-lg 
      hover:bg-orange-600 cursor-pointer transition duration-300 
      font-semibold shadow-md"
    >
      Book Visit
    </button>

  </form>

</div>
</section>
)};

export default BookingForm;