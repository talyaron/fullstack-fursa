import { Button, TextField } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import ProductRow from './productRow';
import './style.scss'

function AddProducts() {

    // const info = { name: "asma", text: "123", img: "image" }
    const [product, setProduct] = useState({ name: "", text: "", img: "image" });
    const [products, setProducts] = useState([]);
    const [treatment, setTreatment] = useState({ name: "", text: "", img: "image" });
    const [treatments, setTreatments] = useState([]);

    function handleAddProduct() {
        // ev.preventDefault();
        console.log(product)
        if (!product.name || !product.text || !product.img) {
            alert("missing info");
        }
        else {
            axios.post('/products/add-product', { product })
                .then(({ data }) => {

                    console.log(data)
                })
                .catch(err => {
                    console.error(err)
                })
        }
    }
    function handleAddTreatment() {
        // ev.preventDefault();
        console.log(treatment)
        if (!treatment.name || !treatment.text || !treatment.img) {
            alert("missing info");
        }
        else {
            axios.post('/treatments/add-treatment', { treatment })
                .then(({ data }) => {
                    console.log(data)
                })
                .catch(err => {
                    console.error(err)
                })
        }
    }


    useEffect(() => {
        axios.get("/products/get-products").then(({ data }) => {
            console.log(data);
            setProducts(data);
        });
        axios.get("/treatments/get-treatments").then(({ data }) => {
            console.log(data);
            setTreatments(data);
        });

    }, []);


    return (
        <div>
            <div className="container">
                <h2>Products</h2>
                <div >
                    {products.map((product: any, i) => {
                        return <ProductRow key={product._id} product={product} type="product" />;
                    })}
                </div>
                <div className="addProduct" >
                    <TextField required className="inputs" id="standard-basic" label="Add Name" variant="standard" value={product.name} onChange={(e) => setProduct({ ...product, name: e.target.value })} />
                    <TextField required className="inputs" id="standard-basic" label="Add Text" variant="standard" value={product.text} onChange={(e) => setProduct({ ...product, text: e.target.value })} />
                    <Button className="button" onClick={handleAddProduct} variant="contained" >Add Product</Button>
                </div>


                <h2>Treatments</h2>
                <div >
                    {treatments.map((treatment: any, i) => {
                        return <ProductRow key={treatment._id} product={treatment} type="treatment" />;
                    })}
                </div>
                <div className="addTreatment">
                    <TextField required className="inputs" id="standard-basic" label="Add Name" variant="standard" value={treatment.name} onChange={(e) => setTreatment({ ...treatment, name: e.target.value })} />
                    <TextField required className="inputs" id="standard-basic" label="Add Text" variant="standard" value={treatment.text} onChange={(e) => setTreatment({ ...treatment, text: e.target.value })} />
                    <Button className="button" onClick={handleAddTreatment} variant="contained" >Add Treatment</Button>
                </div>
            </div>
        </div>
    )
}

export default AddProducts;