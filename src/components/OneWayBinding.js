 import   {useState} from  "react";

 export default function App () {

      const [name, setName] = useState("Nisarg");
       return  (
      <>
           <h1>HELLO  {name}</h1>

      <button onClick={() => setName("React Learner")}>             
             Change Name
             </button>

      </>

       );


  }
