import { Button } from "@mui/material";
import { useState } from "react";
import './ScrewCard.scss'
export interface CardProp {
    product: {
      name: string,
      price: number
    };
  }
function ScrewCard(props:CardProp){
const {name,price}=props.product;
const [editAmount, setAmount] = useState(1);

return(
    <div className="card">
        <p>{name}</p>
        <p style={{color:'yellow'}}>{price}₪</p>
        <input style={{height:'30%',width:'20%' ,margin:'auto'}}  type="number" name="amount" required value={editAmount}onChange={(ev: any) => setAmount(ev.target.value)} />
        <Button  variant="contained" style={{ backgroundColor: 'rgb(47, 143, 90)' }} size="medium">order</Button>
    </div>
)
}

export default ScrewCard;