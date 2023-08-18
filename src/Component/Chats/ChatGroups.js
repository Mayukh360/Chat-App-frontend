import React, { useState } from "react";
import axios from "axios";

export default function ChatGroups() {
  const [visible, setVisible] = useState(false);
  const [groupname, setGroupname]=useState('')

  const formToggle = () => {
    setVisible((prevState) => !prevState);
  };
  const submithandler=async(e)=>{
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/creategroup",
        { groupname },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      e.target.reset();
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div>
      <button
        className="bg-blue-500 mb-2 text-white px-4 py-2 rounded"
        onClick={formToggle}
      >
        Create Group
      </button>
      {visible && (
        <form onSubmit={submithandler}>
          <input
            type="text"
            className="flex-grow mr-2 mb-2 p-2 border border-gray-300 rounded"
            placeholder="Type Group Name..."
            onChange={(e)=>{setGroupname(e.target.value)}}
            required
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            type="submit"
          >
            Add
          </button>
        </form>
      )}
    </div>
  );
}
