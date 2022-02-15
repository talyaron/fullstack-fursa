import { Link } from "react-router-dom";

export interface productProp{
    product:any;
    setProduct:any;
     name :string;
   
 }
 
 
 
 function Product(prop:productProp){
     const {product,setProduct,name}=prop;
     function removeHandler()
     {
         let copy=Object.assign([],product)
        setProduct( copy.filter((product:any)=>{
             if(product.name!=name){
                 return product;
             }

         }))
       
 
 
     }
     return(
         <div>
             {prop.name}
           
             <button onClick={removeHandler}>remove</button>
             
         </div>
     );
 }
 
 export default Product;