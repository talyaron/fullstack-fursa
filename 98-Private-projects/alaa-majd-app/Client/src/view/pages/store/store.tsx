import './store.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
//components
import Card from '../../components/card/Card';
import Cart from '../../components/Cart/Cart';

import Bar from '../../components/productBar/bar';
import Header from '../../components/header/header';
import { Console } from 'console';
import { useAppSelector } from '../../../app/hooks';
import { Link } from "react-router-dom";



interface product {
  id: number;
  name: string;
  price: number;
  catagory: string;
  quantity: number;
  description: string;
  Url: string;

}

function Store() {

  const user = useAppSelector(state=> state.user)
  // user.email example
  useEffect(() => {
    console.log(user.ID)
    axios.get('http://localhost:3004/products1').then(({ data }) => {
      console.log(data);
      setProducts(data);
      setProductByCatagory(data);
    })
  }, []);


  // const products:any = axios.get('http://localhost:3004/products').then(({data})=>console.log(data));
  const [catagory, setCatagory] = useState("All")
  const [products, setProducts] = useState([])
  const [productByCatagory, setProductByCatagory] = useState(products)
  
  useEffect(()=>{
    function handleClick() {
      // ev.preventDefault();
      console.log(catagory)
      const arr = products.filter((element: any) => {
        if (element.catagory === catagory) {
          return element;
        }
      })
      setProductByCatagory([...arr]);
      if(catagory === "All"){
        setProductByCatagory([...products]);
      }

      console.log(arr)
  
    }
    handleClick();
  },[catagory])

  


  return (

    <div className="App">
      <header className='header'>     <div className="header">

<div className='header-left'>   <Link to="/Store">Store</Link>
</div>
<div className="header-right">
  <Link to="/Cart">To The Cart</Link>
  <a href="#contact">Requests</a>
  <a href="#about">Profile</a>
  <Link to="/settings">Settings</Link>
  <Link to="/logIn">LogOut</Link>
  <Link to="/help">help</Link>
  <Link to="/aboutUsIn">About Us</Link>
</div>
</div></header>

      {/* <Bar></Bar> */}

      <div className="navbar">
        <a href="#All" onClick={(ev: any) => { setCatagory("All") }} >All Product</a>
        <a href="#fruits" onClick={(ev: any) => { setCatagory("fruits vegetables") }}>fruits vegetables</a>
        <a href="#Meat" onClick={(ev: any) => { setCatagory("Meat and fish") }}>Meat and fish</a>
        <a href="#Organic"  onClick={(ev: any) => { setCatagory("Organic and healthy") }}>Organic and healthy</a>
        <a href="#Drinks"  onClick={(ev: any) => { setCatagory("Drinks") }}>Drinks</a>
        <div className="dropdown">
          <button className="dropbtn">More
            <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <a href="#"  onClick={(ev: any) => { setCatagory("Frozen") }} >Frozen</a>
            <a href="#"  onClick={(ev: any) => { setCatagory("fresh bread") }}>fresh bread</a>
            <a href="#"  onClick={(ev: any) => { setCatagory("Snak and Sweets") }}>Snaks and Sweets</a>
          </div>
        </div>
        <div className="search_product">
          <input className="searchDiv__bar__content__a__input" type="text" placeholder=" Search a product" name="search" />
        </div>
      </div>
      <div className="wrapper">
        {productByCatagory.map((product, i) => {
          const { id, name, price, catagory, quantity, description, Url } = product;
          return <Card key={i} id={id} name={name} price={price} catagory={catagory} quantity={quantity} description={description} Url={Url} />
        })}

        {/* <Cart arr={products}  /> */}
      </div>
    </div>
  );
}

export default Store;
