import { Link } from "react-router-dom";

const Success = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-orange-50 px-6">
      <div className="bg-white shadow-xl rounded-3xl p-10 text-center max-w-md">

        <div className="text-6xl mb-5">
          🎉
        </div>

        <h1 className="text-3xl font-bold text-orange-600 mb-4">
          Booking Successful!
        </h1>

        <p className="text-gray-600 mb-6">
          Thank you for booking a shelter visit. 
          We have received your request and look forward to seeing you soon.
        </p>

        <Link
          to="/"
          className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg 
          hover:bg-orange-600 transition font-semibold"
        >
          Back to Home
        </Link>

      </div>
    </section>
  );
};

export default Success;