import React, { useState } from "react";



const EventBindingComponent = () => {

    const[username,setUsername]=useState('john')

    function handleusername(e){
        setUsername(e.target.value)
    }
  return (
    <div>

        <input type="text" onChange={handleusername} >
        </input>
        <h3>hello!{username}</h3>
    </div>
  )
}

export default EventBindingComponent