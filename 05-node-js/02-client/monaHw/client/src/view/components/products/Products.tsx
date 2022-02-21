import './Products.scss'
import Button from '@mui/material/Button';

export interface productProp{
    woodName:string;
    woodlength:number;
    width:number;
    thick:number;
    amount:number;
    product:any;
    setProduct:any;
    color?:string;
   
 }
 
 
 
 function Product(prop:productProp){
     const {product,setProduct,woodName,woodlength,width,thick,amount,color}=prop;
     function removeHandler()
     {
         let copy=Object.assign([],product)
        setProduct( copy.filter((product:any)=>{
             if(product.woodName!=woodName){
                 return product;
             }

         }))
        }
       
     return(
         <div className="cartProducts">
           <div className="item details">
               <p>{woodName}</p> 
               <p> <span>product Name: </span>{woodName} ,<span>Length: </span>{woodlength}, <span>Width: </span> {width} ,<span>Thickness: </span>{thick}</p></div>
           <div className="item">{amount}</div>
           <div className="item"></div>
           <div className="item"></div>

           <Button onClick={removeHandler} type="submit" variant="contained" style={{backgroundColor: 'red'}} size="small">
          remove
       </Button>

             
         </div>
     );
 }
 
 export default Product;