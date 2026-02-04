import { useState } from "react"
 export default function EventBinding(){

    const[username,setUsername]=useState("")

    function handleusername(e){
        setUsername(e.target.value)
    }
  return(
    <div>
        <input type="text" onChange={handleusername}/>
        <h6>{username}</h6>

    </div>
  )
}