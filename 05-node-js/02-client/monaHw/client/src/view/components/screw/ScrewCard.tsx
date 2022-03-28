import { Button } from "@mui/material";
import { useState } from "react";
import './ScrewCard.scss'
import axios from 'axios'
export interface CardProp {
    product: {
      name: string,
      price: number
    };
  }
function ScrewCard(props:CardProp){
const {name,price}=props.product;
const [editAmount, setAmount] = useState(1);
function orderHandler(ev:any){
    ev.preventDefault();
    const form=ev.target;
    axios.post('/order/add-order-relatedPro',{woodName:name,price:price,amount:form[0].value})
        .then((res) => console.log(res))
        .catch((err) => console.error(err));
}
return(
    <div className="card">
        <p style={{color:'white'}}>{name}</p>
        <p style={{color:'yellow'}}>{price}₪</p>
        <form onSubmit={orderHandler}>
        <input style={{height:'30%',width:'20%' ,margin:'auto'}}  type="number" name="amount" required value={editAmount}onChange={(ev: any) => setAmount(ev.target.value)} />
        <Button type="submit" variant="contained" style={{ backgroundColor: 'rgb(47, 143, 90)' }} size="medium">order</Button>
 </form>
    </div>
)
}

export default ScrewCard;