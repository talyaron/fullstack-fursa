import React from 'react'
import { useParams } from 'react-router-dom';

const products = [{ id: 1, name: 'bag', img: 'https://cdn.shopify.com/s/files/1/2651/2090/products/mockup-67b61a87_720x.jpg?v=1575698808' }, { id: 2, name: 'T-shirt', img: 'https://ae01.alicdn.com/kf/H984e9e8e65e64d0dbc69ced0bd0a7b18K/NodeJS-JavaScript-T-tees.jpg' }, { id: 3, name: 'jeans', img: 'https://assets.ajio.com/medias/sys_master/root/h09/hcd/12085139111966/-1117Wx1400H-440794191-mediumblue-MODEL.jpg' }];
const Product = () => {
    const { productId } = useParams();

    function getProductName(id: string | undefined, products: Array<any>): string {
        const product = products.find(product => product.id == id)
        if (product) {
            return product.name
        } else {
            return ''
        }
    }
    function getProductImg(id: string | undefined, products: Array<any>): string {
        const product = products.find(product => product.id == id)
        if (product) {
            return product.img
        } else {
            return ''
        }
    }

    return (
        <div>
            <h1>Name: {getProductName(productId, products)} </h1>
            <p> Product {productId}</p>
            <img src={getProductImg(productId, products)}></img>

        </div>
    )
}

export default Product