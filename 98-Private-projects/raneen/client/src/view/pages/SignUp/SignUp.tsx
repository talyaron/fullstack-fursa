import { useState } from "react";
import axios from "axios";

//   function handleEdit() {
//     setEdit(!edit);
//   }

async function handleAddOwner(ev: any) {
  ev.preventDefault();
 
   try {
      const name = ev.target.elements.name.value;
      const id = ev.target.elements.id.value;
      console.log(name, id);
      if (name && id) {
        axios.post('/owenrs/add-owner',{id, name})
        .then(({data})=>{
          console.log(data)
        })
        .catch(err=>{
          console.error(err)
        })
        ev.target.reset();
      }
    } catch (error) {
      console.error(error)
    }

}


async function handleAddUSER(ev: any) {
  ev.preventDefault();
 
   try {
      const name = ev.target.elements.name.value;
      const password = ev.target.elements.password.value;
      const city = ev.target.elements.city.value;
      console.log(name, password, city);
      if (name && password && city) {
        axios.post('/users/add-user',{name,password,city})
        .then(({data})=>{
          console.log(data)
        })
        .catch(err=>{
          console.error(err)
        })
        ev.target.reset();
      }
    } catch (error) {
      console.error(error)
    }

}
function SignUp() {
  // async function handleAdd(id:any){
  //     console.log('Add')
  //     const {data} = await axios.post('/add-user',{name:name,city:city,password:password});
  //     console.log(data)
  // }
  return (
    <div className="userCard">
    <form onSubmit={handleAddOwner}>
        <input type="text" name="name" placeholder="Name of Owner" />
        <input type="text" name="id" placeholder="id of the woner" />
        <button type="submit">ADD</button>
      </form>

          <form onSubmit={handleAddUSER}>
        <input type="text" name="name" placeholder="Name of Owner" />
        <input type="text" name="password" placeholder="password" />
               <input type="text" name="city" placeholder="city" />
        <button type="submit">ADD USER</button>
      </form>
    </div>
  );
}

export default SignUp;


