import { Link } from "react-router-dom";
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './addOffer.scss';
import { useState, useEffect  } from 'react';
import axios from 'axios';

function AddOffer(){
  const [offers, setOffers] = useState([])

  useEffect(()=>{

    //fetch courses
  fetch('/offers/get-all-offers')
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      setOffers(data.offers);
    }).catch(err=>{
      console.error(err);
    })
  },[])

  function addOffer(ev: any) {
    ev.preventDefault();
    const form = ev.target;
   console.log({form})
    axios.post('/offers/add-new-offer', { name: form[0].value, cost: form[1].value, participants: form[2].value,lessons:form[3].value,hours:form[4].value})
      .then(data => {
        console.log(data);
      }).catch(err => {
        console.error(err);
      })
  }


    return(
        <div className="addOffer">
        <h3>add new offer</h3>
            <form className='formAddOffer' onSubmit={addOffer}>
          <input type="text" placeholder='insert offer name' name='offerName' />
          <input type="number" name="cost" placeholder='insert offer"s cost' />
          <input type="number" name="participants" placeholder='insert participants number' />
          <input type="double" name="hours" placeholder='how much hours' />
          {/* <button type='submit'>Add</button> */}
          <Button className='addbtn'  type="submit">Add</Button>
        </form>
        {/* <h1>courses</h1> */}
        {offers.map((offer: any) => {
          return <p key={offer._id}>{offer.name}</p>
        })}

</div>
        
    );

}

export default AddOffer;