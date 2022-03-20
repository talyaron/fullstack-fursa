import './AddProduct.scss';
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Header from '../../../components/header/header';
import axios from 'axios';
import {useNavigate } from 'react-router-dom'



interface product {
    id: string;
    name: string;
    price: string;
    catagory: string;
    amount:string;
    quantity: number;
    description: string;
    Url: string;

}



const AddProduct = () => {
    const nav=useNavigate();
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [catagory, setCatagory] = useState("");
    const [amount, setAmount] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [description, setDescription] = useState("");
    const [Url, setUrl] = useState("");

    function handleSubmit(e: any) {
        e.preventDefault();
        const products:product = {"id":id ,"name":name,"price":price,"catagory":catagory,"amount":amount,"quantity":quantity,"description":description,"Url":Url}
        console.log(products);
        axios.post(`http://localhost:3004/products1`, products)
        .then(res => {
          console.log(res);
          console.log(res.data);
        })

        alert("Added product to the store")
        nav("/Seller");
    } 


    return (
        <div>
            <a href=""></a>
            <header>

                <div className="header-right">
                    <a href="#contact">Requests</a>
                    <a href="#about">Profile</a>
                    <Link to="/settings">Settings</Link>
                    <Link to="/logIn">LogOut</Link>
                    <Link to="/help">help</Link>
                    <Link to="/aboutUsIn">About Us</Link>
                </div></header>
            <br /><br />
            <div className='warpper'>

                <div>
                    <form className='form' onSubmit={handleSubmit} >
                        <h1> Add new Product </h1>
                        <br /><br />
                        <input type="text" placeholder='Product Id' onKeyUp={(e:any)=> setId(e.target.value) } />

                        <br /><br />
                        <input type="text" placeholder='Product Name' onKeyUp={(e:any)=> setName(e.target.value) } />

                        <br /><br />
                        <input type="text" placeholder='Product Price' onKeyUp={(e:any)=> setPrice(e.target.value) } />

                        <br /><br />

                        <input list="browsers" name="browser" placeholder='Product Catagory' onKeyUp={(e:any)=> setCatagory(e.target.value) } />
                        <datalist id="browsers">
                            <option value="fruits vegetables" />
                            <option value="Meat and fish" />
                            <option value="Organic and healthy" />
                            <option value="Drinks" />
                            <option value="Frozen" />
                            <option value="fresh bread" />
                            <option value="Snak and Sweets" />
                        </datalist>
                        <br /><br />
                        <input type="text" placeholder='Product amount' onKeyUp={(e:any)=> setAmount(e.target.value) } />

                        {/* <br /><br />
                        <input type="text" placeholder='Product quantity' /> */}

                        <br /><br />
                        <input type="text" placeholder='Product description' onKeyUp={(e:any)=> setDescription(e.target.value) } />

                        <br /><br />
                        <input type="text" placeholder='Product Url'  onKeyUp={(e:any)=> setUrl(e.target.value) }/>

                        <br /><br />
                        <button type="submit" className='btn' >submit</button>
                    </form>
                    <br />
                    <Link to="/Seller">cancle</Link>

                </div>
            </div>
        </div>
    )
}


export default AddProduct;