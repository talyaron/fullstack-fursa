import axios from 'axios'
export function Register()
{
   async function registerHandler(ev:any){
        ev.preventDefault();
        const name=ev.target.elements.name.value;
        const email=ev.target.elements.email.value;
        const phone=ev.target.elements.phone.value;
        const password=ev.target.elements.password.value;
        const {data}=await axios.post('/user/register',{name:name,email:email,phone:phone,password:password})
    }
    return(
        <form onSubmit={registerHandler}>
            <input type='text' name="name" placeholder="full name"></input>
            <input type='email' name="email" placeholder="email"></input>
            <input type='text' name='phone' placeholder='phone number'></input>
            <input type='password' name="password" placeholder="password"></input>
            <button type='submit'>register</button>


        </form>
    )
}