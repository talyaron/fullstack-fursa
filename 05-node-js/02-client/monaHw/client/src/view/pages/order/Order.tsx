import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import './Order.scss'
import IconButton from '@mui/material/IconButton';
import {useState,useEffect} from 'react';
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Alert from '@mui/material/Alert';
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Navbar from '../../components/navbar/Navbar';
import axios from 'axios'
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { height, width } from '@mui/system';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { fetchUser, getUser } from '../../../features/user/userReducer';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { getRawByName, selectRow } from '../../../features/raw/Raw';

function Order() {
   
  const dispatch=useAppDispatch();
  const user=useAppSelector(getUser);
  const { name,pricePerMeter } = useParams();
  const [show,setShow]=useState('none')
  const [length, setLength] = useState('')
  useEffect(()=>{
    dispatch(getRawByName({name:name}))

},[]) 
 const rawByName=useAppSelector(selectRow)
  // console.log(rawByName)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLength(event.target.value);
  };
    function handleSubmit(ev: any) {
        ev.preventDefault();
      //  console.dir(ev.target);
        const form = ev.target;
        const obj: any = {};
        obj['woodName']=name;
        for (let i = 0; i < form.length; i++) {
           // console.log(form[i].value, form[i].name, form[i].type);
            if (form[i].type !== "submit") {
                obj[form[i].name] = form[i].value;
            }
        }

        // let copy = Object.assign([], product);
        // copy.push(obj);
        // setProduct(copy);
        // const orderObj={"woodName":name,"woodlength":form[0].value,"amount":form[1].value,"price":pricePerMeter};
       const length=form[0].value;
       const amount=form[2].value;
      
        axios.post('/order/add-order',{woodName:name,woodlength:length,amount:amount,price:pricePerMeter,userId:user._id})
        .then((res) => setShow('block'))
        .catch((err) => console.error(err));
        // axios.post('http://localhost:3004/userOrder',{"woodName":name,"woodlength":form[0].value,"amount":form[1].value,"price":pricePerMeter}).then(({data})=>dispatch(getCartAsync()));

        // setShow('block')
        // console.log(copy)
        // console.log(product)
      
        


    }
    return (
        <div className="order">
             <header className='order_header'>
             <img className="order_header_logo" src="https://scontent.fhfa2-2.fna.fbcdn.net/v/t1.6435-9/191373428_5543723205668752_6758159996168278797_n.png?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Ye9yqhumfloAX9j7uvt&_nc_ht=scontent.fhfa2-2.fna&oh=00_AT-zBFq4ugSSvtQCdFkGcWIcgyV86E_gH8OVLGhZzFZLFQ&oe=625C6720" alt="" />
             <Navbar></Navbar>

     <h1 >Raw Material /</h1>
     <h1>order {name}</h1>

     <div className="order_header_cart">
       <Link to='/cart'>
     <img src="https://cdn4.iconfinder.com/data/icons/shopping-21/64/shopping-06-512.png" alt="" />
       </Link>
        </div>
            </header>
            {/* <h1>order {name}</h1> */}
           <div className="order_body">
          
            <div className="order_body_inputs">
            <form onSubmit={handleSubmit}>
                <div className="row">
                <p>Length</p>
                <TextField select name="length" required placeholder="select length" style={{ backgroundColor: 'white', margin: '5px', borderRadius: '8px', width: '20ch' }} value={length} onChange={handleChange}> {rawByName.raws[0].lengths.map((len:any,index) => (
              <MenuItem key={index} value={len}>
                {len}
              </MenuItem>
            ))}</TextField>         
                   </div>
                <div className="row">
                <p>Quantity</p>
                <input type="number" name="amount" required placeholder="Quantity" />
                </div>
                <Button startIcon={<AddShoppingCartIcon></AddShoppingCartIcon>} type="submit" variant="contained" style={{backgroundColor: 'rgb(47, 143, 90)'}}size="medium">
          add to cart
       </Button>
            </form>
            <Box sx={{ display:show }}>
            <Alert  severity="success">item added successfully — check it out!</Alert></Box>
          </div>
            <img src="https://www.woodworkerssource.com/images/board_feet_example.jpg" alt="" />

        </div>
        </div>
    );

}
export default Order