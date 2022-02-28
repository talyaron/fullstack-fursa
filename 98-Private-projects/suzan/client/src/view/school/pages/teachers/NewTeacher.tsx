import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import react, { useState } from 'react';
import SchoolResponsiveAppBar from '../../components/header/AppBar';
import './NewTeacher.scss';
import { Link } from 'react-router-dom';

export default function NewTeacher() {

    const defaultValues = {
        firstName: "",
        lastName: "",
        teacherId: "",
        phone: "",
        email: ""
    }
    const [formValues, setFormValues] = useState(defaultValues);

    function handleFirstName(ev: any) {
        console.log(ev.target.value);
        setFormValues({ ...formValues, firstName: ev.target.value });
    }

    function handleLastName(ev: any) {
        setFormValues({ ...formValues, lastName: ev.target.value });
    }

    function handleTeacherId(ev: any) {
        setFormValues({ ...formValues, teacherId: ev.target.value });
    }

    function handleEmail(ev: any) {
        setFormValues({ ...formValues, email: ev.target.value });
    }

    function handlePhone(ev: any) {
        setFormValues({ ...formValues, phone: ev.target.value });
    }

    function handleSubmit() {
        axios.post('http://localhost:3004/schoolTeachers', { 'info': formValues })
            .then(({ data }) => console.log(data));
    }

    return (
        <div className="container">
            <div className='bar'>
                <SchoolResponsiveAppBar></SchoolResponsiveAppBar>
            </div>

            <div className="body">
                <Typography sx={{ fontSize: 18 }} color="text.primary" gutterBottom className='instructions'>
                    Fill the teacher info to add him/her to the system
                </Typography>
                <Card sx={{ minWidth: 275 }} className='card'>
                    <CardContent className='card__content'>
                        <CardContent className='card__content__column'>
                            <CardContent>
                                <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
                                    first name:
                                </Typography>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Required"
                                    size='small'
                                    onKeyUp={handleFirstName}
                                />
                            </CardContent>
                            <CardContent>
                                <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
                                    teacher's id:
                                </Typography>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Required"
                                    size='small'
                                    onKeyUp={handleTeacherId}
                                />
                            </CardContent>

                            <CardContent>
                                <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
                                    email:
                                </Typography>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Required"
                                    size='small'
                                    onKeyUp={handleEmail}
                                />
                            </CardContent>

                        </CardContent>
                        <CardContent className='card__content__column'>
                            <CardContent>
                                <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
                                    last name:
                                </Typography>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Required"
                                    size='small'
                                    onKeyUp={handleLastName}
                                />
                            </CardContent>
                            <CardContent>
                                <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
                                    phone number:
                                </Typography>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Required"
                                    size='small'
                                    onKeyUp={handlePhone}
                                />
                            </CardContent>
                        </CardContent>
                    </CardContent>

                    {/* <CardActions className='actions'> */}
                    <Link to='../teachers'>
                        <Button variant="contained" size="large" onClick={handleSubmit}>Submit</Button>
                    </Link>

                    {/* </CardActions> */}

                </Card>
            </div>


        </div>

    );
}