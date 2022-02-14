import React from 'react'
import { Input } from '../../components/Input'
import { PageHeader } from '../../components/PageHeader'
import { Select } from '../../components/Select'
import './style.css'

export function Signin() {
    return (
        <div id="page-login">
            <PageHeader title="Login " >
                <form action="" id="Login">
                
                </form>
            </PageHeader>

            <main>
            <Input name="name" label="Email" />
            <Input type="password" name="email" label="password" />
            <button>Log in</button>
           
            </main>
        </div>
    )
}
