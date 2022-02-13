import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import './Store.scss';
import Product from './Product';
import Cart from "../cart/Cart";
import { Route } from "react-router-dom";

export interface productProp {
    productsList?: any;
    setList?: any;
    name: string;
    price: number;
}

interface listProp {
    productsList: any;
    setList: any;
}

const store: Array<productProp> = [
    { name: "Milk", price: 10 },
    { name: "Kinder Surprise", price: 5 },
    { name: "Cheese", price: 20 },
    { name: "Yogurt", price: 25 },
    { name: "Coca-Cola", price: 7 }];

export default function Store(prop: listProp) {
    //const [productsList, setList] = useState([]);
    const { productsList, setList } = prop;
    //const nav = useNavigate();
    function handleCart() {
        //nav('/Cart',{state:{productsList:productsList, setList:setList, str:"aaa"}});
        <Link to={{pathname: "/Cart" , state : "aaaa"}} />

    }

    return (
        <div className='store'>
            {store.map((item, index) => { return <Product key={index} name={item.name} price={item.price} productsList={productsList} setList={setList} /> }
            )}
            <button onClick={handleCart}>Cart</button>
            {/* <button onClick={handleCart}>Cart</button> */}
        </div>

    );
}