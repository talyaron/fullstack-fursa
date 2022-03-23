import './signup.scss'
import NavBar from '../../components/navbar/navbar'
import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
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
    const navigate = useNavigate();
    useEffect(() => {
        if (islog) {
            console.log(islog);
            navigate("/");
        }
    }, [islog])
    function handleSignup(e: any) {
        e.preventDefault();
        dispatch(signUpUser(sigupState));
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
                    <h3>إنشاء حساب جديد</h3>
                </div>
                <div className="signup__main__form">
                    <form onSubmit={handleSignup}>
                        <TextField required name="name" label="الاسم" variant="standard" onChange={onChangeSignup} />
                        <TextField required name="email" label="البريد الالكتروني" variant="standard" onChange={onChangeSignup} />
                        <TextField required name="password" label="كلمة المرور" type="password" variant="standard" onChange={onChangeSignup} />
                        <TextField required name="phone" label="رقم الهاتف" variant="standard" onChange={onChangeSignup} />
                        <TextField required name="location" label="موقع الحادث" variant="standard" onChange={onChangeSignup} />
                        <FormControl style={{ marginTop: '1rem' }} size="small" >
                            <InputLabel id="gender">الهوية الجنسية</InputLabel>
                            <Select MenuProps={{
                                disableScrollLock: true,
                            }}
                                required
                                name="gender"
                                defaultValue=''
                                labelId="gender"
                                id="demo-simple-select"
                                label="الهوية الجنسية<"
                                onChange={onChangeSignup}
                            >
                                <MenuItem value='female'>انثى</MenuItem>
                                <MenuItem value='male'>ذكر</MenuItem>
                            </Select>
                        </FormControl>
                        <Button variant="contained" style={{ marginTop: '1rem' }} type="submit">تسجيل</Button>
                    </form>
                </div>
            </div>
        </div>)
}

export default SignUp
