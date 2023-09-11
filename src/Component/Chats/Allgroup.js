import axios from 'axios'
import React from 'react'

export default function Allgroup() {
    const fetchData=async()=>{
        const response=await axios.get("http://localhost:3000/getallgroup")
        console.log(response.data)
    }
  return (
    <div>
        <button onClick={fetchData}>Fetch</button>
    </div>
  )
}
