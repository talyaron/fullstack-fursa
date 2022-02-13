import { isPropertySignature } from "typescript";
import {useState} from 'react';
import { Link } from "react-router-dom";
interface BarProp {
    title: string;
    id: string;
  }
 

function Bar(prop: BarProp) {
  
  
    return (
       <button className="ibar">  <Link to={`${prop.id}`}> {prop.title} </Link> </button>
    );
  }
  
  export default Bar;
  