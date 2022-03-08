import { Button } from '@mui/material'
import './Emergency.scss'
export function Emergency(){
    

    return (
       <div className="emergency">
           <div className="emergency_header">
               <h1 >Accident</h1>
               </div>
               <div className="emergency_body">
                   <input type='image' ></input>
               <Button style={{ borderColor: "#eb4034", color: "#eb655b" }} variant="outlined">confirm location</Button>
               <Button style={{ borderColor: "#eb4034", color: "#eb655b" }} variant="outlined">upload video</Button>
               <Button style={{ borderColor: "#eb4034", color: "#eb655b" }} variant="outlined">upload picture</Button>
               <Button style={{ borderColor: "#eb4034", color: "#eb655b" }} variant="outlined">voice call</Button>
               <Button style={{ borderColor: "#eb4034", color: "#eb655b" }} variant="outlined">report case</Button>
               <input type='text' placeholder='accident description'></input>
              


                 
               </div>
           </div> 
    )
}