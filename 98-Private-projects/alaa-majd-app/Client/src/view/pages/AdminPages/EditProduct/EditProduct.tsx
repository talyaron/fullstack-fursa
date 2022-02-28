import './EditProduct.scss';
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



const EditProduct = () => {
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
        axios.patch(`http://localhost:3004/products1/${id}`,{ id:id, name:name , price:price, catagory:catagory , amount:amount ,quantity:quantity , description:description , Url:Url }).then(({data})=>console.log(data));

        alert("the product edit successfully")
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
                        <h1> Edit Product {name}</h1>
                        <br /><br />
                        <input type="text" value={id} onChange={(e:any)=> setId(e.target.value) } />

                        <br /><br />
                        <input type="text" value={name} onChange={(e:any)=> setName(e.target.value) } />

                        <br /><br />
                        <input type="text" value={price} onChange={(e:any)=> setPrice(e.target.value) } />

                        <br /><br />

                        <input list="browsers" name="browser" value={catagory} onChange={(e:any)=> setCatagory(e.target.value) } />
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
                        <input type="text" value={amount} onChange={(e:any)=> setAmount(e.target.value) } />

                   

                        <br /><br />
                        <input type="text" value={description} onChange={(e:any)=> setDescription(e.target.value) } />

                        <br /><br />
                        <input type="text" value={Url}  onChange={(e:any)=> setUrl(e.target.value) }/>

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


export default EditProduct;