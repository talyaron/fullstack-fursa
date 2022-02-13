import Product2 from './Product2';
import { productProp } from "../store/Store";
import { useLocation } from 'react-router-dom';

interface listProp{
    productsList:any;
    setList:any;
}

export default function Cart(prop:any){
    //const {productsList, setList} = prop;
    //console.log(productsList);
    // console.log(productsList);
    const location = useLocation();
    console.log(location.state);
    //const {query} = useLocation();

    return(
        <div></div>
        // <div className='cart'>
        //     {productsList.map((item:productProp, index:number) =>
        //         {return <Product2 key={index} name={item.name} price={item.price} productsList={productsList} setList={setList}/>}
        //     )}
        // </div>
    );
}