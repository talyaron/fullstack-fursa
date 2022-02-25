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
import { useState , useEffect} from "react";
import  { Outlet,Link, useNavigate} from "react-router-dom";
import GroupDetails from '../GroupDetails/GroupDetails';
import ProductionQuantityLimitsSharpIcon from '@mui/icons-material/ProductionQuantityLimitsSharp';

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


  function handleColumnValue (id:string){
   console.log(id);

   }


export default function Mygroups() {
  useEffect(()=>{axios.get('http://localhost:3004/group/').then(({data})=>{
    //console.log(data);
    //console.log(data[0].id,data[0].groupMember);
 
    const arr:Array<any> = [
      {
        id: data[0].id,
        name: data[0].groupName
      },
      {
        id: data[1].id,
        name: data[1].groupName
      },

      {
        id: data[2].id,
        name: data[2].groupName
      }
      
    ]
    

    setRows(arr);
    console.log(rows);
    setGroup(data);

  })},[]);

  const [group,setGroup]=useState([]);
  const [rows,setRows]=useState<Array<any>>([]);

  let navigate = useNavigate();
 
  return (
    <div>
    <Header></Header>
     
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 300 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Group ID </StyledTableCell>
            <StyledTableCell align="center"> Group Name</StyledTableCell>
            <StyledTableCell align="center"> Actions </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell align="center" component="th" scope="row">
                {row.id}
              </StyledTableCell>
              <StyledTableCell align="center">{row.groupName}</StyledTableCell>
              <StyledTableCell align="center"> 
              <PeopleIcon onClick={()=>{
                navigate(`/mygroups/${row.id}`);
              }}> </PeopleIcon>
              <ProductionQuantityLimitsSharpIcon> </ProductionQuantityLimitsSharpIcon>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}