import axios from "axios";
import React from "react";
import {useEffect, useState} from 'react'

function App() {
  const [status, setStatus] = useState(false)
  const [name,setName] = useState("Karthik")
  
  var contentType = {
    headers: {
      "content-type":"application/json"
    }
  }
  useState(()=>{
    axios.post("/",{
      firstName: "Karthik",
      lastName: "Namboori"
    },contentType).then(response => {console.log(response)}).catch((error)=>{console.log(error)})

  },[status])
  return (
    <div>
      <button onCLick = {()=>setStatus(!status)}>Clickme</button>
      <label>{status}</label>
    </div>

    )
    
}

export default App;
