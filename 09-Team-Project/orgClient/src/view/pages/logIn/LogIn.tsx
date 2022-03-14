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
                        Login
                    </Typography>
                </div>

                <div className="form">
                    <TextField fullWidth label='Email' required placeholder="Enter your email" onKeyUp={(e:any) => setEmail(e.target.value)} />
                    <TextField fullWidth type="password" label='Password' required placeholder="Enter your password" onKeyUp={(e:any) => setPassword(e.target.value)} />
                    <Button className="loginBtn" variant="contained" onClick={hadleSubmit}>Sign in</Button>
                </div>

                <div className="loginLink">
                    <Typography
                        fontSize='12'
                        // variant="h7"
                        component="div"
                        align='center'
                    >
                        <Link to='/signUp'>Signup here</Link>
                    </Typography>
                    {orgUser.status === 'loading' ?
                        <div>Loading...</div> :
                        null
                    }
                </div>


            </div>
        </Grid>
    )
}

export default Login;


// import './logIn.scss';
// import React, { useEffect, useState } from 'react';
// import { Link } from "react-router-dom";
// import { useAppDispatch, useAppSelector } from '../../../app/hooks';
// import { AnyArray } from 'immer/dist/internal';
// import { useNavigate } from 'react-router-dom'
// import { fetchOrgUserAsync } from '../../../features/orgUser/orgUserReducer';
// import ProminentAppBar from '../../Components/outsideHeader/header';
// import { fontSize } from '@mui/system';



// function Login() {
//     const [ID, setID] = useState("");
//     const [password, setPassword] = useState("");
//     const nav = useNavigate();
//     const orgUser = useAppSelector(state => state.orgUser);
//     const dispatch = useAppDispatch();

//     function hadleSubmit(e: any) {
//         e.preventDefault();
//         dispatch(fetchOrgUserAsync({ email: ID, password: password }));
//     }


//     useEffect(() => {
//         if (JSON.stringify(orgUser.value.user) !== JSON.stringify({})) {
//             nav('/accidents')
//         }
//     })

//     return (
//         <div>
//             <ProminentAppBar />
//             <form className='warpper' onSubmit={hadleSubmit}>
//                 <div className="warrper_header">
//                     Login
//                 </div>
//                 <div className="email">
//                     <label>Email</label>
//                     <input type="email" name="email" placeholder='Email' onKeyUp={(e: any) => { setID(e.target.value) }} />
//                 </div>
//                 <div className="password">
//                     <label>Password</label>
//                     <input type="password" name="password" placeholder='Password' onKeyUp={(e: any) => { setPassword(e.target.value) }} />
//                 </div>
//                 <input type='submit' className='submit' value="Login" />
//                 {orgUser.status === 'loading' ?
//                     <div>Loading...</div> :
//                     null
//                 }
//             </form>
//         </div>
//     )
// }


// export default Login;