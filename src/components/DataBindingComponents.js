import React from "react";

const DataBindingComponents = () => { 
    
     var menu =[
      {category:'electronic',products:["mobile","LedTv"]},
      {category:'footwear',products:["nike casual","LeeBOOOt"]}
     ]
        
     return(
      <div>
          {
            menu.map(item=>
              <ol key={item.category}>{item.category}
                 <ul>{
                       item.products.map(product=>
                        <li key={product}>{product}</li>
                       )
                  
                  }</ul>
              </ol>

              
            )
          }
          <select>
            {
               menu.map(item=>
                <optgroup key={item.category} label={item.category}>
                   {
                    item.products.map(product=>
                      <option key={product} >{product}</option>
                    )
                   }
                </optgroup>
               )
            }
          </select>
      </div>
     )

  }

export default DataBindingComponents;
