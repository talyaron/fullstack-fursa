import React, { useState } from 'react'
import axios from 'axios';

import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';
import '../accidentsInfo/AccidentsInfo.scss';
import './accidentsByLocation.scss';






const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
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

function AccidenstByLocation() {

  
  interface Accident{
  _id:string,
  type: string,
  emergency : boolean,
  date: string,
  description: string,
}
  const [location,setLocation] = useState("");
  const [accidents,setAccidents]=useState<Array<Accident>>([]);

  async function handleSearchByLocation(e:any){
    e.preventDefault();
    let a:any=await axios.post("/accidents/getAccidenstByLocation", {location:location});
    const v:any= await axios.get("/accidents/getAllAccidents");
    console.log(a);
    console.log(a.data.accidents);
    setAccidents(a.data.accidents);
  }
  return (
   <div>
      <div className='menu'>
        <HomeIcon sx={{ paddingLeft: '20px', fontSize: 35, paddingTop: '10px' }} />
        <SettingsIcon sx={{ float: 'right', fontSize: 35, paddingRight: '20px', paddingTop: '10px' }} />
      </div>
    <div className='SearchBar'>

    <SearchIcon/>
    <input type="text" placeholder='search by location' onKeyUp={(e:any)=>{setLocation(e.target.value)}} />

    <button className='searchBtn' onClick={handleSearchByLocation}> Go </button>
    
    </div>
    
    <TableContainer className="table" component={Paper}>
      <Table sx={{ minWidth: 300 }} aria-label="customized table">
        <TableHead>
          <TableRow>
          <StyledTableCell align="center"> </StyledTableCell>
            <StyledTableCell align="center">ACCIDENT ID </StyledTableCell>
            <StyledTableCell align="center"> ACCIDENT type</StyledTableCell>
            <StyledTableCell align="center"> ACCIDENT DATE </StyledTableCell>
            <StyledTableCell align="center"> ACCIDENT ESCRIPTION </StyledTableCell>
      
          </TableRow>
        </TableHead>
        <TableBody>
        {accidents.map((row) => (
            <StyledTableRow key={row._id}>
              
              <StyledTableCell align="center"> 
              <NotificationImportantIcon></NotificationImportantIcon>
              </StyledTableCell>

              <StyledTableCell align="center" component="th" scope="row">
                {row._id}
              </StyledTableCell>
              
              <StyledTableCell align="center">{row.type}</StyledTableCell>
              <StyledTableCell align="center">{row.date}</StyledTableCell>
              <StyledTableCell align="center"> 
              {row.description}
              </StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    
   
    {/* {accidents.map((accident, index) => {
          return (
            <div key={index}>
            <p >id: {accident._id} type:{accident.type} date:{accident.date} description:{accident.description}  </p> 
            </div>
          );
        })} */}

   

   </div>

  );

}

export default AccidenstByLocation;