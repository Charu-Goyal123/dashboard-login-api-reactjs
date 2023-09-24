// Table.js
import React from 'react';

const Table = () => {
  // Sample data for demonstration
  const users = [
    { id: 1, name: 'Charu Goyal', email: 'charu@.com' },
    { id: 2, name: 'Neha Jain', email: 'jain@.com' },
    // Add more user data here if needed
  ];

  return (
    <div className="flex justify-center">
      <table className="w-full max-w-md bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-3 px-6 text-left">ID</th>
            <th className="py-3 px-6 text-left">Name</th>
            <th className="py-3 px-6 text-left">Email</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {users.map((user) => (
            <tr key={user.id}>
              <td className="py-4 px-6">{user.id}</td>
              <td className="py-4 px-6">{user.name}</td>
              <td className="py-4 px-6">{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
