import React from 'react';
import { useParams } from 'react-router-dom';

const usersData = {
    1: {
      name: 'John Doe',
      email: 'johndoe@example.com',
      profilePic: 'https://via.placeholder.com/150',
      bio: 'Web developer with a love for building beautiful interfaces.',
    },
    2: {
      name: 'Jane Smith',
      email: 'janesmith@example.com',
      profilePic: 'https://via.placeholder.com/150',
      bio: 'Graphic designer and digital artist, passionate about creativity.',
    },
    3: {
      name: 'Michael Johnson',
      email: 'michaelj@example.com',
      profilePic: 'https://via.placeholder.com/150',
      bio: 'Full-stack engineer and tech enthusiast.',
    },
    4: {
      name: 'Emily Davis',
      email: 'emilydavis@example.com',
      profilePic: 'https://via.placeholder.com/150',
      bio: 'Content creator and social media strategist.',
    },
    5: {
      name: 'David Wilson',
      email: 'davidwilson@example.com',
      profilePic: 'https://via.placeholder.com/150',
      bio: 'Blockchain developer and crypto advocate.',
    },
  };
  

function User() {
  const { userid } = useParams();
  const user = usersData[userid];

  return (
    <div className="bg-gray-800 text-white min-h-screen flex flex-col items-center justify-center p-6">
      {user ? (
        <div className="w-1/2 p-12 bg-gray-700 rounded-lg shadow-lg">
          <img
            src={user.profilePic}
            alt={`${user.name}'s profile`}
            className="w-32 h-32 rounded-full mx-auto mb-4"
          />
          <h2 className="text-4xl font-bold text-center mb-2">{user.name}</h2>
          <p className="text-center text-lg mb-4">{user.bio}</p>
          <p className="text-center text-sm text-gray-300">Email: {user.email}</p>
        </div>
      ) : (
        <div className="text-2xl text-center">User not found</div>
      )}
    </div>
  );
}

export default User;
