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
   
 }
 
 
 
 function Product(prop:productProp){
     const {product,setProduct,woodName,woodlength,width,thick,amount}=prop;
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
           <div className="item">{woodName}</div>
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