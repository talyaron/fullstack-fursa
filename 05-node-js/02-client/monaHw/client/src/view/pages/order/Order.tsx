
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
import { useDispatch } from 'react-redux';
import { getCartAsync } from '../../../features/cart/cartSlice';
import { useAppDispatch } from '../../../app/hooks';

// const woods = [{name:'pine wood',height:70,width:70, thick:70,cardImg:'https://d2kxk2c617i0nn.cloudfront.net/image_resize/crop/mw1500/mh750/products/23_001--yellow_pine_softwood-s.jpg'},
// {name:'insulation wood',height:70,width:70, thick:70,cardImg:'https://www.greenspec.co.uk/images/web/materials/boards/board.jpg'},
// {name:'multiLayer wood',height:70,width:70, thick:70,cardImg:'https://user-assets.sxlcdn.com/images/609056/FkbWNKuLffuq6lYY2qFlQ5bAGYJY.jpg?imageMogr2/strip/auto-orient/thumbnail/1200x9000%3E/quality/90!/interlace/1/format/jpg'}];
const currencies = [
    {
      value: 'm',
      label: 'm',
    },
    {
      value: 'mm',
      label: 'mm',
    },
    {
      value: 'cm',
      label: 'cm',
    },
  
  ];
// interface orderProps {
//     product: any;
//     setProduct: any;
// }
function Order() {
    // const { product, setProduct } = props;
    const [currency, setCurrency] = React.useState('cm');
     const dispatch =useAppDispatch();
   useEffect(()=>{
    dispatch(getCartAsync());
  },[])
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrency(event.target.value);
  };

    const { name,pricePerMeter } = useParams();
    const [show,setShow]=useState('none')
  
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
        const orderObj={"woodName":name,"woodlength":form[0].value,"amount":form[1].value,"price":pricePerMeter};
        axios.post('/add-orders',{orderObj})
        .then((res) => dispatch(getCartAsync()))
        .catch((err) => console.error(err));
        // axios.post('http://localhost:3004/userOrder',{"woodName":name,"woodlength":form[0].value,"amount":form[1].value,"price":pricePerMeter}).then(({data})=>dispatch(getCartAsync()));

        setShow('block')
        // console.log(copy)
        // console.log(product)
      
        


    }
    return (
        <div className="order">
             <header className='order_header'>
             <img className="RawMaterial_header_logo" src="https://scontent.fhfa2-2.fna.fbcdn.net/v/t1.6435-9/191373428_5543723205668752_6758159996168278797_n.png?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=vD2Ck1UqS_MAX-yTblw&_nc_ht=scontent.fhfa2-2.fna&oh=00_AT-kafBKJB3bLHogSgPEVUQQtAHgClIHTT0FGy07h8nZTA&oe=622CF120" alt="" />
             <Navbar></Navbar>

     <h1 >Raw Material /</h1>
     <h1>order {name}</h1>

     <div className="RawMaterial_header_cart">
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
                <input type="text" name="woodlength"  required placeholder="Length" />
                {/* <TextField
          id="outlined-select-currency"
          select
         
          value={currency}
          onChange={handleChange}
          style={{width:'8vw'}}

        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField> */}
                </div>
                {/* <div className="row">
                <p>Width</p>
                <input type="text" name="width" required placeholder="Width" />
                <TextField
          id="outlined-select-currency"
          select
          value={currency}
          onChange={handleChange}
          style={{width:'8vw'}}

        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
                </div> */}
                {/* <div className="row">
                <p>Thick</p>
                <input type="text" name="thick" required placeholder="Thickness" />
                <TextField
          id="outlined-select-currency"
          select
          value={currency}
          onChange={handleChange}
          style={{width:'8vw'}}
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
                </div> */}
                <div className="row">
                <p>Quantity</p>
                <input type="number" name="amount" required placeholder="Quantity" />
                </div>
                <Button type="submit" variant="contained" style={{backgroundColor: 'rgb(47, 143, 90)'}}size="medium">
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