import './Products.scss'
import Button from '@mui/material/Button';
import axios from 'axios'
import { useState, useEffect } from 'react';
import { getCartAsync, selectorders } from '../../../features/cart/cartSlice';
import { update } from '../../../features/cart/cartSlice';
import { useAppDispatch } from '../../../app/hooks';
import Cart from '../../pages/cart/Cart'
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
    
        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            setAmount(parseInt(event.target.value));
            setPrice(editAmount * price)
          };
    
    return (
        <div className="cartProducts">
            <div className="item details">
                <p>{woodName}</p>
                <p> <span>product Name: </span>{woodName} ,<span>Length: </span>{woodlength},{width},{thick},{doorType} ,{color}</p> </div>
            <input  type="number" name="amount" required value={editAmount} onChange={handleChange} />

            {/* <div className="item">{amount} </div> */}
            <div className="item">{price}???</div>
            <div className="item" >{editPrice}???</div>

            <Button onClick={() => RemoveHandler(_id)} type="submit" variant="contained" style={{ backgroundColor: 'rgb(248, 140, 38) ' }} size="small">
                remove
            </Button>


        </div>
    );
}

export default Product;