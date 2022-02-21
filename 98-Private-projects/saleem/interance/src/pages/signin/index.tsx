import React from 'react'
import { Input } from '../../components/Input'
import { PageHeader } from '../../components/PageHeader'
import { Select } from '../../components/Select'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import './style.css'

export function Signin() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/dashboard");
    }
    return (
        <div id="page-login">
            <PageHeader title="Login " >
                <form action="" id="Login">
                
                </form>
            </PageHeader>

            <main>
            <Input name="name" label="Email" />
            <Input type="password" name="email" label="password" />
            

            <button onClick={handleClick}>Log in</button>
           
            </main>
        </div>
    )
}
