import { useState } from "react";
import axios from "axios";
import { useAppDispatch } from "../../../app/hooks";
import { getRawAsync } from "../../../features/raw/Raw";
import AddIcon from '@mui/icons-material/Add';
import { Alert, Box, Button } from "@mui/material";

export function RawCard(props:any){
    const dispatch=useAppDispatch();
    const {raw}=props
    const[edit,setEdit]=useState(false);
    const [lengths, setLength] = useState<Array<Number>>([]);
    const [currentLen, setCurrentLength] = useState(0);
    const [show,setShow]=useState('none')
    const [name,setName]=useState('')
    async function handleUpdate(ev:any){
        ev.preventDefault();
        const id = ev.target.id
        console.log(id)
        const name = ev.target.elements.name.value;
        const amount=ev.target.elements.amount.value
        const pricePerMeter = ev.target.elements.price.value*(raw.width/100)*(raw.thick/100);    
       const {data} = await axios.patch('/raw/update-raw',{name, pricePerMeter,lengths, id});
       console.log(data)
       axios.patch('/raw/update-raw-stock',{name:name,amount:amount})
       setShow('block')
     
    }
    function handleEdit() {
        setEdit(!edit);
      }
      async function handelDelete(id:any){
        const { data } = await axios.post('/raw/delete-raw', { id: id })
        dispatch(getRawAsync())

      }
       
function addLengthHandler(ev:any)
{
  setLength([...lengths, currentLen]);
  console.log(lengths)

}
    return(
        <div className="rawCard" style={{display:'flex',flexDirection:'column'}}>
            {edit?(<form onSubmit={handleUpdate} id={raw._id}>
                <input required type="text" placeholder={raw.name}   name="name" />
                <input required type="number" placeholder={raw.pricePerMeter}    name="price"></input>
                <input required type="text" placeholder={raw.lengths} name="lengths"   onChange={(ev: any) => setCurrentLength(ev.target.value)}></input>
                <Button startIcon={<AddIcon></AddIcon>} onClick={addLengthHandler} variant="contained" style={{ backgroundColor: 'rgb(252, 154, 26)', width:'auto'}} size="small">update length in stock </Button>
                <input required type="number" placeholder={raw.amount} name="amount" ></input>
                <button type="submit">Update</button>
                <button onClick={()=>handelDelete(raw._id)}>Delete</button>
                <button onClick={()=>setEdit(false)}>close</button>
                <Box sx={{ display: show }}>
       <Alert severity="success" >raw updated!</Alert>
     </Box>


                </form>):
            (<p key={raw._id}>{raw.name}, {raw.pricePerMeter}₪  <button onClick={handleEdit}>edit</button></p>)}
            

        </div>
    )
}