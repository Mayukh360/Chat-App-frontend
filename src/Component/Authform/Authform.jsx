import React, { useState } from "react";
import axios from "axios";

export default function Authform() {
  const [isSignup, setIsSignup] = useState(true); // Track whether the form is for signup or login
  const [nameChangeData, setNameChangeData] = useState("");
  const [emailChangeData, setEmailChangeData] = useState("");
  const [phoneChangeData, setPhoneChangeData] = useState("");
  const [passwordChangeData, setPasswordChangeData] = useState("");

  const submitHandler = async (event) => {
    event.preventDefault();
    console.log(
      nameChangeData,
      emailChangeData,
      phoneChangeData,
      passwordChangeData
    );
    try{
      if (isSignup) {
        const response = await axios.post("http://localhost:3000/signup", {
          name: nameChangeData,
          email: emailChangeData,
          phonenumber: phoneChangeData,
          password: passwordChangeData,
        });
        console.log(response);
      } else {
        const response = await axios.post("http://localhost:3000/login", {
          email: emailChangeData,
          password: passwordChangeData,
        });
        console.log(response);
      }
    }
    catch(err){
      alert(err);
    }
   
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-600">
    <div className="bg-white p-8 rounded-lg shadow-md w-full sm:w-96">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        {isSignup ? "Sign Up" : "Login"}
      </h2>
      <form onSubmit={submitHandler}>
        {isSignup && (
          <div className="mb-4">
            <label className="block mb-1 font-semibold text-gray-800">
              Name
            </label>
            <input
              type="text"
              value={nameChangeData}
              onChange={(e) => setNameChangeData(e.target.value)}
              className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
        )}
        <div className="mb-4">
          <label className="block mb-1 font-semibold text-gray-800">
            Email
          </label>
          <input
            type="email"
            value={emailChangeData}
            onChange={(e) => setEmailChangeData(e.target.value)}
            className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold text-gray-800">
            Phone
          </label>
          <input
            type="number"
            value={phoneChangeData}
            onChange={(e) => setPhoneChangeData(e.target.value)}
            className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold text-gray-800">
            Password
          </label>
          <input
            type="password"
            value={passwordChangeData}
            onChange={(e) => setPasswordChangeData(e.target.value)}
            className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          {isSignup ? "Sign Up" : "Login"}
        </button>
      </form>
      <p className="mt-4 text-sm text-gray-600">
        {isSignup
          ? "Already have an account?"
          : "Don't have an account yet?"}
        <button
          className="text-blue-500 ml-1 focus:outline-none"
          onClick={() => setIsSignup(!isSignup)}
        >
          {isSignup ? "Login" : "Sign Up"}
        </button>
      </p>
    </div>
  </div>


  );
}