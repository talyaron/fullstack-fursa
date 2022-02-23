import StudentResponsiveAppBar from "../../components/header/StudentAppBar";
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './StudentExams.scss';

const exams = [
    { course: "English", material: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { course: "Math", material: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' }
]

export default function StudentExams() {
    const [selectedDate, setSelectedDate] = useState<Date | null>(
        new Date(),
    );

    const handleChange = (newValue: Date | null) => {
        setSelectedDate(newValue);
    };


    return (
        <div>
            <div className="bar">
                <StudentResponsiveAppBar></StudentResponsiveAppBar>
            </div>

            <div className="subContainer">



                <div className="calendarAndExams">
                    <div className="calendar">
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DesktopDatePicker
                                inputFormat="MM/dd/yyyy"
                                value={selectedDate}
                                onChange={handleChange}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </div>

                    <div className="examsTable">
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center">Course</TableCell>
                                        <TableCell align="center">description</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {exams.map((exam, i) => (
                                        <TableRow
                                            key={i}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell align="center">{exam.course}</TableCell>
                                            <TableCell align="center">{exam.material}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </div>
            </div>

        </div>
    );
}