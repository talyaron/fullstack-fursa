import { isPropertySignature } from "typescript";
import {useState} from 'react';

interface BarProp {
    title: string;
    subtitle: string;
  }
 

function Bar(prop: BarProp) {
 
  
    return (
       <button className="ibar">  <p> {prop.title} </p> </button>
    );
  }
  
  export default Bar;
  