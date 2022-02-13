import React from 'react'
import './store.scss';
import { Link } from 'react-router-dom';
import ProductCard from './productCard'
import { ProductProps } from './productCard';
import { Outlet } from 'react-router-dom'

const products = [{ id: 1, name: 'bag', img: 'https://cdn.shopify.com/s/files/1/2651/2090/products/mockup-67b61a87_720x.jpg?v=1575698808' }, { id: 2, name: 'T-shirt', img: 'https://ae01.alicdn.com/kf/H984e9e8e65e64d0dbc69ced0bd0a7b18K/NodeJS-JavaScript-T-tees.jpg' }, { id: 3, name: 'jeans', img: 'https://assets.ajio.com/medias/sys_master/root/h09/hcd/12085139111966/-1117Wx1400H-440794191-mediumblue-MODEL.jpg' }];
interface cartprop {
    cartItems: any;
    setcartItems: any;
}

function Store(prop: cartprop) {
    return (
        <div className="store">
            <h1>Welcome To Store</h1>
            <Link to="/Cart"> To Cart</Link>
            <div className="store__product">
                {products.map((product: ProductProps, i) => {
                    return <ProductCard key={i} name={product.name} id={product.id} img={product.img} />
                })}
            </div>

        </div >
    )
}

export default Store;