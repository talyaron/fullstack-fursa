import { useState } from "react";
import axios from "axios";

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

// function BasicAlerts() {
//   return (
//     <Stack sx={{ width: '100%' }} spacing={2}>
//       <Alert variant="filled" severity="error">
//         This is an error alert — check it out!
//       </Alert>
//       <Alert variant="filled" severity="warning">
//         This is a warning alert — check it out!
//       </Alert>
//       <Alert variant="filled" severity="info">
//         This is an info alert — check it out!
//       </Alert>
//       <Alert variant="filled" severity="success">
//         This is a success alert — check it out!
//       </Alert>
//     </Stack>
//   );
// }

 export default  function SignUp() {
  let nav = useNavigate();


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });

    const result = await axios.post('/users/add-user', { name:data.get('fullName'),email:  data.get("email"), password: data.get("password")});
        
      
           if(result.data === 'signup successful')
                nav('/');
            else {
              //  BasicAlerts();
                alert(result.data);
            }
          // console.log("signed up successfully")
          
   
        //  const user = useAppSelector(selectUser);

          //  nav(`/homePage`);
        
      
  };

  return (
    
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} >
                <TextField
                  autoComplete="given-name"
                  name="fullName"
                  required
                  fullWidth
                  id="fullName"
                  label="Full Name"
                  autoFocus
                />
              </Grid>
              {/* <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid> */}
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}










// async function handleAddOwner(ev: any) {
//   ev.preventDefault();
 
//    try {
//       const name = ev.target.elements.name.value;
//       const id = ev.target.elements.id.value;
//       console.log(name, id);
//       if (name && id) {
//         axios.post('/owenrs/add-owner',{id, name})
//         .then(({data})=>{
//           console.log(data)
//         })
//         .catch(err=>{
//           console.error(err)
//         })
//         ev.target.reset();
//       }
//     } catch (error) {
//       console.error(error)
//     }

// }


// async function handleAddUSER(ev: any) {
//   ev.preventDefault();
 
//    try {
//       const name = ev.target.elements.name.value;
//       const password = ev.target.elements.password.value;
//       const email = ev.target.elements.email.value;
//       console.log(name, password, email);
//       if (name && password && email) {
//         axios.post('/users/add-user',{name,password,email})
//         .then(({data})=>{
//           console.log(data)
//         })
//         .catch(err=>{
//           console.error(err)
//         })
//         ev.target.reset();
//       }
//     } catch (error) {
//       console.error(error)
//     }

// }
// function SignUp() {
//   // async function handleAdd(id:any){
//   //     console.log('Add')
//   //     const {data} = await axios.post('/add-user',{name:name,city:city,password:password});
//   //     console.log(data)
//   // }
//   return (
//     <div className="userCard">
//     <form onSubmit={handleAddOwner}>
//         <input type="text" name="name" placeholder="Name of Owner" />
//         <input type="text" name="id" placeholder="id of the woner" />
//         <button type="submit">ADD</button>
//       </form>

//           <form onSubmit={handleAddUSER}>
//         <input type="text" name="name" placeholder="Name of Owner" />
//         <input type="text" name="password" placeholder="password" />
//                <input type="text" name="email" placeholder="email" />
//         <button type="submit">ADD USER</button>
//       </form>
//     </div>
//   );
// }

// export default SignUp;


