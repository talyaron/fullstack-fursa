import './HomePage.scss'
import axios from 'axios';
import Button from '@mui/material/Button';
import { Alert,Backdrop,Box, CircularProgress } from '@mui/material';
import { useState } from 'react';
import { ShowRaw } from '../ShowRaw';
import { useAppDispatch } from '../../../../app/hooks';
import { getRawAsync } from '../../../../features/raw/Raw';
  function HomePage()
{   const dispatch=useAppDispatch();
    const [show,setShow]=useState('none')
    const [open, setOpen] = useState(false);
    const handleClose = () => {
      setOpen(false);
    };
    const handleToggle = () => {
      setOpen(!open);
    };
    function handleSubmit(ev:any)
    {
        ev.preventDefault();
        const form = ev.target;
    // axios.post('http://localhost:3004/woods',{"name":form[0].value, "imgurl":form[1].value,"pricePerMeter":form[2].value}).then(({data})=>console.log(data));
    axios.post('/raw/add-Raw-Material',{name:form[0].value,imageUrl:form[1].value,pricePerMeter:form[2].value})
    .then(data => {
      dispatch(getRawAsync())
        console.log(data);
      }).catch(err => {
        console.error(err);
      })
      setShow('block')

}
    function handleProductSubmit(ev:any)
    {
        ev.preventDefault();
        const form = ev.target;
      // axios.post('http://localhost:3004/products',{"name":form[0].value, "imgurl":form[1].value}).then(({data})=>console.log(data));
        axios.post('/product/add-product',{name:form[0].value, imgurl:form[1].value})
        .then(data => {
          // dispatch(getRawAsync())
            console.log(data);
          }).catch(err => {
            console.error(err);
          })
    }
    function handleDelivery(){

    }
  
    return(
        <div className="homepage">
            <div className="homepage_header">

            </div>
            <div className="homepage_body">
                <div className="homepage_body_add">
                    <h1>add Raw Material type</h1>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="type" placeholder='product name'></input>
                        <input type="text" name="imageUrl" placeholder='image Url'></input>
                        <input type='number' name="price" placeholder='price per meter'></input>
                        <Button type="submit" variant="contained" style={{backgroundColor: 'rgb(47, 143, 90)'}}size="medium">add
                        </Button>
                        </form>
                        <Box sx={{ display:show }}>
            <Alert  severity="success">item added successfully — check it out!</Alert></Box>
            <Button variant="contained" style={{backgroundColor: 'rgb(47, 143, 90)'}}size="medium" onClick={handleToggle}>existing raw material</Button>
                </div>
                <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        // onClick={handleClose}
      >
        {/* <CircularProgress color="inherit" /> */}
        <button onClick={handleClose}>close</button>
        <ShowRaw></ShowRaw>
      </Backdrop>
                <div className="homepage_body_products">
                    <h1>Wood Products</h1>
                <form onSubmit={handleProductSubmit}>
                        <input type="text" name="name" placeholder='product name'></input>
                        <input type="text" name="imageUrl" placeholder='image Url'></input>
                        <Button type="submit" variant="contained" style={{backgroundColor: 'rgb(47, 143, 90)'}}size="medium">add
                        </Button>
                        </form>
                </div>
                <div className="homepage_body_delivery">
                    <h1>Manage Delivery</h1>
                <form onSubmit={handleDelivery}>
                      
                        </form>
                </div>
              
            </div>
          

        </div>
 
    );
}
export default  HomePage
