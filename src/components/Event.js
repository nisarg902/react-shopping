import React from 'react'

const Event = () => { 

    const courseName="React.Js Tutorial" ;
    const selectedState="adegoan";

 const showWelcome = () => {
    
    alert("welcome to react tutoraial")

 }
 const showWelcome2 = () => {
    
    alert("welcome to two")

 }
 const showmsg =(msg)=>{
     alert(msg)
 }

 const onStatechnage = (k) => {
    alert("state changed");
 }

 const ontextchnage = () =>{
  console.log("");
    
 }

 const onMouseIn =()=>{
    console.log("mouse entered");
    
 }
 const onMouseLeft =()=>{
    console.log("mouse left");
    
 }
  return (
    <div>
       <button onClick={showWelcome}>
        show sWelcome
       </button>
       <br></br>
       <button onClick={()  =>  {showmsg ("angular")}  }>
        show angular
       </button> 
       <br></br>
       <button onClick={ () =>   {showmsg ("REACT")} } >
        show react
       </button> 
       <br></br>
       <button onClick={ () =>   {showWelcome ()} } >
        show react
       </button> 
       <select value={selectedState} onChange={ () => { onStatechnage()}}>
        <option>nagpur</option>
        <option>adegoan</option>
        <option>kodamendhi</option>
       </select>
      <input type='text' onChange={() =>{ ontextchnage()}  }></input>

      <div onMouseEnter={onMouseIn} onMouseLeave={ onMouseLeft } style={{width:"200px",height:"200px",backgroundColor:"red", color:"white"}}>
          div area -{ courseName}

      </div>
      <input type='text' value={courseName}/>
    </div>
  );
}; 

export default Event 