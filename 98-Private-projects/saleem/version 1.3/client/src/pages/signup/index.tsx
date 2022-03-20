import React, { FormEventHandler, useState } from 'react'
import { Input } from '../../components/Input'
import { PageHeader } from '../../components/PageHeader'
import { Textarea } from '../../components/Textarea'
import { Select } from '../../components/Select'
import warningIcon from '../../assets/images/icons/warning.svg'
import './style.css'
import axios from 'axios'


export function Signup() {
    
  
    interface interfaceScheduleItem{ 
        week_day: number;
        from:string;
        to:string;
    }
    const [Userinput,setInput] = useState({name:"",
        password:"",
        email:"",
        Phonenumber:"",
        Birthday:"",
        site:"",
        subject:""});
    const [scheduleItem, setScheduleItem]=useState<interfaceScheduleItem[]>([
        {week_day:1,from:'8:00 AM', to:'4:00 PM'}
        
    ])
    const [passMsg,setpassMsg] = useState("");

    /// to be moved//
    const addUsersurl = "http://localhost:3001/users/add-user/";
    interface signUpParams{
        name:String,
        password:String,
        email:String,
        Phonenumber:String,
        Birthday:String,
        site:String,
        subject:String
}
    function addUser(prop:signUpParams) {
        return new Promise((resolve, reject) => {
          axios.post(addUsersurl, { name:prop.name,password:prop.password,email:prop.email,
            Phonenumber:prop.Phonenumber,Birthday:prop.Birthday,
            site:prop.site,subject:prop.subject  }).then((res: unknown) => {
            resolve(res)
          })
          .catch((err: any) => reject(err))})}


    //end of to be moved

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        let tempInput = {...Userinput};
        let property = String(event.target.name);
        if( property == "name" || property =="password" || property =="email"|| property =="Phonenumber" 
        || property =="site" || property =="Birthday")
        {
            
                    tempInput[property] = event.target.value
                    console.log(tempInput)
                    setInput(tempInput)
        }
    }
    function checkPassword(event: React.ChangeEvent<HTMLInputElement>)
    {
        let property = String(event.target.name);
        if(property == "rePaswsword")
        {
            if(event.target.value != Userinput.password)
            {
                setpassMsg("unmatched passwords")
            }
            else
            {
                setpassMsg("");
            }
        }

    }       
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if(passMsg!="")
        {
            return;
        }
        addUser(Userinput);
    }
        
       
      
      function handleSelectChange(event:React.ChangeEvent<HTMLSelectElement>) {
        let tempInput = {...Userinput};
        let property = String(event.target.name);
        if( property == "subject")
        {
            tempInput[property] = event.target.value
            console.log(tempInput)
            setInput(tempInput)
        }
      }
  
    function addNewScheduleItem(){
        setScheduleItem([
            ...scheduleItem,{
                week_day:1,from:' ', to:' '
            }
        ])
    }
    return (
        <form onSubmit={handleSubmit}>
            <div id="page-LogIn-form">
                <PageHeader title="Let the journey Begin"
                    description="Please Fill all the feilds"
                />
                <main>
                    <fieldset>
                        <legend>private information </legend>

                        <Input name="name" label="complete name" onChange={handleChange}required/>
                        <Input name="email" label="email" onChange={handleChange}/>
                        <Input type="password" name="password" label="password" onChange={handleChange}/>
                        <Input type="password" name="rePaswsword" label="rePaswsword" onChange={checkPassword} />
                        {passMsg}
                        <Input  type="tel" name="Phonenumber" label="Phonenumber" onChange={handleChange} required/>
                        <Input type="date" name="Birthday" label="Birthday" onChange={handleChange} required/>
                    </fieldset>

                    <fieldset>
                        <legend>the pourpus </legend>

                        <Select   name="subject" label="This is for: "
                            options={[
                                { value: 'Myself', label: 'Myself' },
                                { value: 'college', label: 'college' },
                                { value: 'Work', label: 'Work' },
                                { value: 'learn', label: 'learn' },
                            ] } 
                            onChange={handleSelectChange} required />
                        <Input name="site" label="specify school or college:" onChange={handleChange} required/>


                    </fieldset>
                    <footer>
                        <p>
                            <img src={warningIcon} alt='Terms and consditions'></img>
                            Importante to read the terms & conditions<br />
                            
                        </p>
                        <button type="submit"> Open</button>


                    </footer>
                </main>
            </div>
        </form>
    )
}