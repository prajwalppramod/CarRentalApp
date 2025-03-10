import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewAllBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch bookings and users from the backend
    const fetchData = async () => {
      try {
        // Fetch bookings
        const bookingsResponse = await axios.get('/api/bookings');
        setBookings(bookingsResponse.data);

        // Fetch users
        const usersResponse = await axios.get('/api/users');
        setUsers(usersResponse.data);

        setLoading(false);
      } catch (err) {
        setError('Error fetching bookings or users.');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="p-6">Loading...</div>;
  }

  if (error) {
    return <div className="p-6 text-red-500">{error}</div>;
  }

  // Function to find user by user_id
  const getUserById = (userId) => {
    return users.find((user) => user.user_id === userId);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">All Bookings</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 border">Booking ID</th>
              <th className="px-4 py-2 border">Customer Name</th>
              <th className="px-4 py-2 border">Car ID</th>
              <th className="px-4 py-2 border">From Date</th>
              <th className="px-4 py-2 border">To Date</th>
              <th className="px-4 py-2 border">Total Amount</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => {
              const user = getUserById(booking.user_id); // Find user info by user_id
              if (!user) return null; // Skip if user not found (error handling)

              return (
                <tr key={booking.booking_id}>
                  <td className="px-4 py-2 border">{booking.booking_id}</td>
                  <td className="px-4 py-2 border">{user.name}</td> {/* Customer Name */}
                  <td className="px-4 py-2 border">{booking.car_id}</td> {/* Car ID */}
                  <td className="px-4 py-2 border">
                    {new Date(booking.from_date).toLocaleDateString('en-IN')} {/* From Date */}
                  </td>
                  <td className="px-4 py-2 border">
                    {new Date(booking.to_date).toLocaleDateString('en-IN')} {/* To Date */}
                  </td>
                  <td className="px-4 py-2 border">{`₹${booking.total_amount}`}</td> {/* Total Amount */}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewAllBookings;