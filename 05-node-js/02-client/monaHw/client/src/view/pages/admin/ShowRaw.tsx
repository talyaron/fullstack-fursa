import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { raw } from "express";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { getRawAsync, selectRow } from "../../../features/raw/Raw";
import { RawCard } from "../../components/rawCard/RawCard";

import './ShowRaw.scss'
export function ShowRaw() {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getRawAsync())

    }, [])
    const raws = useAppSelector(selectRow);
    const [edit, setEdit] = useState(false)
    return (
    //     <Paper sx={{ width: '100%', overflow: 'hidden' }}>
    //     <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
    //   <Table sx={{ minWidth: 650 }} aria-label="simple table">
    //     <TableHead>
    //       <TableRow>
    //         <TableCell>Raw Details</TableCell>
            
    //       </TableRow>
    //     </TableHead>
    //     <TableBody>

    //     {raws.raws.map((raw:any)=>{
    //             return(
    //             <RawCard key={raw._id} raw={raw}></RawCard>
                
    //             );
    //         })}
    //     </TableBody>


    //   </Table>
    // </TableContainer></Paper>

        <div  className="showRaw" style={{ width:'auto'}}>

            {raws.raws.map((raw:any)=>{
                return(
                <RawCard key={raw._id} raw={raw}></RawCard>
                
                );
            })}

        </div>
    )

}