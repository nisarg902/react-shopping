import React from "react"; 

   function Hello()
   {
          const  getName=(name) =>{ 
             return name
         }

         const name ="nisarg" 

         function handleClick(){   

             alert("Button was clicked"); 
             
         } 

         const handleInput =(event)=>{
            console.clear();
            console.log(event.target.value)

         }
        
      return(
        <>
         <h1>Hello <br></br>{getName(name)}</h1> 
         <button onClick={handleClick} > Click Me</button> 
         <button onClick={()=>alert("hello from inline function")} > Click Me</button> 
         <input type="text" onChange={handleInput} placeholder="type something"></input>
        </>
      );
  }

export default Hello