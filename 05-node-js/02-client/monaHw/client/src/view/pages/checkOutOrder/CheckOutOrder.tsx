import "./CheckOutOrder.scss"
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
import { useState } from "react";

export default function ChekOutOrder()
{
  function handlevisa()
{
 console.log('visa')
}
function handlecash()
{
 console.log('cash')
}
function handledel()
{
 console.log('delivery')
}
function handlepick()
{
 console.log('pick up')
}
  function handler(){
    window.open("/cart", "_self");
    window.close();}
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
          
          </div>
          {/* <input placeholder="toatal price"></input> */}
            <Button variant="contained" style={{backgroundColor: 'rgb(47, 143, 90)'}} size="medium">
       <Link to="/cart/checkOutOrder"> checkout  </Link>  
       
       </Button> 
      
       </div>  
        </div>
    )
}