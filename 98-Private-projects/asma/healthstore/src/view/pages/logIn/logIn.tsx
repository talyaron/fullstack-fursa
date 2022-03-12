import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './style.scss'

function LogIn() {

    const navigate = useNavigate();
    //const info = { name: "asma", password: "123" }
    const [user, setUser] = useState({ name: "", password: "" });

    function handleClick() {
        //console.log(user)
        if(user.name && user.password){
            axios.post('/users/logIn', { user })
                .then(({ data }) => {
                    console.log(data)
                    if(data.login)
                        navigate('/addProducts');
                    else{alert("Wrong Username or Password");}    
                })
                .catch(err => {
                    console.error(err)
                })
        }
        else {alert("Missing Info");}
    }

    return (
        <div>
            <div className="wrapper">
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" className="photo" />
                <div> <TextField required className="inputs" id="standard-basic" label="Add Name" variant="standard" value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} /></div>
                <div> <TextField required className="inputs" id="standard-basic" label="Add Password" variant="standard" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} /></div>
                <div> <Button className="button" onClick={handleClick} variant="contained" >LogIn</Button></div>
            </div>
        </div>
    )
}

export default LogIn;