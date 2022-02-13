import './Product2.scss';
import { productProp } from "../store/Store";

export default function Product(prop: productProp) {
    const { name, price , productsList, setList } = prop;

    function handleClick(){
        let newArr = Object.assign([], productsList);
        setList(newArr.filter((product : any) =>{
            if(product.name != name) {
                return product;
            }
        }))
    }

    return (
        <div className='Item'>
            <p><span>Item name : </span> {name}</p>
            <p><span>Item price : </span> {price}</p>
            <button onClick={handleClick}>Remove</button>
        </div>
    )
}