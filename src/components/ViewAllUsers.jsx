import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewAllUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch users from the backend without any token for authentication
    axios
      .get('http://localhost:8080/api/viewAllUsers')
      .then((response) => {
        setUsers(response.data);  // Set the fetched user data
        setLoading(false);  // Set loading to false once the data is fetched
      })
      .catch((error) => {
        setError(error.response ? error.response.data.message : 'Error fetching users.');
        setLoading(false);  // Set loading to false even on error
      });
  }, []);

  if (loading) {
    return <div className="p-6">Loading...</div>;
  }

  if (error) {
    return <div className="p-6 text-red-500">{error}</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">All Users</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 border">User ID</th>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Email</th>
              <th className="px-4 py-2 border">Phone</th>
              <th className="px-4 py-2 border">Profile Picture</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user) => (
                <tr key={user.user_id}>
                  <td className="px-4 py-2 border">{user.user_id}</td>
                  <td className="px-4 py-2 border">{user.name}</td>
                  <td className="px-4 py-2 border">{user.email}</td>
                  <td className="px-4 py-2 border">{user.phone}</td>
                  <td className="px-4 py-2 border">
                    <img
                      src={user.profile_pic} // Display user profile picture
                      alt={user.name}
                      className="w-24 h-24 object-cover rounded-full"
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="px-4 py-2 text-center">No users found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewAllUsers;