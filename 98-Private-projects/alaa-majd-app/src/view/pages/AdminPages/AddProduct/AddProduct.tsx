import './AddProduct.scss';
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Header from '../../../components/header/header';







const AddProduct = () => {
    const [id, setId] = useState(0);
    const [name, nameId] = useState(0);
    const [price, setprice] = useState(0);
    const [catagory, setcatagory] = useState(0);
    const [amount, setamount] = useState(0);
    const [quantity, setquantity] = useState(0);
    const [description, setdescription] = useState(0);
    const [Url, setUrl] = useState(0);

    function handleSubmit(e: any) {
        e.preventDefault();

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
                    <form className='form' onSubmit={handleSubmit}>
                        <h1> Add new Product </h1>
                        <br /><br />
                        <input type="text" placeholder='Product Id' />

                        <br /><br />
                        <input type="text" placeholder='Product Name' />

                        <br /><br />
                        <input type="text" placeholder='Product Price' />

                        <br /><br />
                      
                        <input list="browsers" name="browser"  placeholder='Product Catagory'  />
                        <datalist id="browsers">
                            <option value="fruits vegetables"/>
                                <option value="Meat and fish"/>
                                    <option value="Organic and healthy"/>
                                        <option value="Drinks"/>
                                            <option value="Frozen"/>
                                            <option value="fresh bread"/>
                                            <option value="Snak and Sweets"/>
                                            </datalist>
                                            <br /><br />
                                            <input type="text" placeholder='Product amount' />

                                            <br /><br />
                                            <input type="text" placeholder='Product quantity' />

                                            <br /><br />
                                            <input type="text" placeholder='Product description' />

                                            <br /><br />
                                            <input type="text" placeholder='Product Url' />

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