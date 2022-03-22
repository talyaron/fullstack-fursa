import { Alert, Box, Button, Link, TextField } from '@mui/material';
import axios from 'axios'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.scss'
export function Register()
{
    const [show,setShow]=useState('none')
    const navigate=useNavigate();
   async function registerHandler(ev:any){
        ev.preventDefault();
        console.log(ev.target.elements)
        const form=ev.target;
        const name=form[0].value;
        const email=form[1].value;
        const phone=form[2].value;
        const password=form[3].value;
        const {data}=await axios.post('/user/register',{name:name,email:email,phone:phone,password:password})
        if(!data.ok)
        {
            setShow('block')
            
        }
        else{
           navigate('/')
        }
        
    }
    return(
        <div className="wrapper">
        <img src="https://scontent.fhfa2-2.fna.fbcdn.net/v/t1.6435-9/191373428_5543723205668752_6758159996168278797_n.png?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Ye9yqhumfloAX9j7uvt&_nc_ht=scontent.fhfa2-2.fna&oh=00_AT-zBFq4ugSSvtQCdFkGcWIcgyV86E_gH8OVLGhZzFZLFQ&oe=625C6720" alt="" />

        <form onSubmit={registerHandler}>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'column', alignitems: 'center',justifyContent:'center', width: '30%', margin: 'auto', border: 'solid', backgroundColor: 'white', borderRadius: '10px', padding: '20px', boxShadow: '2px 2px 10px rgb(245, 202, 9)' }}
                >
                     <TextField id="outlined-basic1" label="full name" required variant="standard" color="warning"  sx={{ margin: '5px' }} />
                    <TextField type='email' id="outlined-basic2" label="email" required variant="standard" color="warning" sx={{ margin: '5px' }} />
                    <TextField id="outlined-basic3" label="phone number" required variant="standard" color="warning" sx={{ margin: '5px' }} />
                    <TextField type='password' id="outlined-basic4" label="password"  required variant="standard" color="warning" sx={{ margin: '5px' }} />

            
                    <Button variant="contained" type='submit' size='medium' style={{ backgroundColor: 'rgb(245, 202, 9)' }} sx={{ m: 1, width: '20%', marginLeft: '40%' }}>
                       Register
                    </Button>
                    <Alert  sx={{ display:show }}  severity="error">email already exist!</Alert>
                    <Link href="login" underline="hover">
                             already have account?login
                         </Link>

        </Box>
        </form>

        </div>
    )
}