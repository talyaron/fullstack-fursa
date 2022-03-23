import React, { useEffect, useState } from 'react'
import { Grid, Paper, Avatar, TextField } from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Link, useNavigate } from 'react-router-dom';
import ProminentAppBar from '../../Components/outsideHeader/header';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './logIn.scss';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { fetchOrgUserAsync } from '../../../features/orgUser/orgUserReducer';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const nav = useNavigate();
    const orgUser = useAppSelector(state => state.orgUser);
    const dispatch = useAppDispatch();

    function hadleSubmit(e: any) {
        e.preventDefault();
        dispatch(fetchOrgUserAsync({ email: email, password: password }));
    }


    useEffect(() => {
        if (JSON.stringify(orgUser.value.user) !== JSON.stringify({})) {
            nav('/accidents')
        }
    })


    return (
        <Grid>
            <ProminentAppBar />

            <div className="signupPageContent">
                <div className="title">
                    <Typography
                        variant="h3"
                        component="div"
                    >
                        تسجيل الدخول
                    </Typography>
                </div>

                <div className="form">
                    <TextField fullWidth label='Email' required placeholder="ادخل البريد الالكتروني" onKeyUp={(e:any) => setEmail(e.target.value)} />
                    <TextField fullWidth type="password" label='Password' required placeholder="ادخل كلمة المرور" onKeyUp={(e:any) => setPassword(e.target.value)} />
                    <Button className="loginBtn" variant="contained" onClick={hadleSubmit}>Sign in</Button>
                </div>

                <div className="loginLink">
                    <Typography
                        fontSize='12'
                        // variant="h7"
                        component="div"
                        align='center'
                    >
                        <Link to='/signUp'>تسجيل الدخول من هنا</Link>
                    </Typography>
                    {orgUser.status === 'loading' ?
                        <div>جار التحميل...</div> :
                        null
                    }
                </div>


            </div>
        </Grid>
    )
}

export default Login