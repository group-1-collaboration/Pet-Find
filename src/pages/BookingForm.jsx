import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

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

    const bookings =
      JSON.parse(localStorage.getItem("bookings")) || [];

    const newBooking = {
      petId: id,
      ...formData,
    };

    bookings.push(newBooking);

    localStorage.setItem(
      "bookings",
      JSON.stringify(bookings)
    );

    navigate("/success");
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-black/80 shadow-lg rounded-lg text-white">
      <h2 className="text-2xl font-bold mb-6">
        Book a Shelter Visit
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          className="w-full border p-2 rounded"
          value={formData.fullName}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className="w-full border p-2 rounded"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          className="w-full border p-2 rounded"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <input
          type="date"
          name="date"
          className="w-full border p-2 rounded"
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
                className={`flex items-center gap-2 ${
                  bookedSlots.includes(slot)
                    ? "text-white"
                    : ""
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
          className="w-full border p-2 rounded"
          value={formData.message}
          onChange={handleChange}
        />

        <button
          type="submit"
          className="mt-6 bg-orange-500 text-white px-6 p-4 rounded-lg hover:bg-orange-600 cursor-pointer"
        >
          Book Visit
        </button>

      </form>
    </div>
  );
};

export default BookingForm;