import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link, useNavigate } from "react-router-dom";
import './Login.scss';
import { url } from 'inspector';
import Navbar from '../../components/navbar/Navbar';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { fetchUser } from '../../../features/user/userReducer';
import Store from '../store/Store';
function Login() {
    const dispatch=useDispatch();
    const navigate=useNavigate();
 
    // axios.get('http://localhost:3004/posts').then(({data})=>console.log(data));

    // const [wood,setWood]=useState([]);
    // useEffect(()=>{
    //     fetch('/get-wood-type').then(res=>res.json()).then(data=>{

    //       console.log(data);
    //       setWood(data);

    //     })
    //   },[]);
    //   console.log(wood)
    async function userLoginHandler(ev: any) {
        ev.preventDefault();
        const form=ev.target;
        const name=form[0].value;
        const email=form[1].value;
        const password=form[2].value;
        const {data}=await axios.post('/user/login',{name:name,email:email,password:password})
        if(data.ok){
          dispatch(fetchUser({ email: email, password: password }))
          navigate("/store")
        }
        else{
            alert('user not found')
        }
        // const form = ev.target;
        // axios.post('http://localhost:3004/userInfo', { "name": form[0].value, "phone": form[1].value, "location": form[2].value }).then(({ data }) => dispatch(getUserAsync()));
        // if(form[0].value=='admin'){
        //     navigate("/homepage");
        // }
        // else{navigate("/store")};
    }
    return (

        <div className="wrapper">
           
            
            {/* <Navbar></Navbar> */}
            <img src="https://scontent.fhfa2-2.fna.fbcdn.net/v/t1.6435-9/191373428_5543723205668752_6758159996168278797_n.png?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Ye9yqhumfloAX9j7uvt&_nc_ht=scontent.fhfa2-2.fna&oh=00_AT-zBFq4ugSSvtQCdFkGcWIcgyV86E_gH8OVLGhZzFZLFQ&oe=625C6720" alt="" />
            {/* <div className="wrapper_body"> */}
            <form onSubmit={userLoginHandler}>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'column', alignitems: 'center', width: '30%', margin: 'auto', border: 'solid', backgroundColor: 'white', borderRadius: '10px', padding: '20px', boxShadow: '2px 2px 10px rgb(245, 202, 9)' }}
                >
                    <TextField id="outlined-basic" label="Name" required variant="standard" color="warning"  sx={{ margin: '5px' }} />
                    <TextField id="outlined-basic" label="Email" required variant="standard" color="warning" sx={{ margin: '5px' }} />
                    <TextField id="outlined-basic" label="Password" required variant="standard" color="warning" sx={{ margin: '5px' }} />
                    
                    <Button variant="contained" type='submit' size='medium' style={{ backgroundColor: 'rgb(245, 202, 9)' }} sx={{ m: 1, width: '20%', marginLeft: '40%' }}>
                        login
                        {/* <Link to="/homepage" type='submit' color='white'>login</Link> */}
                    </Button>
                </Box>
                {/* </div> */}
            </form>

        </div>

    )
        ;
}
export default Login