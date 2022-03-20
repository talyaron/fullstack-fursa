import { useState } from "react";
import axios from "axios";
import { useAppDispatch } from "../../../app/hooks";
import { getRawAsync } from "../../../features/raw/Raw";
export function RawCard(props:any){
    const dispatch=useAppDispatch();
    const {raw}=props
    const[edit,setEdit]=useState(false);
    async function handleUpdate(ev:any){
        ev.preventDefault();
        const id = ev.target.id
        console.log(id)
        const name = ev.target.elements.name.value;
        const pricePerMeter = ev.target.elements.price.value;    
       const {data} = await axios.patch('/raw/update-raw',{name, pricePerMeter, id});
       console.log(data)
    }
    function handleEdit() {
        setEdit(!edit);
      }
      async function handelDelete(id:any){
        const { data } = await axios.post('/raw/delete-raw', { id: id })
        dispatch(getRawAsync())

      }
    return(
        <div className="rawCard">
            {edit?(<form onSubmit={handleUpdate} id={raw._id}>
                <input type="text" placeholder={raw.name} name="name" />
                <input type="text" placeholder={raw.pricePerMeter} name="price"></input>
                <button type="submit">Update</button>
                <button onClick={()=>handelDelete(raw._id)}>Delete</button>

                </form>):
            (<p key={raw._id}>{raw.name}, {raw.pricePerMeter}₪  <button onClick={handleEdit}>edit</button></p>)}
            

        </div>
    )
}