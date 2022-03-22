import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const nav = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [type, setType] = useState('');

    function handleUsername(ev: any) {
        ev.preventDefault();
        setUsername(ev.target.value);
    }

    function handlePassword(ev: any) {
        ev.preventDefault();
        setPassword(ev.target.value);
    }

    function handleType(ev: any) {
        ev.preventDefault();
        setType(ev.target.value);
    }

    async function handleLogin() {
        if (username === '' || password === '' || type === '') {

        } else {
            const response = await axios.post('/user/login', {
                username: username,
                password: password,
                type: type
            });

            if (response.data.loginStatus) {
                console.log('logged in successfully')
                // alert("login succsess");
                // nav('/classes');
                switch (type) {
                    case 'school':{
                        nav('/classes');
                        break;
                    }
                    case 'student':{
                        nav('/studentUser/myclass')
                        break;
                    }
                }
            } else {
                console.log('log in failed')
                alert("one or more of the data you insert is wrong, check it");
            }
        }

    }

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };


    return (
        <div>
            <FormControl>
                <FormLabel id="demo-controlled-radio-buttons-group">user type:</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={type}
                    onChange={handleType}
                >
                    <FormControlLabel value="school" control={<Radio />} label="school" />
                    <FormControlLabel value="teacher" control={<Radio />} label="teacher" />
                    <FormControlLabel value="student" control={<Radio />} label="student" />

                </RadioGroup>
            </FormControl>
            <TextField
                required
                label="username"
                onKeyUp={handleUsername}
            />
            <OutlinedInput
                required
                label="password"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                        >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                }
                onKeyUp={handlePassword}
            />

            <Button variant="contained" onClick={handleLogin}>LogIn</Button>
        </div>
    );
}