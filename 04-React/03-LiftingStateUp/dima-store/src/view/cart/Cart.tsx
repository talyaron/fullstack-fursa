import Product2 from './Product2';
import { productProp } from "../store/Store";
import { useLocation } from 'react-router-dom';

interface listProp{
    productsList:any;
    setList:any;
}

export default function Cart(prop:listProp){
    const {productsList, setList} = prop;

    return(
        <div className='cart'>
            {productsList.map((item:productProp, index:number) =>
                {return <Product2 key={index} name={item.name} price={item.price} productsList={productsList} setList={setList}/>}
            )}
        </div>
    );
}