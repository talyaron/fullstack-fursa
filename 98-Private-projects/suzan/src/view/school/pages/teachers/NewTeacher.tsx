import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import react from 'react';
import SchoolResponsiveAppBar from '../../components/header/AppBar';
import './NewTeacher.scss';

export default function NewTeacher() {
    function handleSubmit() {

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
                                />
                            </CardContent>
                        </CardContent>
                    </CardContent>

                    <CardActions className='actions'>
                        <Button variant="contained" size="large">Submit</Button>
                    </CardActions>

                </Card>
            </div>


        </div>

    );
}