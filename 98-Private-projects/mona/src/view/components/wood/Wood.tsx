import { useState } from "react";
import './Wood.scss';
interface WoodProp{
    title:string;
}
function Wood(prop:WoodProp){
    const [searchtxt,setsearchtxt]=useState('')
    const [blur,setblur]=useState('')
    const [focus,setfocus]=useState('')


    function searchandler(ev:any){
        setsearchtxt(ev.target.value)
    }
    function focusFunc(){
        setblur('rgb(196,196,196)')

    }
    function blurFunction(){
        setfocus('yellow')

    }
    return(
    <div className="wood">
        <div className="wood_title">
        <img src={prop.title} alt="" />
        <input onKeyUp={searchandler} type="search" onFocus={focusFunc} onBlur={blurFunction} 
        
        />
        
        </div>
        <p>searching for: </p>
        <p>{searchtxt}</p>
        </div>
        
      
   
    );
}
export default Wood
 