import { useState } from "react";
import axios from "axios";

//   function handleEdit() {
//     setEdit(!edit);
//   }

async function handleAdd(ev: any) {
  ev.preventDefault();
 
    try {
      const name = ev.target.elements.name.value;
      const password = ev.target.elements.password.value;
            const city = ev.target.elements.city.value;
      console.log(name, password, city);
      if (name && password && city) {
        axios.post('/User/add-user',{name,password,city})
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
      <form onSubmit={handleAdd}>
        <input type="text" placeholder="Name" name="name" />
        <input type="text" placeholder="password" name="password" />
        <input type="text" placeholder="City" name="city" />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default SignUp;


