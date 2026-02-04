
import react from "react";
import { useState } from "react";
import DataBindingComponents from "./DataBindingComponents";

const DataBinding = ()=>{

  const [products,setProduct]=useState(["tv","monile","camera"])
    
    return(
  <div className="container">
  <ol>
    {
     products.map(product=>
      <li>{product}</li>
     )
  }
  </ol>
  </div>

    );
}

export default DataBinding