
import React from "react";



const DataBindingComponents = () => {

   var products = [
          {  Name:"karan", price:"200" },
          {  Name:"kiran", price:"290" }

   ]


  return (
    <div>
        <h2>Table Representation</h2>
        <table>
             <thead>
          <tr>
            <th>NAME</th>
            <th>PRICE</th>
          </tr>
        </thead>
             <tbody>
          { products.map((product, index) => (
            <tr key={index}>
                <td>{product.name}</td>
                <td>{product.price}</td>
            </tr>
            ))
          }
        </tbody>
        </table>
    </div>
  )
}

export default DataBindingComponents