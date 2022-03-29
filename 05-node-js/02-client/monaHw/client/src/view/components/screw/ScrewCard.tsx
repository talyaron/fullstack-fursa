import { Alert, Box, Button } from "@mui/material";
import { useState } from "react";
import './ScrewCard.scss'
import axios from 'axios'
export interface CardProp {
  product: {
    name: string,
    price: number,
    amount:number
  };
}
function ScrewCard(props: CardProp) {
  const { name, price,amount } = props.product;
  const [editAmount, setAmount] = useState(1);
  const [show,setShow]=useState('none');
  const [showF,setShowF]=useState('none')
  function orderHandler(ev: any) {
    ev.preventDefault();
    const form = ev.target;
    if(amount>0&&(form[0].value)<=amount)
    {
      axios.post('/order/add-order-relatedPro', { woodName: name, price: price, amount: form[0].value })
      .then((res) => {console.log(res); setShow('block')
    
      axios.patch('/product/update-product-stock',{name:name,amount:(amount-(form[0].value))})
    })
      .catch((err) => console.error(err));
    }
    else {
      setShowF('block')
    }
   
  }
  return (
    <div className="card">
      <p style={{ color: 'white' }}>{name}</p>
      <p style={{ color: 'yellow' }}>{price}₪</p>
      <form onSubmit={orderHandler}>
        <input style={{ height: '30%', width: '20%', margin: 'auto' }} type="number" name="amount" required value={editAmount} onChange={(ev: any) => setAmount(ev.target.value)} />
        <Button type="submit" variant="contained" sx={{ mt: 2, mb: 2 }} style={{ backgroundColor: 'rgb(47, 143, 90)' }} size="medium">order</Button>
      </form>
      <Box sx={{ display: show }}>
        <Alert severity="success" >item added successfully — check it out!</Alert>
      </Box>
      <Box sx={{ display: showF }}>
        <Alert severity="error" >product out of stock!</Alert>
      </Box>
    </div>
  )
}

export default ScrewCard;