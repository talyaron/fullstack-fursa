import './signup.scss'
import NavBar from '../../components/navbar/navbar'
import React, { useState } from 'react'
import { navigate }
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { signUpUser, getloginState } from '../../../app/reducer/userReducer'

function SignUp() {
    const [sigupState, setSigupnState] = useState({})
    const islog = useAppSelector(getloginState)
    const dispatch = useAppDispatch();
    async function handleSignup(e: any) {
        e.preventDefault();
        await dispatch(signUpUser(sigupState));

    }
    function onChangeSignup(e: any) {
        setSigupnState({
            ...sigupState,
            [e.target.name]: e.target.value,
        })
    }
    return (
        <div className="signup">
            <NavBar></NavBar>
            <div className="signup__main">
                <div className="signup__main__title">
                    <h3>Sign up</h3>
                </div>
                <div className="signup__main__form">
                    <form onSubmit={handleSignup}>
                        <TextField required name="name" label="Name" variant="standard" onChange={onChangeSignup} />
                        <TextField required name="email" label="Email" variant="standard" onChange={onChangeSignup} />
                        <TextField required name="password" label="Password" type="password" variant="standard" onChange={onChangeSignup} />
                        <TextField required name="phone" label="Phone" variant="standard" onChange={onChangeSignup} />
                        <TextField required name="location" label="Location" variant="standard" onChange={onChangeSignup} />
                        <FormControl style={{ marginTop: '1rem' }} size="small" >
                            <InputLabel id="gender"  >Gender</InputLabel>
                            <Select MenuProps={{
                                disableScrollLock: true,
                            }}
                                required
                                name="gender"
                                defaultValue=''
                                labelId="gender"
                                id="demo-simple-select"
                                label="Gender"
                                onChange={onChangeSignup}
                            >
                                <MenuItem value='female'>Female</MenuItem>
                                <MenuItem value='male'>Male</MenuItem>
                            </Select>
                        </FormControl>
                        <Button variant="contained" style={{ marginTop: '1rem' }} type="submit">Register</Button>
                    </form>
                </div>
            </div>
        </div>)
}

export default SignUp