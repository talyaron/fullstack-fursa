import { useParams } from 'react-router-dom';
import './product.scss';

export interface ProductProps {
    products: Array<ProductInt>
}
export interface ProductInt{
    id: number;
    name: string;
    img: string;
    text: string;
}

const Product = (props: ProductProps) => {
    const { productId } = useParams();
    const {products}=props

    function getProduct(name:string|undefined){
        const producResult:ProductInt|undefined = products.find((product:ProductInt) => product.name === name)
        if(producResult)
            return producResult;
        return {id:0,name:"",img:"",text:""};
    }

    return (
        <div className='product'>
            <h1>Product Name: {productId} </h1>
            <img src={getProduct(productId).img}></img>
            <p>{getProduct(productId).text}</p>
           
        </div>
    )
}

export default Product;