import { Button, MenuItem, TextField } from '@mui/material'
import { useState } from 'react';
import './Emergency.scss'

export function Emergency(){
    const [type, setType] =useState('harassment');
    const [image,setImage]=useState<Array<any>>([]);

    const accidentType=[
        {
            value:'emergency',
            label:'emergency'
        },
        {
            value:'harassment',
            label:'harassment'
        },
        {
            value:'home violence',
            label:'home violence'

        },
        {
            value:' violence event',
            label:' violence event'

        }

    ];
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setType(event.target.value);
      };
     function selectfileHandler(ev:any){
        setImage(ev.target.files[0].name)
        console.log(ev.target.files[0].name)
      }
    return (
       <div className="emergency">
           <div className="emergency_header">
               <h1 >Accident</h1>
               </div>
               <div className="emergency_body">
               <TextField
          select  
          label="Select accident type"
          value={type}
          onChange={handleChange}
        >
          {accidentType.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
                   <input type='file' onChange={selectfileHandler}></input>
                   <input type='location' placeholder='add location'></input>
               {/* <Button style={{ borderColor: "#eb4034", color: "#eb655b" }} variant="outlined">confirm location</Button>
               <Button style={{ borderColor: "#eb4034", color: "#eb655b" }} variant="outlined">upload video</Button>
               <Button style={{ borderColor: "#eb4034", color: "#eb655b" }} variant="outlined">upload picture</Button>
               <Button style={{ borderColor: "#eb4034", color: "#eb655b" }} variant="outlined">voice call</Button>
               <Button style={{ borderColor: "#eb4034", color: "#eb655b" }} variant="outlined">report case</Button> */}
               <input type='text' placeholder='accident description'></input>
               
                 

                 
               </div>
           </div> 
    )
}