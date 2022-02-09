import { useState } from "react";
import './Wood.scss';
interface WoodProp{
    title:string;
}
function Wood(prop:WoodProp){
    const [searchtxt,setsearchtxt]=useState('')
    const [color,setcolor]=useState('rgb(196,196,196)')


    function searchandler(ev:any){
        setsearchtxt(ev.target.value)
    }
    function focusFunc(){
        setcolor('yellow')

    }
    function blurFunction(){
        setcolor('rgb(196,196,196)')

    }
    return(
    <div className="wood">
        <div className="wood_title">
        <img src={prop.title} alt="" />
        <input onKeyUp={searchandler} type="search" onFocus={focusFunc} onBlur={blurFunction} style={{backgroundColor:color}} 
        
        />
        
        </div>
        <p>searching for: </p>
        <p>{searchtxt}</p>
        </div>
        
      
   
    );
}
export default Wood
 