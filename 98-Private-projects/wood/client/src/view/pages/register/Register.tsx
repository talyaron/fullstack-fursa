import { Box } from '@mui/material';
import axios from 'axios'
import './Register.scss'
export function Register()
{
   async function registerHandler(ev:any){
        ev.preventDefault();
        const name=ev.target.elements.name.value;
        const email=ev.target.elements.email.value;
        const phone=ev.target.elements.phone.value;
        const password=ev.target.elements.password.value;
        const {data}=await axios.post('register',{name:name,email:email,phone:phone,password:password})
    }
    return(
        <div className="wrapper">
        <form onSubmit={registerHandler}>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'column', alignitems: 'center', width: '30%', margin: 'auto', border: 'solid', backgroundColor: 'white', borderRadius: '10px', padding: '20px', boxShadow: '2px 2px 10px rgb(245, 202, 9)' }}
                >
            <input type='text' name="name" placeholder="full name"></input>
            <input type='email' name="email" placeholder="email"></input>
            <input type='text' name='phone' placeholder='phone number'></input>
            <input type='password' name="password" placeholder="password"></input>
            <button type='submit'>register</button>

        </Box>
        </form>
        </div>
    )
}