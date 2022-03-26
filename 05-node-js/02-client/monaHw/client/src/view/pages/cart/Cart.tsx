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
import { Backdrop } from '@mui/material';
import ChekOutOrder from '../checkOutOrder/CheckOutOrder';
import { getUser } from '../../../features/user/userReducer';

// interface cartProps {
//     product: any;
//     setProduct: any;
// }

function Cart(){
    // const { product, setProduct } = props;
    //console.log(product)
    //const [order,setOrder]=useState([]);

    // useEffect(()  => {
    // axios.get('http://localhost:3004/userOrder').then(({data})=> setOrder(data));
    // }, []);
    const user=useAppSelector(getUser)

    const [open, setOpen] = useState(false);
    const handleClose = () => {
      setOpen(false);
    };
    const handleToggle = () => {
      setOpen(!open);
    };
    const dispatch = useAppDispatch();
    useEffect(()=>{
        dispatch(getCartAsync())

    },[])
    // useEffect(() => {
    //     axios.get('http://localhost:3004/userOrder').then(({ data }) => dispatch(update(data)));
    // }, []);
    const orders = useAppSelector(selectorders);

    return (


        <div className="cart">

            <header className="cart_header">
                <img className="cart_header_logo" src="https://scontent.fhfa2-2.fna.fbcdn.net/v/t1.6435-9/191373428_5543723205668752_6758159996168278797_n.png?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Ye9yqhumfloAX9j7uvt&_nc_ht=scontent.fhfa2-2.fna&oh=00_AT-zBFq4ugSSvtQCdFkGcWIcgyV86E_gH8OVLGhZzFZLFQ&oe=625C6720" alt="" />
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
                    {/* <Outlet /> */}
                </div>
             
                {orders.status!=='loading' ?
                orders.orders.map((products: any, i: any) => {

                    return <Product key={products._id} woodName={products.woodName} woodlength={products.woodlength}  amount={products.amount} price={products.price} _id={products._id} color={products.color} width={products.width} thick={products.thick} doorType={products.doorType}/>
                }):  <div><CircularProgress color="secondary" />
                </div>}

                <Button variant="contained"   onClick={handleToggle} style={{ backgroundColor: 'rgb(47, 143, 90)' ,display:'flex',justifyContent:'center',alignItems:'center'}} size="medium">
                    {/* <Link to="/cart/checkOutOrder"> order </Link> */}order
                </Button>
                <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        // onClick={handleClose}
      >
        {/* <CircularProgress color="inherit" /> */}
        <button onClick={handleClose}>close</button>

        <ChekOutOrder></ChekOutOrder>
      </Backdrop>



            </div>
        </div>
    );


}

export default Cart 