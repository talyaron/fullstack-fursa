import { useAppDispatch } from "../../app/hooks";
import { useAppSelector } from '../../app/hooks';
import { getProductsAsync } from "./picSlice";

//import {update, getJokeAsync} from './textSlice'; 
//import {update} from './picSlice'; 
import './PicturesShow.css'
//import {updateText,selectText} from './picSlice'; 
import { selectProducts } from './picSlice';

export default function PicturesShow() {
  const dispatch = useAppDispatch();
  //const text = useAppSelector(selectText);
  const products = useAppSelector(selectProducts);

  function handleClick(ev: any) {
    /* const pic = ev.target.src;
     dispatch(update(pic));*/
    dispatch(getProductsAsync());
    console.log(products);
  }
  return (
    <div className="pictures">
      <div><button  onClick={handleClick} >Click to get products!!</button></div>
      {/* <div><img src="https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg" onClick={handleClick} /></div> */}

      {/* <div><img src="https://media.istockphoto.com/photos/picturesque-morning-in-plitvice-national-park-colorful-spring-scene-picture-id1093110112?k=20&m=1093110112&s=612x612&w=0&h=3OhKOpvzOSJgwThQmGhshfOnZTvMExZX2R91jNNStBY=" onClick={handleClick} /> </div> */}

      {products.map((product, index) => {

        return <div key={index}>
          {product.price}
          <img src={product.image}/>
        </div>
      })}

    </div>
  );
}