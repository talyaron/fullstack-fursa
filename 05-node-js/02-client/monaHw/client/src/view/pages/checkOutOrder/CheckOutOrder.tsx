import "./CheckOutOrder.scss"
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
import { useState,useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { deleteCartAsync, getCartAsync, selectorders } from "../../../features/cart/cartSlice";
import { getUser } from "../../../features/user/userReducer";
import axios from 'axios'

export default function ChekOutOrder()
{
  const[orderCollection,setOrderCollection]=useState('');
  const[paymentMethod,setPaymentMethod]=useState('');
  const user=useAppSelector(getUser)
  const dispatch = useAppDispatch();
    useEffect(()=>{
        dispatch(getCartAsync())

    },[])
    const orders = useAppSelector(selectorders);


  function handlevisa()
{
    {setPaymentMethod('Credit Card')}

}
function handlecash()
{setPaymentMethod('Cash')}

function handledel()
{
  setOrderCollection('Delivery')
}
function handlepick()
{
 setOrderCollection('PickUp')
}
 function handleChekOut()
 {
  axios.post('/order/checkOut',{order:orders.orders,userId:user._id,date:new Date(),paymentMethod:paymentMethod,orderCollection:orderCollection,orderStatus:'pending'})
  .then((res) => console.log(res)
  )
  .catch((err) => console.error(err));
 }
    return(
        <div className="checkOut">
         
          <div className="checkOut_body">
         
          <div className="checkOut_body_grid">
            <div className="item">              
             <img onClick={handlecash} src="https://cdn4.iconfinder.com/data/icons/shopping-21/64/shopping-24-256.png"></img>
            </div>
            <div className="item">
            <img onClick={handlevisa} src="https://cdn1.iconfinder.com/data/icons/picons-social/57/social_visa-512.png"></img>

            </div>
            <div className="item">
            <img onClick={handledel} src="https://cdn0.iconfinder.com/data/icons/unboxing-3/32/32-512.png"></img>

            </div>
            <div className="item">
            <img onClick={handlepick} src="https://cdn1.iconfinder.com/data/icons/miscellaneous-343-solid/128/receive_get_obtain_gain_enlist_accept_collect_pick-up_take_accept-512.png"></img>

            </div>
            <p style={{color:'green'}}>checkout details:  {orderCollection}  {paymentMethod}</p>

          </div>

          {/* <input placeholder="toatal price"></input> */}
            <Button variant="contained" style={{backgroundColor: 'rgb(47, 143, 90)'}} size="medium" onClick={handleChekOut}>
       checkout  
       
       </Button> 
      
       </div>  
        </div>
    )
}