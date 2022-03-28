import * as React from 'react';
import { CircularProgress } from "@mui/material";
import { useEffect ,useState} from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { getUser } from "../../../features/user/userReducer"
import { fetchUserOrders, userOrders } from "../../../features/userOrders/UserOrders"
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
import './UserOrders.scss'

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
  
export function UserOrders(){
    const user=useAppSelector(getUser)
    const dispatch=useAppDispatch();
    useEffect(()=>{
        dispatch(fetchUserOrders())

    },[])    
    const orders=useAppSelector(userOrders)

    function Order(props: { order:any}) {
        const { order } = props;
        const [open, setOpen] = useState(false);
      
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
              <TableCell align="center">{order.orderStatus}</TableCell>

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
                          <TableCell style={{color:'green'}}>width</TableCell>
                          <TableCell style={{color:'green'}}>thick</TableCell>
                          <TableCell style={{color:'green'}}>color</TableCell>
                          <TableCell style={{color:'green'}}>details</TableCell>
                          <TableCell style={{color:'green'}}>amount</TableCell>


                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {order.order.map((historyRow:any) => (
                          <TableRow key={historyRow._id}>
                            <TableCell component="th" scope="row">
                              {historyRow.woodName}
                            </TableCell>
                            <TableCell>{historyRow.woodlength}</TableCell>
                            <TableCell>{historyRow.width}</TableCell>
                            <TableCell>{historyRow.thick}</TableCell>
                            <TableCell>{historyRow.color}</TableCell>
                            <TableCell>{historyRow.details}</TableCell>
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
             <header className='orderHistory_header'>
     <img className="orderHistory_header_logo" src="https://scontent.fhfa2-2.fna.fbcdn.net/v/t1.6435-9/191373428_5543723205668752_6758159996168278797_n.png?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Ye9yqhumfloAX9j7uvt&_nc_ht=scontent.fhfa2-2.fna&oh=00_AT-zBFq4ugSSvtQCdFkGcWIcgyV86E_gH8OVLGhZzFZLFQ&oe=625C6720" alt="" />
    <Navbar></Navbar>
     <h1 >Store</h1>
     <div className="orderHistory_header_cart">
       <Link to='/cart'>
     <img src="https://cdn4.iconfinder.com/data/icons/shopping-21/64/shopping-06-512.png" alt="" />
       </Link>
        </div>
        </header> 
        <div className="orderHistory_body">
 {orders.status!=='loading' ?
             
            <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
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
          </TableContainer>
               :  <div><CircularProgress color="secondary" />
                </div>}
                </div>
        </div>
    )
}