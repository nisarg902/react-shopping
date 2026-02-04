 import   {useState} from  "react";
  
 export default function App () {
       
     
    const [name,setName]=useState("Hello")
       return  (
         <div>
            <input type="text"
             value={name} 
             onChange={(e)=>setName(e.target.value)

             }/> 
             <h3>Your Name: {name}</h3>
             
        
         </div>

       );
  }

