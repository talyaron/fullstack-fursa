import './HomePage.scss'
import axios from 'axios';
import Button from '@mui/material/Button';
import { Alert, Backdrop, Box, CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import { ShowRaw } from '../ShowRaw';
import { ShowOrders } from '../ShowOrders';
import AddIcon from '@mui/icons-material/Add';
function HomePage() {
  const [show, setShow] = useState('none')
  const [open, setOpen] = useState(false);
  const [orderOpen, setOrderOpen] = useState(false);
  const [lengths, setLength] = useState<Array<Number>>([]);
  const [currentLen, setCurrentLength] = useState(0);

  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  const handleOrderClose = () => {
    setOrderOpen(false);
  };
  const handleOrderToggle = () => {
    setOrderOpen(!orderOpen);
  };
  function handleSubmit(ev: any) {
    ev.preventDefault();
    const form = ev.target;
    const width=form[1].value;
    const thick=form[2].value;
    const pricePerMeter=form[6].value;
    const price=(pricePerMeter)*(width/100)*(thick/100)
    // axios.post('http://localhost:3004/woods',{"name":form[0].value, "imgurl":form[1].value,"pricePerMeter":form[2].value}).then(({data})=>console.log(data));
    axios.post('/raw/add-Raw-Material', { name: form[0].value,"width":width,"thick":thick,lengths:lengths, imageUrl: form[5].value, pricePerMeter:price })
      .then(data => {
        console.log(data);
      }).catch(err => {
        console.error(err);
      })
    setShow('block')

  }
  function handleProductSubmit(ev: any) {
    ev.preventDefault();
    const form = ev.target;
    
    axios.post('/product/add-product', { "name": form[0].value, "imgurl": form[1].value }).then(({ data }) => console.log(data));
  }
 
 
function addLengthHandler(ev:any)
{
  setLength([...lengths, currentLen]);
  console.log(lengths)

}
function RelatedProductSubmit(ev:any){
  ev.preventDefault();
  const form = ev.target;
  const type=form[0].value;
  const name=form[1].value;
  const price=form[2].value;
  axios.post('/product/add-related-product', { "name":name,"price":price,"type":type }).then(({ data }) => console.log(data));

}
  return (
    <div className="homepage">
      <div className="homepage_header">

      </div>
      <div className="homepage_body">
        <div className="homepage_body_add">
          <h1>add Raw Material type</h1>
          <form onSubmit={handleSubmit}>
            <input required type="text" name="type" placeholder='product name'></input>
            <input required type="number" name="width" placeholder='width'></input>
            <input required type="number" name="thick" placeholder='thick'></input>
            <input required type="number" name="length" placeholder='length' onChange={(ev: any) => setCurrentLength(ev.target.value)} ></input>
            <Button startIcon={<AddIcon></AddIcon>} onClick={addLengthHandler} variant="contained" style={{ backgroundColor: 'rgb(252, 154, 26)' }} size="small">add length to stock </Button>
            <input required type="text" name="imageUrl" placeholder='image Url'></input>
            <input required type='number' name="price" placeholder='price per meter'></input>
            <Button type="submit" variant="contained" style={{ backgroundColor: 'rgb(47, 143, 90)' }} size="medium">add
            </Button>
          </form>
          <Box sx={{ display: show }}>
            <Alert severity="success">item added successfully — check it out!</Alert></Box>
          <Button variant="contained" style={{ backgroundColor: 'rgb(47, 143, 90)' }} size="medium" onClick={handleToggle}>existing raw material</Button>
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
            <input required type="text" name="name" placeholder='product name'></input>
            <input required type="text" name="imageUrl" placeholder='image Url'></input>
            <Button type="submit" variant="contained" style={{ backgroundColor: 'rgb(47, 143, 90)' }} size="medium">add
            </Button>
          </form>
        </div>
        <div className="homepage_body_delivery">
          <h1>Manage Orders</h1>

          <Button variant="contained" style={{ backgroundColor: 'rgb(47, 143, 90)' }} size="medium" onClick={handleOrderToggle}>show orders</Button>
          <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={orderOpen}
          >
            {/* <CircularProgress color="inherit" /> */}
            <button onClick={handleOrderClose}>close</button>
            <ShowOrders></ShowOrders>
          </Backdrop>
        </div>
        <div className="homepage_body_relatedProduct">
          <h1>add Products</h1>
          <form onSubmit={RelatedProductSubmit}>
          <input required type="text" name="type" placeholder='product type'></input>
            <input required type="text" name="name" placeholder='product name'></input>
            <input required type="number" name="price" placeholder='price'></input>
            <Button type="submit" variant="contained" style={{ backgroundColor: 'rgb(47, 143, 90)' }} size="medium">add
            </Button>
          </form>
         
        </div>


      </div>


    </div>

  );
}
export default HomePage
