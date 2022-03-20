import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import PeopleIcon from '@material-ui/icons/People';
import Paper from '@mui/material/Paper';
import Header from '../../components/header/header';
import axios from 'axios';
import { useState , useEffect } from "react";
import {useParams, useNavigate} from 'react-router-dom';
import './GroupDetails.scss';
import { Link } from '@material-ui/core';
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


 
interface GroupMember {
  id: string;
}

interface group {
  id:string;
  groupName: string;
  groupMember: GroupMember[];
  }

interface user{
    id: string,
    fullName: string,
    address: string,
    city: string,
    Email: string,
    phone: string
}


 

export default function GroupDetails() {
  const {id} = useParams();
  
  useEffect(()=>{axios.get(`http://localhost:3004/group/${id}`).then(({data})=>{
   
   const arr = [...data.groupMember];
   setGroupName(data.groupName);
   console.log(arr);
   setArr(arr)
   console.log('group name:',{groupName});
  })
  },[]);

  const [arr,setArr]=useState<Array<GroupMember>>([]);
  const [groupName,setGroupName]=useState("");
  let navigate = useNavigate();
 
  return (
    <div>
    <Header></Header>
    <div className='groupName'>{groupName}</div>
   
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 300 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center"> MemberID </StyledTableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {arr.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell align="center" component="th" scope="row" onClick={()=>{
                navigate(`/users/${row.id}`);
              }}>
                {row.id}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </div>
  );
}