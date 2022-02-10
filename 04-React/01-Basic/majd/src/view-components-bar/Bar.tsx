import { isPropertySignature } from "typescript";
import {useState} from 'react';

interface BarProp {
    title: string;
    subtitle: string;
  }
 

function Bar(prop: BarProp) {
 
  
    return (
       <button className="ibar"> <div> <img src={prop.subtitle} alt="" /></div> <p> {prop.title} </p> </button>
    );
  }
  
  export default Bar;
  