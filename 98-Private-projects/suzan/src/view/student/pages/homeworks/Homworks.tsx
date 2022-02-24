import react from 'react-router-dom';
import StudentResponsiveAppBar from '../../components/header/StudentAppBar';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Homeworks.scss';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import axios from 'axios';

// const homeworks = [
//     { date: '20.2.2022', course: 'Math', description: 'questions from 1 to 15 page 225' },
//     { date: '20.2.2022', course: 'Arabic', description: 'reading page 25' },
//     { date: '18.2.2022', course: 'Science', description: 'question 3+4 page 15' },
//     { date: '15.2.2022', course: 'Math', description: 'questions 20-25 page 333' }
// ]

export default function StudentHomeworks() {
    const [homeworks, setHomeworks] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3004/homeworks').then(({ data }) => {
            console.log(data);
            setHomeworks(data);
        })
    }, []);

    return (
        <div>
            <div className="bar">
                <StudentResponsiveAppBar></StudentResponsiveAppBar>
            </div>

            <div className="subContainer">


                <div className="homeworksTable">

                    <Divider className='divider'>
                        <Typography variant='h5' >HOMEWORKS</Typography>
                    </Divider>

                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">Date</TableCell>
                                    <TableCell align="center">Course</TableCell>
                                    <TableCell align="center">description</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    homeworks.map((homework, i) => {
                                        const { date, course, description } = homework;
                                        return (
                                            <TableRow
                                                key={i}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell align="center" component="th" scope="row">
                                                    {date}
                                                </TableCell>
                                                <TableCell align="center">{course}</TableCell>
                                                <TableCell align="center">{description}</TableCell>
                                            </TableRow>
                                        );
                                    })
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </div>
    );
}