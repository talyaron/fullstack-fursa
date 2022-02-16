import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import './Login.scss';
import { url } from 'inspector';
import Navbar from '../../components/navbar/Navbar';
import {useState,useEffect} from 'react';
function Login(){

    const [wood,setWood]=useState([]);
    useEffect(()=>{
        fetch('/get-wood-type').then(res=>res.json()).then(data=>{
          
          console.log(data);
          setWood(data);
          
        })
      },[]);
      console.log(wood)
    return(
      
        <div className="wrapper">
            <Navbar></Navbar>
      <img  src="https://scontent.fhfa2-2.fna.fbcdn.net/v/t1.6435-9/191373428_5543723205668752_6758159996168278797_n.png?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=vD2Ck1UqS_MAX-yTblw&_nc_ht=scontent.fhfa2-2.fna&oh=00_AT-kafBKJB3bLHogSgPEVUQQtAHgClIHTT0FGy07h8nZTA&oe=622CF120" alt="" />
       <Box  sx={{display: 'flex',flexWrap:'wrap',flexDirection:'column',alignitems:'center',width:'30%',margin:'auto'}}
       >
        <TextField id="outlined-basic" label="Name" variant="outlined"  color="warning"   sx={{margin:'5px'}} />
        <TextField id="outlined-basic" label="Phone Number" variant="outlined" color="warning" sx={{margin:'5px'}}/>
        <TextField id="outlined-basic" label="Location" variant="outlined" color="warning" sx={{margin:'5px'} } />
        <Button variant="contained" size='medium'  color="secondary" sx={{m:1,width:'20%',marginLeft:'40%'}}>
        
        <Link to="/store">login</Link>
        </Button>
        </Box>
        </div>

    )
    ;
}
export default Login