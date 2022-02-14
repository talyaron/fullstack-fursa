import React, { useState } from 'react'
import { Input } from '../../components/Input'
import { PageHeader } from '../../components/PageHeader'
import { Textarea } from '../../components/Textarea'
import { Select } from '../../components/Select'
import warningIcon from '../../assets/images/icons/warning.svg'
import './style.css'


interface SignupProps{
    setCounter:any;
    counter:any;
}
export default function Signup(props:SignupProps) {
    
    const {setCounter, counter} = props;

    interface interfaceScheduleItem{ 
        week_day: number;
        from:string;
        to:string;
    }

    const [scheduleItem, setScheduleItem]=useState<interfaceScheduleItem[]>([
        {week_day:1,from:'8:00 AM', to:'4:00 PM'}
        
    ])
    {  }
    function addNewScheduleItem(){
        setScheduleItem([
            ...scheduleItem,{
                week_day:1,from:' ', to:' '
            }
        ])
    }
    return (
        <>
            <div id="page-LogIn-form">
                <PageHeader title="Let the journey Begin"
                    description="Please Fill all the feilds"
                />
                <div className="counter">
                    {counter}
                </div>
                <main>
                    <fieldset>
                        <legend>private information </legend>

                        <Input name="name" label="complete name" />
                        <Input name="email" label="email" />
                        <Input name="Phone number" label="Phone Number" />
                        <Input type="date" name="Birthday" label="Birthday" />
                        <Textarea name='bio' label='about yourself' />
                    </fieldset>

                    <fieldset>
                        <legend>the pourpus </legend>

                        <Select name="subject" label="This is for: "
                            options={[
                                { value: 'Myself', label: 'Myself' },
                                { value: 'college', label: 'college' },
                                { value: 'Work', label: 'Work' },
                                { value: 'learn', label: 'learn' },
                            ]}
                        />
                        <Input name="cost" label="specify school or college:" />


                    </fieldset>
                    <footer>
                        <p>
                            <img src={warningIcon} alt='Terms and consditions'></img>
                            Importante to read the terms & conditions<br />
                            
                        </p>
                        <button type="button"> Open</button>


                    </footer>
                </main>
            </div>
        </>
    )
}