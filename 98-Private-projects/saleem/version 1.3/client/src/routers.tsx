import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";



import Dashboard from '../src/pages/Dashbaord/Dashboard'
import MainPage from './pages/Dashbaord/panels/MainPage';
import Tasks from './pages/Dashbaord/panels/Tasks';


import { Landing } from './pages/Landing';
import { Signin } from './pages/signin';
import { Signup } from './pages/signup';
import TaskDetailed from './pages/Dashbaord/panels/TaskDetailed'


function Routers()
{
 
    return (
      <BrowserRouter>
          <Routes>
          <Route path="/main" element={<Landing />} />
            <Route path="/main/signUp" element={<Signup/>}/>
            <Route path="/main/signIn" element={<Signin />} />
            <Route path="/dashboard" element={<Dashboard  />} />
            <Route path="/dashboard/tasks" element={<TaskDetailed langfunc={undefined}  />} />
            </Routes>

            <Routes>
            
           
          </Routes>
        </BrowserRouter>
      );
}
export default Routers;