import { Link, useNavigate } from "react-router-dom";
import Cart from "../cart/Cart";
import './Product.scss';
import { productProp } from "./Store";

export default function Product(prop: productProp) {
    const { name, price , productsList, setList } = prop;
    
    function handleClick(){
        const newArr = [...productsList, {name,price}];
        setList(newArr);
    }

    return (
        <div className='Item'>
            <p><span>Item name : </span> {name}</p>
            <p><span>Item price : </span> {price}</p>
            {/* <Link to={{ pathname: '/Cart', state: "Hiiiiiiii" }}> */}
            <button onClick={handleClick}>Add</button>
            {/* </Link> */}
        </div>
    )
}