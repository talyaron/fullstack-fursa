import * as React from 'react';
import { CircularProgress, MenuItem, TextField } from "@mui/material";
import { useEffect ,useState} from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { getUser } from "../../../features/user/userReducer"
import { fetchUserOrders, getAllCheckOutOrders, userOrders } from "../../../features/userOrders/UserOrders"
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Collapse from '@mui/material/Collapse';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Navbar from '../../components/navbar/Navbar';
import {Link} from 'react-router-dom'
import axios from 'axios'
const orderStatus = [
    {
      value: 'pending',
      label: 'pending',
    },
  
    {
      value: 'ready',
      label: 'ready',
    },
    {
        value: 'order on the way',
        label: 'order on the way',
      }
  
  ];
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
  
export function ShowOrders(){
    const dispatch=useAppDispatch();
    useEffect(()=>{
        dispatch(getAllCheckOutOrders())

    },[])    
    const orders=useAppSelector(userOrders)

    function Order(props: { order:any}) {
        const { order } = props;
        const [open, setOpen] = useState(false);
        const [editStatus,setStatus]=useState(order.orderStatus)

        async function handleChange (event: React.ChangeEvent<HTMLInputElement>){
            const temp=event.target.value;
             setStatus(event.target.value);
            const {data} = await axios.patch('/order/update-checkout-order',{order,temp});
            console.log(data)
          };
        return (
          <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
              <TableCell>
                <IconButton
                  aria-label="expand row"
                  size="small"
                  onClick={() => setOpen(!open)}
                >
                  {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </IconButton>
              </TableCell>
              <TableCell component="th" scope="row">
                {order._id}
              </TableCell>
              <TableCell align="center">{order.date}</TableCell>
              <TableCell align="center">{order.paymentMethod}</TableCell>
              <TableCell align="center">{order.orderCollection}</TableCell>
              
              <TextField select name="order status" required placeholder="order status" style={{ backgroundColor: 'white', margin: '5px', borderRadius: '8px', width: '90%' }} value={editStatus} onChange={handleChange}> {orderStatus.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}</TextField>

            </TableRow>
            <TableRow>
              <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <Box sx={{ margin: 1 }}>
                    <Typography variant="h6" gutterBottom component="div">
                      Order History
                    </Typography>
                    <Table size="small" aria-label="purchases">
                      <TableHead>
                        <TableRow>
                          <TableCell style={{color:'green' }}>product name</TableCell>
                          <TableCell style={{color:'green'}}>length</TableCell>
                          <TableCell style={{color:'green'}}>amount</TableCell>


                        </TableRow>
                      </TableHead>
                      <TableBody >
                        {order.order.map((historyRow:any) => (
                          <TableRow key={historyRow._id}>
                            <TableCell component="th" scope="row">
                              {historyRow.woodName}
                            </TableCell>
                            <TableCell>{historyRow.woodlength}</TableCell>

                            <TableCell>{historyRow.amount}</TableCell>

                            {/* <TableCell>{historyRow.customerId}</TableCell>
                            <TableCell align="right">{historyRow.amount}</TableCell>
                            <TableCell align="right">
                              {Math.round(historyRow.amount * row.price * 100) / 100}
                            </TableCell> */}
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </Box>
                </Collapse>
              </TableCell>
            </TableRow>
          </React.Fragment>
        );
      }
    return(



        <div className='orderHistory'>
             
        <div className="orderHistory_body">
 {orders.status!=='loading' ?
              <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
            <Table aria-label="collapsible table"  >
              <TableHead>
                <TableRow>
                  <TableCell />
                  <TableCell style={{color:'green'}}>Order ID</TableCell>
                  <TableCell align="center"  style={{color:'green'}}>Date</TableCell>
                  <TableCell align="center" style={{color:'green'}}>Payment Method</TableCell>
                  <TableCell align="center" style={{color:'green'}}>Order Collection</TableCell>
                  <TableCell align="center" style={{color:'green'}}>status</TableCell>

                </TableRow>
              </TableHead>
              <TableBody>
                {orders.orders.map((order:any) => (
                  <Order key={order._id} order={order} />
                ))}
              </TableBody>
            </Table>
          </TableContainer></Paper>
               :  <div><CircularProgress color="secondary" />
                </div>}
                </div>
        </div>
    )
}