import '../card/Card.scss'
import { useState } from "react";
// import Cart from './view/pages/cart/Cart';


interface product {
  id:number;
  name: string;
  price: number;
  quantity: number;
  description: string;
  Url: string;
  productsCart:any;
  setproductsCart:any;
  }





function Card(prop: product) {

  const [counter, setCounter] = useState(0); // useState(initial value);

  function handleAddCounter() {
    let tempCounter = counter;
    tempCounter++;
    if(tempCounter==1)
      prop.setproductsCart.push(prop);
    if(tempCounter>=7)
      tempCounter=7;
    setCounter(tempCounter);
  }
  function handleRemveCounter() {
    let tempCounter = counter;
    tempCounter--;
    if(tempCounter<0){
        tempCounter=0;
      }
      setCounter(tempCounter);
  }

  const {id, name, price,quantity, description,  Url,productsCart,setproductsCart } = prop;
  const [color, setColor] = useState('red');
  
const [mytext, setmytext] = useState('hi , alaa wants to write me');
    function moveInput(e: any) {
        try {
            setmytext(e.target.value)
        } catch (error) {
            console.error(error)
        }
    }


  return (

      <div className="card"  style={{ backgroundColor: color }} >
     
        <img src={Url} alt="" />
        <h3>{name}</h3>
        <p>Price : {price}</p>
        <p><button onClick={handleRemveCounter}>-</button>  {counter} <button onClick={handleAddCounter}>+</button> </p>
        {/* <p>description : {description}</p> */}
        
        {/* <input onKeyUp={moveInput}></input> */}
            {/* <div>{mytext}</div> */}

      </div>
  );
}

export default Card;
