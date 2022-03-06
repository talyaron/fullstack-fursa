import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getProductAsync, selectProduct } from "./productSlice";

export default function Product(){
    const dispatch = useAppDispatch();
    const product = useAppSelector(selectProduct);

    function handleClick(){
        dispatch(getProductAsync());
    }

    
    return(
        <div className='product'>
            <h1>{product.title}</h1>
            <h3>{product.description}</h3>
            <img src={product.image} alt="" />
            <button onClick={handleClick}>product</button>
        </div>
    )
}