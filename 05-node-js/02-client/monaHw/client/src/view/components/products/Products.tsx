import './Products.scss'
import Button from '@mui/material/Button';
import axios from 'axios'
import { useState,useEffect } from 'react';
import {selectorders} from '../../../features/cart/cartSlice';
import {update} from '../../../features/cart/cartSlice';
import {useAppDispatch} from '../../../app/hooks';

export interface productProp{
    woodName:string;
    woodlength:number;
    width:number;
    thick:number;
    amount:number;
    color?:string;
    id:number;
   
 }
 
 
 
 function Product(prop:productProp){
    // const dispatch = useAppDispatch();

    const [order,setOrder]=useState([]);
    useEffect(()  => {
       axios.get('http://localhost:3004/userOrder').then(({data})=> setOrder(data));
        }, []);
     const {woodName,woodlength,width,thick,amount,color,id}=prop;
     function RemoveHandler()
     {
        
        axios.delete(`http://localhost:3004/userOrder/${id}`).then(({data})=>setOrder(data));
    
    }
       
     return(
         <div className="cartProducts">
           <div className="item details">
               <p>{woodName}</p> 
               <p> <span>product Name: </span>{woodName} ,<span>Length: </span>{woodlength}, <span>Width: </span> {width} ,<span>Thickness: </span>{thick}</p></div>
           <div className="item">{amount}</div>
           <div className="item"></div>
           <div className="item"></div>

           <Button onClick={RemoveHandler} type="submit" variant="contained" style={{backgroundColor: 'rgb(248, 140, 38) '}} size="small">
          remove
       </Button>

             
         </div>
     );
 }
 
 export default Product;