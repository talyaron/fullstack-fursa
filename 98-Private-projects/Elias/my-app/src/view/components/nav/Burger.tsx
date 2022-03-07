import React,{useState} from 'react';
import './Burger.scss';
import Leftnav from './Leftnav';



const Burger = () => {
    const [Open,setOpen]=useState(false);


    if (!Open)
        return (
            <div>
    <div className="StyledBurger" onClick={()=>setOpen(!Open)} >
        <div className="lineclosed"></div>
        <div className="lineclosed"></div>
        <div className="lineclosed"></div>
    </div>
    <Leftnav Open={Open}/>
    </div>
  )
  else
  return (<div>
    <div className="StyledBurger" onClick={()=>setOpen(!Open)} >
    <div className="lineOpned"></div>
    <div className="lineOpned"></div>
     <div className="lineOpned"></div>
</div>
<Leftnav Open={Open}/>
</div>)
}

export default Burger;