
import Navbar from '../../components/navbar/Navbar';
import "./Closet.scss"
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react'
import { MenuItem } from '@mui/material';
import TextField from '@mui/material/TextField';
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { getCartAsync } from '../../../features/cart/cartSlice';

const doorType = [
  {
    value: 'standard doors',
    label: 'standard doors',
  },

  {
    value: 'sliding doors',
    label: 'sliding doors',
  },
  {
    value: 'without doors',
    label: 'without doors',
  },

];
function Closet() {
  const [add, setAdd] = useState('')
  const [type, setType] = useState('standard doors')
  const { woodproname } = useParams();
  const dispatch=useDispatch();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setType(event.target.value);
  };
  function handleSubmit(ev:any) {
    ev.preventDefault();
    console.dir(ev.target)
    const form=ev.target
    axios.post('http://localhost:3004/userOrder',{"woodName":woodproname,"woodlength":form[0].value, "width":form[1].value, "thick":form[2].value,"color":form[3].value,"amount":form[4].value,"doorType":form[5].value}).then(({data})=>dispatch(getCartAsync()));


  }
  return (
    <div className="closet">
      <header className="closet_header">
        <img className="closet_header_logo" src="https://scontent.fhfa2-2.fna.fbcdn.net/v/t1.6435-9/191373428_5543723205668752_6758159996168278797_n.png?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=vD2Ck1UqS_MAX-yTblw&_nc_ht=scontent.fhfa2-2.fna&oh=00_AT-kafBKJB3bLHogSgPEVUQQtAHgClIHTT0FGy07h8nZTA&oe=622CF120" alt="" />
        <Navbar></Navbar>
        <h1 >Wood Products /</h1>
        <h1> {woodproname}</h1>

        <div className="closet_header_cart">
          <Link to='/cart'>
            <img src="https://cdn4.iconfinder.com/data/icons/shopping-21/64/shopping-06-512.png" alt="" />
          </Link>
        </div>
      </header>
      <div className="closet_body">
        <div className="closet_body_inputs">
          <form onSubmit={handleSubmit}>
            <input type="text" name="woodlength" required placeholder="Length" />
            <input type="text" name="width" required placeholder="Width" />
            <input type="text" name="thick" required placeholder="Thickness" />
            <input type="text" name="color" required placeholder="Color" />
            <input type="number" name="amount" required placeholder="Quantity" />

            <TextField select name="doorType" required placeholder="type of doors" style={{ backgroundColor: 'white', margin: '5px', borderRadius: '8px', width: '90%' }} value={type} onChange={handleChange}> {doorType.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}</TextField>
            {/* <input type="number" name="doorNum" required placeholder="number of doors" /> */}
            <Button type="submit" variant="contained" style={{ backgroundColor: 'rgb(47, 143, 90)' }} size="medium">
              add to cart

            </Button>
            {/* <button type='submit'>add</button> */}
          </form>
          <Alert severity="success">{add}</Alert>

        </div>

      </div>
    </div>
  );
}
export default Closet;