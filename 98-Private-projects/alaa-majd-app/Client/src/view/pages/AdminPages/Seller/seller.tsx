import './Seller.scss';
import { Link } from "react-router-dom";
import Header from '../../../components/header/header';
import './Seller.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
//components
import AdminCard from '../../../components/AdminCard/AdminCard';
import { useAppSelector } from '../../../../app/hooks';

import Bar from '../../../components/productBar/bar';
import { Console } from 'console';

interface product {
    id: number;
    name: string;
    price: number;
    catagory: string;
    amount: string;
    quantity: number;
    description: string;
    Url: string;

}


const Seller = () => {

    const admin = useAppSelector(state => state.user)

    useEffect(() => {
        axios.get('http://localhost:3004/products1').then(({ data }) => {
            console.log(data);
            setProducts(data);
            setProductByCatagory(data);
        })
    }, []);

    const [catagory, setCatagory] = useState("")
    const [products, setProducts] = useState([])
    const [productByCatagory, setProductByCatagory] = useState(products)


    function handleClickFunc(){
        axios.post("/product/addProduct",{id:123,name:"apple",price:100,quantity:10,description:"sssss",Url:"1111111"});
    }
    useEffect(() => {

        function handleClick() {
            // ev.preventDefault();
            console.log(catagory)
            const arr = products.filter((element: any) => {
                if (element.catagory === catagory) {
                    return element;
                }
            })
            setProductByCatagory([...arr]);
            if (catagory === "All" || catagory === "") {
                setProductByCatagory([...products]);
            }
            console.log(arr)

        }
        handleClick();
    }, [catagory])

    return (
        <div className="App">
            <div className="header">
                <div className="header-right">
                    <Link to="/AdminProfile">Profile</Link>
                    <a href="#contact">Requests</a>

                    <Link to="/logIn">LogOut</Link>
                    <Link to="/HelpAdmin">help</Link>
                    <Link to="/aboutUsAdmin">About Us</Link>
                </div>
            </div>
            {/* <Bar></Bar> */}
            <div className="navbar">
                <a href="#All" onClick={(ev: any) => { setCatagory("All") }} >All Product</a>
                <a href="#fruits" onClick={(ev: any) => { setCatagory("fruits vegetables") }}>fruits vegetables</a>
                <a href="#Meat" onClick={(ev: any) => { setCatagory("Meat and fish") }}>Meat and fish</a>
                <a href="#Organic" onClick={(ev: any) => { setCatagory("Organic and healthy") }}>Organic and healthy</a>
                <a href="#Drinks" onClick={(ev: any) => { setCatagory("Drinks") }}>Drinks</a>
                <div className="dropdown">
                    <button className="dropbtn">More
                        <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content">
                        <a href="#" onClick={(ev: any) => { setCatagory("Frozen") }} >Frozen</a>
                        <a href="#" onClick={(ev: any) => { setCatagory("fresh bread") }}>fresh bread</a>
                        <a href="#" onClick={(ev: any) => { setCatagory("Snaks and Sweets") }}>Snaks and Sweets</a>
                    </div>
                </div>

                <div className="search_product">
                    <Link to="/AddProduct">Add Product</Link>
                    <button onClick={handleClickFunc} >add Product From mongo</button>
                    <input className="searchDiv__bar__content__a__input" type="text" placeholder=" Search a product" name="search" />
                </div>
            </div>
            <div className="wrapper">
                {productByCatagory.map((product, i) => {
                    const { id, name, price, catagory, amount, quantity, description, Url } = product;
                    return <AdminCard key={i} id={id} name={name} price={price} catagory={catagory} quantity={quantity} amount={amount} description={description} Url={Url} />
                })}

            </div>
        </div>

    )
}


export default Seller;