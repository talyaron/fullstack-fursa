import React from "react";
import { Link, useNavigate } from "react-router-dom";
export interface productProp{
    name :string;
   product:any;
   setProduct:any;
  
  
}

function Product(prop:productProp){
    const {product,setProduct,name}=prop;
   
    function addHandler()
    {
         let copy=Object.assign([],product);
         copy.push({name});
         setProduct(copy);
       


    }
    
    return(
        <div>
            {prop.name}
           
            <button onClick={addHandler}>Add</button> 
           
        </div>
    );
}

export default Product;