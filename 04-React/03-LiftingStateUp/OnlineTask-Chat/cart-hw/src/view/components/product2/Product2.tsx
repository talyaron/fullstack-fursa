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
         let copy=Object.assign([],product);
         copy.pop({name});
         setProduct(copy);
 
 
     }
     return(
         <div>
             {prop.name}
             <Link to="/cart">
             <button onClick={removeHandler}>remove</button>
             </Link>
         </div>
     );
 }
 
 export default Product;