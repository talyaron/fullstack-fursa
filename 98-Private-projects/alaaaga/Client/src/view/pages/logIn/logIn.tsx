import './logIn.scss';
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Button, Card, CardActions, CardContent, CardHeader, TextField } from '@material-ui/core';



const handleSubmit = (event:any) => {
    //Prevent page reload
    console.log({event})
    event.preventDefault()
    
  

  };
 
 export default function Login  ()  {
     


return (
  <form  onSubmit={handleSubmit} noValidate autoComplete="off">
    <Card >
      <CardHeader title="Login App" />
      <CardContent>
        <div>
          <TextField
           
            fullWidth
            id="username"
            type="email"
            label="Username"
            placeholder="Username"
            margin="normal"
            
          />
          <TextField

            fullWidth
            id="password"
            type="password"
            label="Password"
            placeholder="Password"
            margin="normal"
            />
        </div>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          size="large"
          
         >
          Login
        </Button>
      </CardActions>
    </Card>
  </form>
);
}

