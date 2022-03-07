import { Button } from '@mui/material'
import './Emergency.scss'
export function Emergency(){
    

    return (
       <div className="emergency">
           <div className="emergency_header">
               <h1 >Emergency</h1>
               </div>
               <div className="emergency_body">
               <Button style={{ borderColor: "#eb4034", color: "#eb655b" }} variant="outlined">video</Button>
               <Button style={{ borderColor: "#eb4034", color: "#eb655b" }} variant="outlined">location</Button>
               <Button style={{ borderColor: "#eb4034", color: "#eb655b" }} variant="outlined">picture</Button>
               <Button style={{ borderColor: "#eb4034", color: "#eb655b" }} variant="outlined">voice call</Button>
               <Button style={{ borderColor: "#eb4034", color: "#eb655b" }} variant="outlined">report case</Button>


                 
               </div>
           </div> 
    )
}