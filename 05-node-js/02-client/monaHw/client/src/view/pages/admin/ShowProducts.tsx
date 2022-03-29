import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { getAllProducts, getProductsAsync } from '../../../features/product/relatedProductReducer';
import { useEffect, useState } from 'react';
import { TextField } from '@mui/material';
import axios from 'axios'
import { parseIsolatedEntityName } from 'typescript';
export function ShowProducts(){
    const dispatch=useAppDispatch()
    useEffect(()=>{
        dispatch(getProductsAsync())
    },[])   
    const products=useAppSelector(getAllProducts)
  

   function Card(props: { product:any})
   {
    const {product}=props
    const [editAmount,setEditAmount]=useState(product.amount)
    async function handleChange(event: React.ChangeEvent<HTMLInputElement>)
    {
        setEditAmount(event.target.value)
       const temp=event.target.value;
       const {data} = await axios.patch('/product/update-product-stock',{name:product.name,amount:temp});
       console.log(data)
    }
    return(
        <TableRow
        key={product.name}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          {product.name}
        </TableCell>
        <TableCell align="center">{product.type}</TableCell>
        <TextField  name="amount in stock" required placeholder="amount in stock" style={{ backgroundColor: 'white', margin: '5px', borderRadius: '8px', width: '40%' }} value={editAmount} onChange={handleChange}>
      </TextField>              
      <TableCell align="center">{product.price}</TableCell>
        
      </TableRow>
    )
   }
    return(
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="center"  style={{color:'green'}}>Type</TableCell>
            <TableCell align="center" style={{color:'green'}}>amount</TableCell>
            <TableCell align="center" style={{color:'green'}}>price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

          {products.map((product:any) => (
        <Card key={product._id} product={product} />

        //     <TableRow
        //       key={product.name}
        //       sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        //     >
        //       <TableCell component="th" scope="row">
        //         {product.name}
        //       </TableCell>
        //       <TableCell align="center">{product.type}</TableCell>
        //       <TextField  name="amount in stock" required placeholder="amount in stock" style={{ backgroundColor: 'white', margin: '5px', borderRadius: '8px', width: '40%' }} value={product.amount} onChange={async (ev:any)=>
        //    { const temp=ev.target.value;
        //     const {data} = await axios.patch('/product/update-product-stock',{name:product.name,amount:temp});
        //       }}> 
              
        //     </TextField>              
        //     <TableCell align="center">{product.price}</TableCell>
              
        //     </TableRow>
          ))}
        </TableBody>


      </Table>
    </TableContainer></Paper>
    )
}