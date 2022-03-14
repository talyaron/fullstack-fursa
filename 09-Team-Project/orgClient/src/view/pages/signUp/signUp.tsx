import React from 'react'
import { Grid, Paper, Avatar, TextField } from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Link } from 'react-router-dom';
import ProminentAppBar from '../../Components/outsideHeader/header';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './signUp.scss';

const signUp = () => {
    const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const marginTop = { marginTop: 5 }
    function handleClick() {

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
                    <TextField fullWidth label='full name' required placeholder="Enter your full name" />
                    <TextField fullWidth label='Email' required placeholder="Enter your email" />
                    <TextField fullWidth label='password' required placeholder="Enter your password" />
                    <TextField fullWidth label='confirm password' required placeholder="re-enter your password" />
                    <TextField fullWidth label='Phone Number' required placeholder="Enter your phone number" />

                    <Button className="signupBtn" variant="contained" onClick={handleClick}>Sign up</Button>
                </div>

                <div className="loginLink">
                    <Typography
                        fontSize='12'
                        // variant="h7"
                        component="div"
                        align='center'
                    >
                        already have a account? login here
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

export default signUp;