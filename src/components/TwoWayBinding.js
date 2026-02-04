import { useState } from "react"

export default function TwoWayBinding(){

   const[product,setproduct]=useState({Name:'',Price:'',City:''})

   function handleName(e){

    setproduct({
       Name:e.target.value,
       Price:product.Price,
       Stock:product.Stock

    })

   }
   function handlePrice(e){
    setproduct({
          Name:product.Name,
       Price:e.target.value,
       Stock:product.Stock

    })

   }
   function handleCity(){

   }
  return(
    <div>
      
      <div className="row"> 
            <div className="col-3">
            <dl>
               <dt>Name</dt>
               <dd>
                 <input type="text" onChange={handleName}></input>
               </dd>
               <dt>price</dt>
               <dd>
               <input type="text" onChange={handlePrice}></input>
               </dd>
               <dt>city</dt>
               <dd>
                 <select onChange={handleCity}>
                   <option>delhi</option>
                    <option >ngpur</option>
                   
                 </select>
               </dd>

               
            </dl>
            
            </div>
            <div className="col-9">
              <h6>{product.Name}</h6>
              <h6>{product.Price}</h6>
            
            
            </div>
      
      </div>
    </div>
  )
}