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
  const NaviagteHandler=()=>{
    navigate("/admingroups")
  }
  const chatnavigate=()=>{
    navigate("/chats")
  }

  return (
    <nav className=" bg-gradient-to-b from-purple-700 to-pink-600 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <button className="text-xl font-semibold" onClick={chatnavigate}>Chat App</button>
      </div>
      <div>
      {isLoggedIn &&  <button
          className="bg-gray-600 hover:bg-gray-800 mr-4 px-4 py-2 rounded"
          onClick={NaviagteHandler}
        >
         Admin Groups
        </button>}
      {isLoggedIn &&  <button
          className="bg-green-600 hover:bg-red-600 px-4 py-2 rounded"
          onClick={handleLogout}
        >
          Logout
        </button>}
      
      </div>
    </nav>
  );
}
