import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import React, { useEffect, useState } from 'react'
import Menu from '../../components/menu/menu'
import { faAddressBook } from "@fortawesome/free-regular-svg-icons"
import { signUpRestaurateur } from '../../../app/reducers/userReducer'
import './addRestaurateur.scss'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { checkUser } from '../../../app/reducers/userReducer'
import { useNavigate } from 'react-router-dom'


function AddRestaurateur() {
    const [sigupState, setSigupnState] = useState({})
    const ifUserLogIn = useAppSelector(checkUser)
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    useEffect(() => {
        if (ifUserLogIn == false)
            navigate('/')
    }, []);
    function onChangeSignup(e: any) {
        setSigupnState({
            ...sigupState,
            [e.target.name]: e.target.value,
        })
    }
    function handleSignup(e: any) {
        e.preventDefault();
        dispatch(signUpRestaurateur(sigupState))
    }

    return (
        <div className='addRestaurateur'>
            <Menu />
            <div className='addRestaurateur__content'>
                <div className="addRestaurateur__content__window">
                    <div className="addRestaurateur__content__window__left">
                    </div>
                    <div className="addRestaurateur__content__window__right">
                        <h3>Add Restaurateur</h3>
                        <div className="addRestaurateur__content__window__right__fa">
                            <FontAwesomeIcon icon={faAddressBook} />
                        </div>
                        <form onSubmit={handleSignup}>
                            <TextField required name="fName" label="First Name" variant="standard" onChange={onChangeSignup} />
                            <TextField required name="lName" label="Last Name" variant="standard" onChange={onChangeSignup} />
                            <TextField required name="email" label="Email" variant="standard" onChange={onChangeSignup} />
                            <TextField required name="password" label="Password" type="password" variant="standard" onChange={onChangeSignup} />
                            <TextField required name="phone" label="Phone" variant="standard" onChange={onChangeSignup} />
                            <FormControl fullWidth style={{ marginTop: '1rem', maxWidth: "12.3rem" }} size="small" >
                                <InputLabel id="region"  >Region</InputLabel>
                                <Select MenuProps={{
                                    disableScrollLock: true,
                                }}
                                    required
                                    name="region"
                                    defaultValue=''
                                    labelId="region"
                                    id="demo-simple-select"
                                    label="Region"
                                    onChange={onChangeSignup}
                                >
                                    <MenuItem value='Israel'>Israel</MenuItem>
                                    <MenuItem value='USA'>USA</MenuItem>
                                    <MenuItem value='UK'>UK</MenuItem>
                                </Select>
                            </FormControl>
                            <Button fullWidth variant="contained" style={{ marginTop: '1rem', maxWidth: "12.3rem" }} type="submit">Register</Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddRestaurateur