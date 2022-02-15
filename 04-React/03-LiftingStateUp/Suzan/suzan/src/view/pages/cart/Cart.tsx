import {Link} from 'react-router-dom';

//style
import './Cart.scss';

//components
import Item from "../../components/item/Item";

interface CartProp {
    cart: any;
    setCart: any;
}

function Cart(prop:CartProp) {
    const {cart, setCart} = prop
    return(
        <div className="cart">
            <h1>Cart</h1>
            <div className="store__items">
                {
                    cart.map((item: string, index: React.Key | null | undefined)=>{
                        return <Item key={index} name={item} cart={cart} setCart={setCart}></Item>
                    })
                }
            </div>
            <Link to='/'><button className='cartButton'>back to store</button></Link>
        </div>
    );
}

export default Cart;