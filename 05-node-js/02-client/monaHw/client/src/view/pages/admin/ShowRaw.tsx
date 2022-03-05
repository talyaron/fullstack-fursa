import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { getRawAsync, selectRow } from "../../../features/raw/Raw";
import './ShowRaw.scss'
export function ShowRaw()
{
    const dispatch=useAppDispatch()
  useEffect(()=>{
    dispatch(getRawAsync())

},[])
const raws=useAppSelector(selectRow);
const [edit,setEdit]=useState(false)
return(
    <div className="showRaw">
    {raws.raws.map((raw:any)=>{
    const{name,imageUrl,pricePerMeter}=raw;
    
          return(<div><p> {name},{pricePerMeter}</p> <button>edit</button> <button>remove</button></div> )
        
          
        })}
        </div>
);

}