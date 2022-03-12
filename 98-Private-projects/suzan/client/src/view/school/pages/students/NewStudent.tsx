import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import SchoolResponsiveAppBar from '../../components/header/AppBar';
import './NewStudent.scss';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function NewStudent() {
    const defaultValues = {
        firstName: "",
        lastName: "",
        father: "",
        mother: "",
        studentId: "",
        phone: "",
        fphone: "",
        mphone: "",
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

    function handleStudentId(ev: any) {
        setFormValues({ ...formValues, studentId: ev.target.value });
    }

    function handleFatherName(ev: any) {
        setFormValues({ ...formValues, father: ev.target.value });
    }

    function handleMotherName(ev: any) {
        setFormValues({ ...formValues, mother: ev.target.value });
    }

    function handleEmail(ev: any) {
        setFormValues({ ...formValues, email: ev.target.value });
    }

    function handlePhone(ev: any) {
        setFormValues({ ...formValues, phone: ev.target.value });
    }

    function handleFPhone(ev: any) {
        setFormValues({ ...formValues, fphone: ev.target.value });
    }

    function handleMPhone(ev: any) {
        setFormValues({ ...formValues, mphone: ev.target.value });
    }

    function handleSubmit() {
        axios.post('http://localhost:3004/schoolStudents', { 'info': formValues })
            .then(({ data }) => console.log(data));
    }

    return (
        <div>
            <div className='bar'>
                <SchoolResponsiveAppBar></SchoolResponsiveAppBar>
            </div>

            <div className="newStudentPageContent">
                <Typography sx={{ fontSize: 18 }} color="text.primary" gutterBottom className='instructions'>
                    Fill the student info to add him/her to the system
                </Typography>

                <Card sx={{ minWidth: 275 }} className='newStudentCard'>
                    <CardContent className='newStudentCard__content'>
                        <CardContent className='newStudentCard__content__column'>
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
                                    student's id:
                                </Typography>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Required"
                                    size='small'
                                    onKeyUp={handleStudentId}
                                />
                            </CardContent>

                            <CardContent>
                                <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
                                    father's name:
                                </Typography>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Required"
                                    size='small'
                                    onKeyUp={handleFatherName}
                                />
                            </CardContent>

                            <CardContent>
                                <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
                                    mother's name:
                                </Typography>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Required"
                                    size='small'
                                    onKeyUp={handleMotherName}
                                />
                            </CardContent>
                            <CardContent>
                                <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
                                    email:
                                </Typography>
                                <TextField
                                    id="outlined-required"
                                    label="Required"
                                    size='small'
                                    onKeyUp={handleEmail}
                                />
                            </CardContent>

                        </CardContent>
                        <CardContent className='newStudentCard__content__column'>
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
                            <CardContent>
                                <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
                                    father's phone:
                                </Typography>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Required"
                                    size='small'
                                    onKeyUp={handleFPhone}
                                />
                            </CardContent>
                            <CardContent>
                                <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
                                    mother's phone:
                                </Typography>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Required"
                                    size='small'
                                    onKeyUp={handleMPhone}
                                />
                            </CardContent>
                        </CardContent>
                    </CardContent>

                    {/* <CardActions className='actions'> */}
                    <div className="submitBtn">
                        <Link to='../students'>
                            <Button variant="contained" size="large" onClick={handleSubmit}>Submit</Button>
                        </Link>
                    </div>
                    {/* </CardActions> */}

                </Card>


            </div>


        </div>

    );
}