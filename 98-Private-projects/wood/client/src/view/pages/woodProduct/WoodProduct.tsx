import Navbar from '../../components/navbar/Navbar';
import {Link} from 'react-router-dom'
import {Outlet} from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios'
import './WoodProduct.scss'
import ProductCard,{ProductCardProp} from '../../components/productCard/ProductCard';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { getProduct, getProductAsync } from '../../../features/product/productReducer';
import { CircularProgress } from '@mui/material';

function WoodProduct(){
  const dispatch=useAppDispatch();
    const [products,setProduct]=useState([]);
    useEffect(()=>{
      // axios.get('http://localhost:3004/products').then(({data})=> setProduct(data));
      dispatch(getProductAsync())

    },[]);
    const productsArr=useAppSelector(getProduct)

    return(
        <div className="WoodUse">
          <header className="WoodUse_header">
            <img className="WoodUse_header_logo" src="https://scontent.fhfa2-2.fna.fbcdn.net/v/t1.6435-9/191373428_5543723205668752_6758159996168278797_n.png?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=vD2Ck1UqS_MAX-yTblw&_nc_ht=scontent.fhfa2-2.fna&oh=00_AT-kafBKJB3bLHogSgPEVUQQtAHgClIHTT0FGy07h8nZTA&oe=622CF120" alt="" />
            <Navbar></Navbar>
            <h1 >Wood Products</h1>
            <div className="WoodUse_header_cart">
            <Link to='/cart'>
              <img src="https://cdn4.iconfinder.com/data/icons/shopping-21/64/shopping-06-512.png" alt="" />
            </Link>
            </div>
          </header>
           <div className="WoodUse_body">
           {productsArr.status!=='loading'?productsArr.productArr.map((product, index)=>{
          const{name,imgurl}=product;
          return <ProductCard key={index} product={{name,imgurl}}/>
          
        }):<div><CircularProgress color="secondary" />
        </div>}        <Outlet />


           </div>    

        </div>
       
    );
}
export default WoodProduct;