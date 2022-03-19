import { Link } from "react-router-dom";
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './addTrainer.scss';
import { useState, useEffect  } from 'react';
import axios from 'axios';

function AddTrainer(){
  const [trainer, setTrainer] = useState([])

  useEffect(()=>{

    //fetch courses
  fetch('/trainers/get-all-trainers')
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      setTrainer(data.offers);
    }).catch(err=>{
      console.error(err);
    })
  },[])

  function addTrainer(ev: any) {
    ev.preventDefault();
    const form = ev.target;
   console.log({form})
    axios.post('/trainers/add-new-trainer', { name: form[0].value, cost: form[1].value, participants: form[2].value,lessons:form[3].value,hours:form[4].value})
      .then(data => {
        console.log(data);
      }).catch(err => {
        console.error(err);
      })
  }


    return(
        <div className="addOffer">
        <h3>add new trainer</h3>
            <form className='formAddOffer' onSubmit={addTrainer}>
          <input type="text" placeholder='insert offer name' name='trainerName' />
          <input type="number" name="level" placeholder='insert trainer"s level' />
          <input type="number" name="phone" placeholder='insert trainer"s phone number' />
          <input type="double" name="age" placeholder='insert trainer"s age' />
          {/* <button type='submit'>Add</button> */}
          <Button className='addbtn'  type="submit">Add</Button>
        </form>
        {/* <h1>courses</h1> */}
        {trainer.map((t: any) => {
          return <p key={t._id}>{t.name}</p>
        })}

</div>
        
    );

}

export default AddTrainer;