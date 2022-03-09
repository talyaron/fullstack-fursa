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

  async function handleSearchByLocation(e:any){
    e.preventDefault();
    const a:any=await axios.post("/accidents/getAccidenstByLocation", {location:location});
    const v:any= await axios.get("/accidents/getAllAccidents");
    console.log(a);
    setAccidents(a);
  }

  return (
   <div>
    <input type="text" placeholder='Enter Location' onKeyUp={(e:any)=>{setLocation(e.target.value)}} />
    <button onClick={handleSearchByLocation}> search</button>
    
    {accidents.map((acc) => (
             <div>
            <div>{acc.emergency}</div>
            <div>{acc.date}</div>
            </div>
          ))}

        {/* {accidents.map((acc, index) => {
         
            <div key={index}>
            <div>{acc.type}</div>
            <div>{acc.emergency}</div>
            <div>{acc.date}</div>
            <div>{acc.description}</div>
            </div>
        })} */}
   </div>

  )

}

export default AccidenstByLocation;