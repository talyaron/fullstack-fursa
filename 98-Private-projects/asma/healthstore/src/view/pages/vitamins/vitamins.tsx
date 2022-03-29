import './vitamins.scss';
import ProductCard from './productCard'
import { ProductProps } from './productCard';
import { Outlet, useParams } from 'react-router-dom'
import axios from 'axios';
import { useEffect, useState } from 'react';


function Vitamins(){
    const {productCategory} = useParams();
    const [products, setProducts] = useState([]);

    
    useEffect(() => {
        console.log('productCategory',productCategory?.toLowerCase());
        axios.post("/products/get-productsByCategory",{category:productCategory?.toLowerCase()}).then(({ data }) => {
            console.log('get',data);
            setProducts(data.products);
        });
    }, [productCategory]);


    return(
        <div>
            <div className="vitamins">
                <h1>{productCategory}</h1>
                <div className="vitamins__product">
                    {products.map((product: ProductProps, i) => {
                        return <ProductCard key={i} name={product.name} id={product.id} img={product.img} text={product.text} />
                    })}
                </div>
                <Outlet></Outlet>
            </div >
        </div>
    )
}

export default Vitamins;