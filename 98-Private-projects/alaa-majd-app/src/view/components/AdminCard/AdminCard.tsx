import '../card/Card.scss'
import { useState, useEffect } from "react";
// import Cart from './view/pages/cart/Cart';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import EditProduct from '../../pages/AdminPages/EditProduct/EditProduct'
import { useAppDispatch } from '../../../app/hooks';
import { edit } from '../../../features/product/productReducer';


interface product {
  id: number;
  name: string;
  price: number;
  catagory: string;
  amount: string;
  quantity: number;
  description: string;
  Url: string;

}




function AdminCard(prop: any) {

  const nav = useNavigate();
  const dispatch = useAppDispatch();

  const [counter, setCounter] = useState(prop.amount); // useState(initial value);
  const [product, setProduct] = useState(prop);
  // const [q,setQ] = useState(0);

  function handleAddCounter(id: number): void {

    let tempCounter = counter;
    tempCounter++;
    setCounter(tempCounter);
    axios.patch(`http://localhost:3004/products1/${id}`, { amount: tempCounter }).then(({ data }) => console.log(data));
  }
  function handelRemoveProduct(id: number) {
    axios.delete(`http://localhost:3004/products1/${id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })

    alert("Added product to the store")
    nav("/Seller");

  }
  function handleRemveCounter(id: number) {
    let tempCounter = counter;
    tempCounter--;
    if (tempCounter < 0) {
      tempCounter = 0;
    }
    setCounter(tempCounter);
    axios.patch(`http://localhost:3004/products1/${id}`, { amount: tempCounter }).then(({ data }) => console.log(data));
  }

  const [ID , setID] = useState();
  const [Name , setName] = useState("");
  const [Price , setPrice] = useState();
  const [Catagory , setCatagory] = useState();
  const [Amount , setAmount] = useState();
  const [Quantity , setQuantity] = useState();
  const [Description , setDescription] = useState();
  const [url , setUrl] = useState();

  function handelEditProduct(id: number) {
    setID(prop.id);
    setAmount(prop.amount);
    setCatagory(prop.catagory);
    setDescription(prop.description);
    setName(prop.name);
    setPrice(prop.price);
    setQuantity(prop.quantity);
    setUrl(prop.Url);
    console.log({ id, name });
    dispatch(edit([ID, Name, Price, Catagory, Amount, Quantity, Description, url, true]));
  }

  const { id, name, price, catagory, quantity, amount, description, Url } = prop;
  const [color, setColor] = useState('red');



  return (

    <div className="card" style={{ backgroundColor: color }} >

      <img src={Url} alt="" />
      <h3>{name}</h3>
      <p>Price : {price}</p>
      <p><button onClick={() => handleRemveCounter(id)}>-</button>  {counter} <button onClick={() => handleAddCounter(id)}>+</button> </p>
      <button onClick={() => handelRemoveProduct(id)}> Remove </button>
      <button onClick={() => handelEditProduct(id)}> Edit </button>
    </div>
  );
}

export default AdminCard;
