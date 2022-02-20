
import {Link, useParams} from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import './Door.scss'
import Button from '@mui/material/Button';

function Door()
{

    const {name}=useParams();
    console.log({name});

    function handleSubmit(){

    }
    return(

      <div className="door">
        <header className="door_header">
        <img className="RawMaterial_header_logo" src="https://scontent.fhfa2-2.fna.fbcdn.net/v/t1.6435-9/191373428_5543723205668752_6758159996168278797_n.png?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=vD2Ck1UqS_MAX-yTblw&_nc_ht=scontent.fhfa2-2.fna&oh=00_AT-kafBKJB3bLHogSgPEVUQQtAHgClIHTT0FGy07h8nZTA&oe=622CF120" alt="" />
             <Navbar></Navbar>

     <h1 >Wood Products /</h1>
     <h1>order {name}</h1>

     <div className="RawMaterial_header_cart">
       <Link to='/cart'>
     <img src="https://cdn4.iconfinder.com/data/icons/shopping-21/64/shopping-06-512.png" alt="" />
       </Link>
        </div>
        </header>
        <div className="door_body">
        <div className="order_body_inputs">
            <form onSubmit={handleSubmit}>
                <input type="text" name="woodlength"  required placeholder="Length" />
                <input type="text" name="width" required placeholder="Width" />
                <input type="text" name="thick" required placeholder="Thickness" />
                <input type="text" name="color" required placeholder="Color" />
                <input type="number" name="amount" required placeholder="Quantity" />
                <Button type="submit" variant="contained" style={{backgroundColor: 'rgb(47, 143, 90)'}}size="medium">
          add to cart
       
       </Button>
       {/* <button type='submit'>add</button> */}
            </form>
            {/* <Alert severity="success">{add}</Alert> */}


         
        </div>
        </div>
        
      </div>
       
    );

}
export default Door