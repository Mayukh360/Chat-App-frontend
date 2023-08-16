import React from 'react';
import { useDispatch,   useSelector } from 'react-redux';
import { authActions } from '../../store/AuthReducer';
import { useNavigate } from 'react-router-dom';


export default function Navbar() {
    const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const navigate= useNavigate();

  const handleLogout = () => {
    // Dispatch your logout action here
    dispatch(authActions.islogout());
    navigate("/");
  };

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <div className="text-xl font-semibold">Chat App</div>
      </div>
      <div>
      {isLoggedIn &&  <button
          className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded"
          onClick={handleLogout}
        >
          Logout
        </button>}
      </div>
    </nav>
  );
}
