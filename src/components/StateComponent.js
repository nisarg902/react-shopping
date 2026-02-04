import React, { useState } from "react";

 export default function StateComponent(){
      const[products,setProduct]     =    useState(["all","electronic",'footwear'])
    return(
        <div> 
     <ol>
         {
           products.map(item => (
    <li key={item}>{item}</li>
))

         }
      </ol>
        </div>
    );
 }