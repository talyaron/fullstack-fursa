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
import { useAppSelector } from '../../../app/hooks';
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

interface cart {
  id:string,
  name: string,
  price: number,
  catagory: string,
  quantity: number,
  description: string,
  Url:string
  }

interface order{
    orderId: string,
    orderOwnerId: string,
    groupId: string,
    cartProducta: cart,
}

// "order": [
//     {
//       "orderId": 1,
//       "orderOwnerId": "314712345",
//       "groupId": 1,
//       "cartProducta": [
//         {
//           "id": 5,
//           "name": "Watemilon",
//           "price": 25,
//           "catagory": "fruits vegetables",
//           "quantity": 0,
//           "description": "price per KG",
//           "Url": "data:image/jpeg;base64,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"
//         },
 

export default function MyOrders() {
  const user = useAppSelector(state=> state.user)
  const {groupId} = useParams();
  useEffect(()=>{axios.get(`http://localhost:3004/order?groupId=${groupId}&orderOwnerId${user.ID}`).then(({data})=>{
      console.log(data);
   const arr = [...data];
   setArr(data);
   setArr(arr)
  })
  },[]);

  const [arr,setArr]=useState<Array<order>>([]);
  let navigate = useNavigate();
 
  return (
    <div>
    <Header></Header>
    <div className='groupName'>{user.ID}</div>
   
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 300 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center"> productID </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {arr.map((row) => (
            <StyledTableRow key={row.orderId}>
              <StyledTableCell align="center" component="th" scope="row">
                {row.orderId}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </div>
  );
}