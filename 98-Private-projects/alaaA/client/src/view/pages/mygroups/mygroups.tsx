import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Header from '../../components/header/header';
import axios from 'axios';
import { useState , useEffect } from "react";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name: string, city: string, age: number) {
  return { name, city, age };
}

const rows = [
  createData('Majd Nassar','Araba',25),
  createData('Alaa ali aga', 'Sakhnin',25),
  createData('cristiano ronaldo','Portugal',37),
  createData('mohammad salah','Egybt',28),
  createData('karim benzema', 'france',33)
];
 
interface GroupMember {
  id: string;
}

interface group {
  id:string;
  groupName: string;
  groupMember: GroupMember[];
  }




export default function Mygroups() {
  

  const [group,setGroup]=useState([]);
  const[data_filter,setdata_filter]= useState([]);
 
  useEffect(()=>{axios.get('http://localhost:3004/group').then(({data})=>{
    console.log(data);
    setGroup(data);
    var data_filter = data.filter( (element: { id: string; }) => element.id =="1")
    console.log(data_filter)
    data.filter()
  
  })},[]);
 
  return (
    <div>
    <Header></Header>
 
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 300 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">FULL NAME</StyledTableCell>
            <StyledTableCell align="center">CITY</StyledTableCell>
            <StyledTableCell align="center">AGE</StyledTableCell>
            <StyledTableCell align="center">ACTIONS</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell align="center" component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="center">{row.city}</StyledTableCell>
              <StyledTableCell align="center">{row.age}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}