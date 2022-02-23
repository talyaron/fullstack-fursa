import React from 'react'
import { useParams } from 'react-router-dom';
import './product.scss';


const products = [{ id: 1, name: 'Vitamin D',text:"Vitamin D helps regulate the amount of calcium and phosphate in the body. These nutrients are needed to keep bones, teeth and muscles healthy. A lack of vitamin D can lead to bone deformities such as rickets in children, and bone pain caused by a condition called osteomalacia in adults", img: 'https://img.mako.co.il/2016/03/14/shutterstock_59410978_i.jpg' }, 
 { id: 2, name: 'Chlorella',text:"Chlorella as a supplement improves cholesterol levels and rides the body of toxins.", img: 'https://eatwell.co.il/wp-content/uploads/2017/12/Chlorella-eatwell-123.jpg' },
 { id: 3, name: 'Omega3',text:"Omega3 fatty acids are incredibly important.They have many powerful health benefits for your body and brain.", img: 'https://www.vitaplus.co.il/wp-content/uploads/2020/02/%D7%90%D7%95%D7%9E%D7%92%D7%94-3.jpg' }
];

const Product = () => {
    const {productId} = useParams();

    function getProductImg(name: string | undefined, products: Array<any>): string {
        const product = products.find(product => product.name == name)
        if (product) {
            return product.img
        } else {
            return ''
        }
    }
    function getProductText(name: string | undefined, products: Array<any>): string {
        const product = products.find(product => product.name == name)
        if (product) {
            return product.text
        } else {
            return ''
        }
    }

    return (
        <div className='product'>
            <h1>Product Name: {productId} </h1>
            <img src={getProductImg(productId, products)}></img>
            <p>{getProductText(productId, products)}</p>

        </div>
    )
}


export default Product;