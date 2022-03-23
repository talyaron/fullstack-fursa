import React, { useState } from 'react'
import { Grid, Paper, Avatar, TextField } from '@material-ui/core'
import { Link, useNavigate } from 'react-router-dom';
import ProminentAppBar from '../../Components/outsideHeader/header';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './signUp.scss';
import axios from 'axios';

const SignUp = () => {
    const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const marginTop = { marginTop: 5 }

    const nav = useNavigate();
    const [email, setEmail] = useState("");
    const [fullName, setFullName] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [city, setCity] = useState("");
    const [description, setDescription] = useState("");
    const [Url, setUrl] = useState("");

    async function handleClick() {
        try {
            const response = await axios.post('/org/signUp', {
                email: email, password: password, fullName: fullName,
                phone: phone, city: city, description: description, Url: Url
            });
            const { data } = response;
            if (data.ok) {
                console.log(data.message);
                nav('/');
            }
        } catch (error) {

        }
    }

    return (
        <Grid>
            <ProminentAppBar />

            <div className="signupPageContent">
                <div className="title">
                    <Typography
                        variant="h3"
                        component="div"
                    >
                        SignUp
                    </Typography>
                </div>

                <div className="form">
                    <TextField fullWidth label='Full Name' required placeholder="Enter your full name" onKeyUp={(e: any) => setFullName(e.target.value)} />
                    <TextField fullWidth label='Email' required placeholder="Enter your email" onKeyUp={(e: any) => setEmail(e.target.value)} />
                    <TextField fullWidth type="password" label='Password' required placeholder="Enter your password" onKeyUp={(e: any) => setPassword(e.target.value)} />
                    <TextField fullWidth type="password" label='Confirm Password' required placeholder="re-enter your password" />
                    <TextField fullWidth label='Phone Number' required placeholder="Enter your phone number" onKeyUp={(e: any) => setPhone(e.target.value)} />
                    <TextField fullWidth label='City' required placeholder="Enter your Address" onKeyUp={(e: any) => setCity(e.target.value)} />
                    <TextField fullWidth label='Description' required placeholder="Enter a Description" onKeyUp={(e: any) => setDescription(e.target.value)} />
                    <TextField fullWidth label='Web Url' placeholder="Enter your URL" onKeyUp={(e: any) => setUrl(e.target.value)} />
                    <Button className="signupBtn" variant="contained" onClick={handleClick}>Sign up</Button>
                </div>

                <div className="loginLink">
                    <Typography
                        fontSize='12'
                        // variant="h7"
                        component="div"
                        align='center'
                    >
                        <Link to='/login'>already have a account? login here</Link>
                    </Typography>
                </div>


            </div>


            {/* <Paper elevation={20} style={paperStyle}>
                <Grid  >
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineOutlinedIcon  />
                    </Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    </Grid>
                <form onSubmit={handelLink} >
                    <TextField fullWidth label='Name' required placeholder="Enter your name" />
                    <TextField fullWidth label='Email' required placeholder="Enter your email" />
                    <FormControl component="fieldset" required style={marginTop}>
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup aria-label="gender"  name="gender" style={{ display: 'initial' }}>
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                        </RadioGroup>
                    </FormControl>
                    <TextField fullWidth label='Phone Number' required placeholder="Enter your phone number" />
                    <TextField fullWidth type="password" label='Password' required placeholder="Enter your password"/>
                    <TextField fullWidth  type="password"  label='Confirm Password' required placeholder="Confirm your password"/>
                    <Button type='submit' onClick={handelLink}  variant='contained' color='primary'> Sign up</Button>
                   
                    </form>
            </Paper> */}
        </Grid>
    )
}

export default SignUp;