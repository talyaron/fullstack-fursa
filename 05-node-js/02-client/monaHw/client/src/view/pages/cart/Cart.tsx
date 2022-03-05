import Product, { productProp } from '../../components/products/Products'
import { Link, useNavigate } from 'react-router-dom'
import './Cart.scss'
import Navbar from '../../components/navbar/Navbar';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Outlet } from 'react-router-dom'
import { selectorders } from '../../../features/cart/cartSlice';
import { update } from '../../../features/cart/cartSlice';
import { useAppSelector } from '../../../app/hooks';
import { useAppDispatch } from '../../../app/hooks';
import {getCartAsync,order} from '../../../features/cart/cartSlice';
import CircularProgress from '@mui/material/CircularProgress';
import { set } from 'immer/dist/internal';
import { display } from '@mui/system';

// interface cartProps {
//     product: any;
//     setProduct: any;
// }

function Cart(){
    // const { product, setProduct } = props;
    //console.log(product)
    //     const [order,setOrder]=useState([]);

    // useEffect(()  => {
    // axios.get('http://localhost:3004/userOrder').then(({data})=> setOrder(data));
    // }, []);
    const dispatch = useAppDispatch();
    useEffect(()=>{
        dispatch(getCartAsync())

    },[])
    // useEffect(() => {
    //     axios.get('http://localhost:3004/userOrder').then(({ data }) => dispatch(update(data)));
    // }, []);
    const orders = useAppSelector(selectorders);
//    useEffect(()=>{
//        orders.orders
//    },[]);

    return (


        <div className="cart">

            <header className="cart_header">
                <img className="cart_header_logo" src="https://scontent.fhfa2-2.fna.fbcdn.net/v/t1.6435-9/191373428_5543723205668752_6758159996168278797_n.png?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=vD2Ck1UqS_MAX-yTblw&_nc_ht=scontent.fhfa2-2.fna&oh=00_AT-kafBKJB3bLHogSgPEVUQQtAHgClIHTT0FGy07h8nZTA&oe=622CF120" alt="" />
                <Navbar></Navbar>
                <h1 >cart</h1>
                <div className="cart_header_cart">
                    <Link to='/cart'>
                        <img src="https://cdn4.iconfinder.com/data/icons/shopping-21/64/shopping-06-512.png" alt="" />
                    </Link>
                </div>
            </header>

            <div className="cart_body">

                <div className="cart_body_grid">
                    <div className="item">Product</div>
                    <div className="item">Quantity</div>
                    <div className="item">Item Price</div>
                    <div className="item">Total Price</div>

                </div>
                
                <div className="cart_body_done">
                    <Outlet />
                </div>
             
                {orders.status!=='loading' ?
                orders.orders.map((products: order, i: any) => {

                    return <Product key={products._id} woodName={products.woodName} woodlength={products.woodlength}  amount={products.amount} price={products.price} id={products.id} color={products.color} width={products.width} thick={products.thick} doorType={products.doorType}/>
                }):  <div><CircularProgress color="secondary" />
                </div>}

                <Button variant="contained"  style={{ backgroundColor: 'rgb(47, 143, 90)'}} size="medium">
                    <Link to="/cart/checkOutOrder"> order </Link>
                </Button>



            </div>
        </div>
    );


}

export default Cart 