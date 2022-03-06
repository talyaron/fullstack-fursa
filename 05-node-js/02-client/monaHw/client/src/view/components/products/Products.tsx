import './Products.scss'
import Button from '@mui/material/Button';
import axios from 'axios'
import { useState, useEffect } from 'react';
import { getCartAsync, selectorders } from '../../../features/cart/cartSlice';
import { update } from '../../../features/cart/cartSlice';
import { useAppDispatch } from '../../../app/hooks';
import Cart from '../../pages/cart/Cart'
import { margin } from '@mui/system';
export interface productProp {
    woodName: string;
    woodlength: number;
    // width:number;
    // thick:number;
    amount: number;
    price: number;
    color?: string;
    width?: number;
    thick?: number;
    doorType?: string;
    _id: number;

}



function Product(prop: productProp) {
    const [order, setOrder] = useState([]);
    // useEffect(()  => {
    //    axios.get('http://localhost:3004/userOrder').then(({data})=> setOrder(data));
    //     }, []);
    const { woodName, woodlength, amount, color, _id, price, width, thick, doorType } = prop;
    const [editAmount, setAmount] = useState(amount);
    const [editPrice, setPrice] = useState(price*amount);

    const dispatch = useAppDispatch();
    async function RemoveHandler(id: any) {
        //  const obj={"productId":id}
        const { data } = await axios.post('/delete-order', { id: id })
        dispatch(getCartAsync())
        // .then((res) => console.log(res))
        // .catch((err) => console.error(err));
        // axios.delete(`http://localhost:3004/userOrder/${id}`).then(({data})=>dispatch(getCartAsync()));
    }
    
        async function handleChange (event: React.ChangeEvent<HTMLInputElement>){
            const temp=parseInt(event.target.value);
             setAmount(parseInt(event.target.value));
             setPrice( parseInt(event.target.value)* price)
            const {data} = await axios.patch('/update-order',{_id,temp});
            console.log(data)
          };
    
    return (
        <div className="cartProducts">
            <div className="item details">
                <p>{woodName}</p>
                <p> <span>product Name: </span>{woodName} ,<span>Length: </span>{woodlength},{width},{thick},{doorType} ,{color}</p> </div>
            <input style={{height:'30%',width:'20%' ,margin:'auto'}}  type="number" name="amount" required value={editAmount} onChange={handleChange} />
           
            {/* <div className="item">{amount} </div> */}
            <div className="item">{price}₪</div>
            <div className="item"  >{editPrice}₪</div>

            <Button onClick={() => RemoveHandler(_id)} type="submit" variant="contained" style={{ backgroundColor: 'rgb(248, 140, 38) ' }} size="small">
                remove
            </Button>


        </div>
    );
}

export default Product;