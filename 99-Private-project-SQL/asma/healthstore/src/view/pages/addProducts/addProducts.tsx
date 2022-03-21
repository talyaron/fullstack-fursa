import { Button, TextField } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import ProductRow from './productRow';
import './style.scss'

function AddProducts() {

    const [product, setProduct] = useState({ name: "", text: "",category:"" ,img: "" });
    const [products, setProducts] = useState([]);
    const [selectedImage, setImage] = useState('');
    
    function handleAddImg(e:any) {
        setProduct({...product, img:e.target.files[0].name})
        setImage(e.target.files[0])
    }

    function getProducts() {
        return new Promise((resolve, reject) => {
          axios
            .get("/get-products")
            .then(({ data }) => {
              if (data) {
                console.log(data);
                resolve(data.products);
              } else {
                reject("no data");
              }
            })
            .catch((err) => {
              reject(err);
            });
        });
      }



    function handleAddProduct() {
        console.log(product)
        if (!product.name || !product.text || !product.img) {
            alert("missing info");
        }
        else {
            const formData =new FormData();
            formData.append('image', selectedImage );
            formData.append('name', product.name );
            formData.append('text', product.text );
            formData.append('category', product.category );
            const config = { headers: { 'content-type': 'multipart/form-data' } }
            axios.post('/add-new-product',formData,config)
                .then(({ data }) => {
                    console.log("add",data)
                    getProducts().then((data:any)=>{
                        console.log("get",data)
                        setProducts(data)
                      })
                })
                .catch(err => {
                    console.error(err)
                })
        }
    }


    useEffect(() => {
        axios.get("/get-products").then(({ data }) => {
            console.log(data);
            setProducts(data.products);
        });
    }, []);


    return (
        <div>
            <div className="container">
                <h2>Products</h2>
                <div >
                    {products.map((product: any, i) => {
                        return <ProductRow key={product.id} product={product} type="product" />;
                    })}
                </div>
                <div className="addProduct" >
                    <TextField required className="inputs" id="standard-basic" label="Add Name" variant="standard" value={product.name} onChange={(e) => setProduct({ ...product, name: e.target.value })} />
                    <TextField required className="inputs" id="standard-basic" label="Add Text" variant="standard" value={product.text} onChange={(e) => setProduct({ ...product, text: e.target.value })} />
                    <TextField required className="inputs" id="standard-basic" label="Add Category" variant="standard" value={product.category} onChange={(e) => setProduct({ ...product, category: e.target.value })} />

                    <label htmlFor="upload-photo">
                        <input
                            style={{ display: 'none' }}
                            id="upload-photo"
                            name="upload-photo"
                            type="file"
                            onChange={(e) => handleAddImg(e) }
                        />
                        <Button color="secondary" variant="contained" component="span">Upload Image</Button>
                    </label>
                    <Button className="button" onClick={handleAddProduct} variant="contained" >Add Product</Button>

                </div>
            </div>
        </div>
    )
}

export default AddProducts;