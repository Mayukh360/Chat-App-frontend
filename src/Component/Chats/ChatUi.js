import React, { useState } from 'react'
import { useSelector } from "react-redux";
import axios from 'axios';

export default function ChatUi() {
  const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);
  const [message, setMessage]=useState('');
  const userId=localStorage.getItem('userId');
  const token= localStorage.getItem('token');
 const submithandler=async(event)=>{
  event.preventDefault()
  console.log(message)
  try {
    const response = await axios.post(
      "http://localhost:3000/chats",
      { message },
      {
        headers: {
          Authorization: localStorage.getItem("token")
        }
      }
    );

    // Handle response if needed
    console.log(response.data);
  } catch (error) {
    // Handle error if needed
    console.error(error);
  }

 }
  return (
    <form onSubmit={submithandler}>
   <input type='text' onChange={(e)=>{setMessage(e.target.value)}}/>
      <button type='submit'>Send</button>
    </form>
  )
}
