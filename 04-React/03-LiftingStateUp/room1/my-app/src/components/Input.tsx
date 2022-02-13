import React from 'react'
import { useState } from 'react'
import '../components/Input.scss';





function Input() {
    const [Sentance,setSentance]=useState('');
const [Arrinput, SetArrinput] = useState<
Array<{value: string}>>([])

function handleChange(e:any){
    setSentance(e.target.value);
}


function handelClick(){
    if(Sentance){
        SetArrinput((Arrinput) => [...Arrinput, {value: Sentance }])

    }
    console.log(Arrinput);

} 
  return (
    <div><div className='ResMessage'>{Arrinput.map((elemnent,index)=>{return<div key={index}>{elemnent.value}</div>})}</div>
        <input  onChange={handleChange} type="text" />
    <button onClick={handelClick}>Send</button>
    </div>
  )
}

export default Input;