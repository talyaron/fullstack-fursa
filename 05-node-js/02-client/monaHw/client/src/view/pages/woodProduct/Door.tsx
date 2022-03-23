
import { Link, useParams } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import './Door.scss'
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import { useEffect, useState } from 'react';
import axios from 'axios'
import Box from '@mui/material/Box';
import { display } from '@mui/system';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { fetchUser, getUser } from '../../../features/user/userReducer';
import { TextareaAutosize } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function Door() {
  // const dispatchs=ueAppDispatch();
  // useEffect(() => {
  //   dispatch(fetchUser({ email:'mona_arabiya@hotmail.com', password:'123' }))
  // }, []);   
  const user = useAppSelector(getUser)
  const [show, setShow] = useState('none')

  const { woodproname } = useParams();
  console.log({ woodproname });

  function handleSubmit(ev: any) {
    ev.preventDefault();
    console.dir(ev);
    const form = ev.target;
    const obj: any = {};
    obj['woodName'] = woodproname;
    for (let i = 0; i < form.length; i++) {
      console.log(form[i].value, form[i].name, form[i].type);
      if (form[i].type !== "submit") {
        obj[form[i].name] = form[i].value;
      }
    }
    // let copy = Object.assign([], product);
    // copy.push(obj);
    // setProduct(copy);
    // axios.post('http://localhost:3004/userOrder',{"woodName":woodproname,"woodlength":form[0].value, "width":form[1].value, "thick":form[2].value, "color":form[3].value,"amount":form[4].value}).then(({data})=>console.log(data));
    axios.post('/order/add-door-order', { woodName: woodproname, woodlength: form[0].value, width: form[1].value, thick: form[2].value, color: form[3].value, amount: form[4].value,details:form[5].value, userId: user._id })
      .then((res) => setShow('block'))
      .catch((err) => console.error(err));
    // setShow('block')

  }
  return (

    <div className="door">
      <header className="door_header">
        <img className="door_header_logo" src="https://scontent.fhfa2-2.fna.fbcdn.net/v/t1.6435-9/191373428_5543723205668752_6758159996168278797_n.png?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Ye9yqhumfloAX9j7uvt&_nc_ht=scontent.fhfa2-2.fna&oh=00_AT-zBFq4ugSSvtQCdFkGcWIcgyV86E_gH8OVLGhZzFZLFQ&oe=625C6720" alt="" />
        <Navbar></Navbar>

        <h1 >Wood Products /</h1>
        <h1> {woodproname}</h1>

        <div className="door_header_cart">
          <Link to='/cart'>
            <img src="https://cdn4.iconfinder.com/data/icons/shopping-21/64/shopping-06-512.png" alt="" />
          </Link>
        </div>
      </header>
      <div className="door_body">
        <div className="order_body_inputs">
          <form onSubmit={handleSubmit}>
            <input type="number" name="woodlength" required placeholder="length" />
            <input type="number" name="width" required placeholder="width" />
            <input type="number" name="thick" required placeholder="thick" />
            <input type="text" name="color" required placeholder="color" />
            <input type="number"  name="amount" required placeholder="quantity" />
            <TextareaAutosize
              aria-label="minimum height"
              minRows={3}
              placeholder="more details.."
              style={{ width: 200 }}
            />
            <Button startIcon={<AddShoppingCartIcon></AddShoppingCartIcon>} type="submit" variant="contained" style={{ backgroundColor: 'rgb(47, 143, 90)' }} size="medium">
              add to cart

            </Button>
            {/* <button type='submit'>add</button> */}
          </form>
          <Box sx={{ display: show }}>
            <Alert severity="success" >item added successfully — check it out!</Alert>

          </Box>



        </div>
      </div>

    </div>

  );

}
export default Door