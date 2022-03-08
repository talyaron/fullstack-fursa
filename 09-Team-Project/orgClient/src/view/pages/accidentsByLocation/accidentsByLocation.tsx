import React, { useState } from 'react'
import axios from 'axios';

 

function AccidenstByLocation() {
  
  interface Accident{
  type: string,
  emergency : boolean,
  date: string,
  description: string,
}
  const [location,setLocation] = useState("");
  const [accidents,setAccidents]=useState<Array<Accident>>([]);
  function handleSearchByLocation(e:any){
    e.preventDefault();
    const a:any =axios.get("/getAccidents/getAccidenstByLocation");
    setAccidents(a);

  }

  return (
   <div>
    <input type="text" placeholder='Enter Location' onKeyUp={(e:any)=>{setLocation(e.target.value)}}> </input>
    <button onClick={handleSearchByLocation}>search</button>
    <div>
        {accidents.map((acc, index) => {
          return (
            <div key={index}>
            <div>{acc.type}</div>
            <div>{acc.emergency}</div>
            <div>{acc.date}</div>
            <div>{acc.description}</div>
            </div>
          );
        })}
      </div>

   </div>
  )

}

export default AccidenstByLocation;