import { isPropertySignature } from "typescript";
import {useState} from 'react';
import {Outlet} from 'react-router-dom'
import { Link } from "react-router-dom";
interface BarProp {
    title: string;
    id: string;
  }
 

function Bar(prop: BarProp) {
  
  
    return (
       <Link to={`${prop.id}`}> {prop.title} </Link>  
    );
    
  }
  
  export default Bar;
  