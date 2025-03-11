import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

export default function CreateBooking() {
  const [formData, setFormData] = useState({
    car_id: "",
    user_id: "",
    from_date: "",
    to_date: "",
  });
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setResponse(null);
    
    const today = new Date().toISOString().split("T")[0];
    if (formData.from_date < today || formData.to_date < today) {
      setError("Please select future dates for booking.");
      return;
    }

    try {
      const res = await axios.post("http://localhost:8080/createBooking", formData);
      setResponse("Booking is Successful ✅");
    } catch (err) {
      setError(err.response?.data || "Something went wrong");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-yellow-300 via-orange-400 to-red-400">
      <div className="flex max-w-4xl bg-white p-4 rounded-lg shadow-lg font-[Cambria] relative">
        {response && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 text-green-600 text-lg font-bold"
          >
            🎉 {response} 🎉
          </motion.div>
        )}
        <div className="w-1/2 p-3">
          <h1 className="text-lg font-bold text-center mb-2 text-gray-800">Adventure Awaits – Secure Your Car Now!</h1>
          {/* <h2 className="text-lg font-semibold mb-3 text-gray-700">Create a Booking</h2> */}
          <br />
          <br />
          <form onSubmit={handleSubmit} className="space-y-2">
            <input type="text" name="car_id" placeholder="Car ID" onChange={handleChange} className="w-full p-1 border rounded text-xs" required />
            <input type="text" name="user_id" placeholder="User ID" onChange={handleChange} className="w-full p-1 border rounded text-xs" required />
            <input type="date" name="from_date" onChange={handleChange} className="w-full p-1 border rounded text-xs" required />
            <input type="date" name="to_date" onChange={handleChange} className="w-full p-1 border rounded text-xs" required />
            <button type="submit" className="w-full bg-blue-500 text-white p-1 rounded text-xs hover:bg-blue-600">Book Now</button>
          </form>
          {error && <p className="mt-2 text-red-600 text-xs">{error}</p>}
        </div>
        <div className="w-1/2">
          <img src="https://img.freepik.com/premium-photo/car-driving-road-by-ocean_81048-13036.jpg" alt="Car" className="rounded-lg w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}