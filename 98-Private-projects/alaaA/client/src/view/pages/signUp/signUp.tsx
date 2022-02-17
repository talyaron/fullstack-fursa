import React from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from 'react-router-dom';
const signUp = () => {
    const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const marginTop = { marginTop: 5 }
    function handelSubmit(){

    }
    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid>
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineOutlinedIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    </Grid>
                <form onSubmit={handelSubmit}>
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
                    <TextField fullWidth label='Password' required placeholder="Enter your password"/>
                    <TextField fullWidth label='Confirm Password' required placeholder="Confirm your password"/>
                    <Link to="/Group">
                    <Button type='submit'  variant='contained' color='primary'>Sign up</Button>
                    </Link>
                </form>
            </Paper>
        </Grid>
    ) 
}

export default signUp;