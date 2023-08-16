import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/AuthReducer";
import axios from "axios";

export default function ChatUi() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);
  const [message, setMessage] = useState("");
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");
  const [chatData, setChatData] = useState([]);

  const fetchData = async () => {
    const response = await axios.get("http://localhost:3000/getAllMessage", {
      headers: {
        Authorization: token,
      },
    });
    setChatData(response.data.data);
  };

  useEffect(() => {
    fetchData();

    dispatch(authActions.islogin(token));

    const intervalId = setInterval(() => {
      fetchData();
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const submithandler = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/chats",
        { message },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      event.target.reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      
      <form
        className="p-4 bg-white border-t border-gray-300 flex items-center"
        onSubmit={submithandler}
      >
        <input
          className="flex-grow mr-2 p-2 border border-gray-300 rounded"
          type="text"
          placeholder="Type your message..."
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          type="submit"
        >
          Send
        </button>
      </form>
      <div className="p-4 bg-white border-b border-gray-300">
        {chatData &&
          chatData.map((item) => (
            <p key={item.id} className="mb-2">
              <span className="font-semibold">{item.user.name}:</span>{" "}
              {item.message}
            </p>
          ))}
      </div>
    </div>
  );
}
