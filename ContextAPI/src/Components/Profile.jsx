import React, { useContext } from 'react';
import UserContext from '../Contexts/UserContext';
import ThemeContext from '../Contexts/ThemeContext';
import { useNavigate } from 'react-router-dom';
function Profile() {
  const { user, setUser } = useContext(UserContext);
  const { themeMode } = useContext(ThemeContext);
  const navigate = useNavigate();
  
  if (!user) return <div>Please login</div>;

  return (
    <div className={`flex justify-center items-center h-screen ${themeMode === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
      <div className="p-8 shadow-lg rounded-lg text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome, {user.username}!</h1>
        <p>You are successfully logged in.</p>

        <button 
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          onClick={() => {
              setUser(null);
              navigate('/');
            }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Profile;
