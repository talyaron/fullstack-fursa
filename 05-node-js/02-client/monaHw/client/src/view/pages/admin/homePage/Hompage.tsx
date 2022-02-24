import './HomePage.scss'
import axios from 'axios';
import Button from '@mui/material/Button';
function HomePage()
{
    function handleSubmit(ev:any)
    {
        ev.preventDefault();
        const form = ev.target;
    axios.post('http://localhost:3004/RawMaterial',{"name":form[0].value, "imgurl":form[1].value,"price":form[2].value}).then(({data})=>console.log(data));

    }
    function handleProductSubmit(ev:any)
    {
        ev.preventDefault();
        const form = ev.target;
      axios.post('http://localhost:3004/products',{"name":form[0].value, "imgurl":form[1].value}).then(({data})=>console.log(data));
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
                        <input type="text" name="type" placeholder='wood type'></input>
                        <input type="text" name="imageUrl" placeholder='image Url'></input>
                        <input type='number' name="price" placeholder='item price'></input>
                        <Button type="submit" variant="contained" style={{backgroundColor: 'rgb(47, 143, 90)'}}size="medium">add
                        </Button>
                        </form>
                </div>
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
