import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Landing } from './pages/Landing'
import { Signup } from './pages/signup';
import { Signin } from './pages/signin'


export function RoutesWeb() {
    return (
        <Router>
            <Routes>
                <Route path='main/' element={<Landing/>} />
                <Route path='/main/signUp' element={<Signup/>} />
                <Route path='/main/signIn' element={<Signin/>} />
            </Routes>
        </Router>





    )
}

