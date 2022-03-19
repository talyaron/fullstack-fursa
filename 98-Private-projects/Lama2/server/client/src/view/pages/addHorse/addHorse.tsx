import { Link } from "react-router-dom";
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './addHorse.scss';
import { useState, useEffect  } from 'react';
import axios from 'axios';

function AddHorse(){
  const [horse, sethorse] = useState([])

  useEffect(()=>{

    //fetch courses
  fetch('/horses/get-all-horses')
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      sethorse(data.offers);
    }).catch(err=>{
      console.error(err);
    })
  },[])

  function addhorse(ev: any) {
    ev.preventDefault();
    const form = ev.target;
   console.log({form})
    axios.post('/horses/add-new-horse', { name: form[0].value, cost: form[1].value, participants: form[2].value,lessons:form[3].value,hours:form[4].value})
      .then(data => {
        console.log(data);
      }).catch(err => {
        console.error(err);
      })
  }


    return(
        <div className="addHorse">
        <h3>add new horse</h3>
            <form className='formAddOffer' onSubmit={addhorse}>
          <input type="text" placeholder='insert offer name' name='horseName' />
          <input type="number" name="level" placeholder='insert horse"s level' />
          <input type="number" name="phone" placeholder='insert horse"s phone number' />
          <input type="double" name="age" placeholder='insert horse"s age' />
          {/* <button type='submit'>Add</button> */}
          <Button className='addbtn'  type="submit">Add</Button>
        </form>
        {/* <h1>courses</h1> */}
        {horse.map((t: any) => {
          return <p key={t._id}>{t.name}</p>
        })}

</div>
        
    );

}

export default AddHorse;