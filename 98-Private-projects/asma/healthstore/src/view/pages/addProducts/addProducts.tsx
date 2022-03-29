import { Button, TextField } from '@material-ui/core';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ProductRow from './productRow';
import Box from '@material-ui/core/Box';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import './addProducts.scss'

function AddProducts() {

    const [product, setProduct] = useState({ name: "", text: "", category: "", img: "" });
    const [products, setProducts] = useState([]);
    const [treatment, setTreatment] = useState({ name: "", text: "", category: "", img: "" });
    const [treatments, setTreatments] = useState([]);
    const [category, setCategory] = useState({ name: "", text: "", category: "", img: "" });
    const [categories, setCategories] = useState([]);

    const [productImage, setImage] = useState('');
    const [treatmentImage, setTreatmentImage] = useState('');
    const [categoryImage, setCategoryImage] = useState('');

    const [value, setValue] = useState('1');

    const handleChange = (event: any, newValue: string) => {
        console.log(newValue)
        setValue(newValue);
    };

    function handleAddProductImg(e: any) {
        setProduct({ ...product, img: e.target.files[0].name })
        setImage(e.target.files[0])
    }
    function handleAddTreatmentImg(e: any) {
        setTreatment({ ...treatment, img: e.target.files[0].name })
        setTreatmentImage(e.target.files[0])
    }
    function handleAddCategoryImg(e: any) {
        setCategory({ ...category, img: e.target.files[0].name })
        setCategoryImage(e.target.files[0])
    }

    function handleAddProduct() {
        console.log(product)
        if (!product.name || !product.text || !product.img || !product.category) {
            alert("missing info");
        }
        else {
            const formData = new FormData();
            formData.append('image', productImage);
            formData.append('name', product.name);
            formData.append('text', product.text);
            formData.append('category', product.category);
            const config = { headers: { 'content-type': 'multipart/form-data' } }
            axios.post('/upload', formData, config)
                .then(({ data }) => {
                    console.log(data)
                    axios.get("/products/get-products").then(({ data }) => {
                        console.log(data);
                        setProducts(data.products);
                    });
                })
                .catch(err => {
                    console.error(err)
                })
        }
    }
    function handleAddTreatment() {
        console.log(treatment)
        if (!treatment.name || !treatment.text || !treatment.img) {
            alert("missing info");
        }
        else {
            const formData = new FormData();
            formData.append('image', treatmentImage);
            formData.append('name', treatment.name);
            formData.append('text', treatment.text);
            const config = { headers: { 'content-type': 'multipart/form-data' } }
            axios.post('/upload-treatment', formData, config)
                .then(({ data }) => {
                    console.log(data)
                    axios.get("/treatments/get-treatments").then(({ data }) => {
                        console.log(data);
                        setTreatments(data.treatments);
                    });
                })
                .catch(err => {
                    console.error(err)
                })
        }
    }
    function handleAddCategory() {
        console.log(category)
        if (!category.name || !category.img) {
            alert("missing info");
        }
        else {
            const formData = new FormData();
            formData.append('image', categoryImage);
            formData.append('name', category.name);
            const config = { headers: { 'content-type': 'multipart/form-data' } }
            axios.post('/upload-category', formData, config)
                .then(({ data }) => {
                    console.log(data)
                    axios.get("/categorys/get-categories").then(({ data }) => {
                        console.log(data);
                        setCategories(data.categories);
                    });
                })
                .catch(err => {
                    console.error(err)
                })
        }
    }

    useEffect(() => {
        axios.get("/products/get-products").then(({ data }) => {
            console.log('get', data);
            setProducts(data.products);
        });
        axios.get("/treatments/get-treatments").then(({ data }) => {
            console.log('get', data);
            setTreatments(data.treatments);
        });
        axios.get("/categorys/get-categories").then(({ data }) => {
            console.log('get', data);
            setCategories(data.categories);
        });
    }, []);

    return (
        <div className="container">
            <TabContext value={value}>
                <Box sx={{ width: '100%' ,color:'black'}}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="Products" value="1" />
                        <Tab label="Treatments" value="2" />
                        <Tab label="Product-Categories" value="3" />
                    </TabList >
                </Box>
                <TabPanel value="1">
                    <h2>Products</h2>
                    <div >
                        {products.map((product: any, i) => {
                            return <ProductRow key={product._id} item={product} type="product" />;
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
                                onChange={(e) => handleAddProductImg(e)}
                            />
                            <Button color="secondary" variant="contained" component="span">Upload Image</Button>
                        </label>
                        <Button className="button" onClick={handleAddProduct} variant="contained" >Add Product</Button>
                    </div>
                </TabPanel>
                <TabPanel value="2">
                    <h2>Treatments</h2>
                    <div >
                        {treatments.map((treatment: any, i) => {
                            return <ProductRow key={treatment._id} item={treatment} type="treatment" />;
                        })}
                    </div>
                    <div className="addTreatment">
                        <TextField required className="inputs" id="standard-basic" label="Add Name" variant="standard" value={treatment.name} onChange={(e) => setTreatment({ ...treatment, name: e.target.value })} />
                        <TextField required className="inputs" id="standard-basic" label="Add Text" variant="standard" value={treatment.text} onChange={(e) => setTreatment({ ...treatment, text: e.target.value })} />
                        <label htmlFor="upload">
                            <input
                                style={{ display: 'none' }}
                                id="upload"
                                name="upload"
                                type="file"
                                onChange={(e) => handleAddTreatmentImg(e)}
                            />
                            <Button color="secondary" variant="contained" component="span">Upload Image</Button>
                        </label>
                        <Button className="button" onClick={handleAddTreatment} variant="contained" >Add Treatment</Button>
                    </div>
                </TabPanel>
                <TabPanel value="3">
                <h2>Products Categories</h2>
                    <div >
                        {categories.map((category: any, i) => {
                            return <ProductRow key={category._id} item={category} type="category" />;
                        })}
                    </div>
                    <div className="addTreatment">
                        <TextField required className="inputs" id="standard-basic" label="Add Category" variant="standard" value={category.name} onChange={(e) => setCategory({ ...category, name: e.target.value })} />
                        <label htmlFor="upload">
                            <input
                                style={{ display: 'none' }}
                                id="upload"
                                name="upload"
                                type="file"
                                onChange={(e) => handleAddCategoryImg(e)}
                            />
                            <Button color="secondary" variant="contained" component="span">Upload Image</Button>
                        </label>
                        <Button className="button" onClick={handleAddCategory} variant="contained" >Add Category</Button>
                    </div>
                </TabPanel>
            </TabContext>
        </div>
    )
}

export default AddProducts;