import {useEffect} from 'react';
import axios from 'axios';
import logo from '../../../logo.svg';
import './adminpage.scss';
import { useState } from "react";
import JsonData from '../../../../db.json';
// import 'db.json';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import ButtonGroup from '@mui/material/ButtonGroup';


function AdminPage() {
  

  return (
      
 <div>
     <p>aaaaaaaaaaaaaa</p>
     <Link to={`/data`}>
   <Button className='backbtn' variant="outlined" > manage courses</Button>
  </Link>

  <Link to={`/admincourses`}>
   <Button className='backbtn' variant="outlined" > manage participants in courses</Button>
  </Link>

      
        </div>
  );
}

export default AdminPage;
