import { useParams } from "react-router-dom"
import Navbar from '../../components/navbar/Navbar';
import {Link} from 'react-router-dom'
import './BedFrame.scss'
import { Alert, Button, MenuItem, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import axios from 'axios'
import { Box } from "@mui/system";
import { getCartAsync } from "../../../features/cart/cartSlice";
import { useDispatch } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { fetchUser, getUser } from "../../../features/user/userReducer";
const backType = [
    {
      value: 'with back',
      label: 'with back',
    },
  
    {
      value: 'no back',
      label: 'no back',
    },
   
  
  ];
function BedFrame()
{
    const {woodproname}=useParams();
    const [show,setShow]=useState('none');
    const dispatch=useAppDispatch();
    const [type, setType] = useState('no back')
    // useEffect(() => {
    //   dispatch(fetchUser({ email:'mona_arabiya@hotmail.com', password:'123' }))
    // }, []);   
    const user=useAppSelector(getUser)
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setType(event.target.value);
      };
    function handleSubmit(ev:any)
    {
        ev.preventDefault();
        console.dir(ev.target)
        const form=ev.target;
        
        // setAdd('item added successfully — check it out!');
        
        // <Alert severity="success">item added successfully — check it out!</Alert>
        // axios.post('http://localhost:3004/userOrder',{"woodName":woodproname,"woodlength":form[0].value, "width":form[1].value, "thick":form[2].value,"color":form[3].value,"amount":form[4].value,"doorType":form[5].value}).then(({data})=>dispatch(getCartAsync()));
        axios.post('/order/add-product-order',{woodName:woodproname,woodlength:form[0].value,width:form[1].value,thick:form[2].value, color:form[3].value,amount:form[4].value,doorType:form[5].value,userId:user._id})
        .then((res) => setShow('block'))
        .catch((err) => console.error(err));
        // setShow('block')
    }
    return(
        <div className="bed">
      <header className="bed_header">
        <img className="bed_header_logo" src="https://scontent.fhfa2-2.fna.fbcdn.net/v/t1.6435-9/191373428_5543723205668752_6758159996168278797_n.png?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=vD2Ck1UqS_MAX-yTblw&_nc_ht=scontent.fhfa2-2.fna&oh=00_AT-kafBKJB3bLHogSgPEVUQQtAHgClIHTT0FGy07h8nZTA&oe=622CF120" alt="" />
        <Navbar></Navbar>
        <h1 >Wood Products /</h1>
        <h1> {woodproname}</h1>

        <div className="bed_header_cart">
          <Link to='/cart'>
            <img src="https://cdn4.iconfinder.com/data/icons/shopping-21/64/shopping-06-512.png" alt="" />
          </Link>
        </div>
      </header>
      <div className="bed_body">
          <div className="bed_body_inputs">
              <form onSubmit={handleSubmit}>
              <input type="text" name="woodlength" required placeholder="Length" />
            <input type="text" name="width" required placeholder="Width" />
            <input type="text" name="thick" required placeholder="Thickness" />
            <input type="text" name="color" required placeholder="Color" />
            <input type="number" name="amount" required placeholder="Quantity" />

            <TextField select name="doorType" required placeholder="type of doors" style={{ backgroundColor: 'white', margin: '5px', borderRadius: '8px', width: '90%' }} value={type} onChange={handleChange}> {backType.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}</TextField>
            <Button type="submit" variant="contained" style={{ backgroundColor: 'rgb(47, 143, 90)' }} size="medium">
              add to cart

            </Button>
            {/* <button type='submit'>add</button> */}
          </form>
          <Box sx={{ display:show }}>
            <Alert severity="success" >item added successfully — check it out!</Alert>

            </Box>
              
          </div>
      </div>
      </div>
    )
}
export default BedFrame