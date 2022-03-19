import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

import { useState,useEffect } from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Header from './view/components/Header';
import SignUp from './view/components/SignUp';
import Gmail from './view/components/Gmail';
import Facebook from './view/components/Facebook';
import NewAccount from './view/components/NewAccount';
import Gender from './view/components/Gender';
import MainGoal from './view/components/MainGoal';
import Activity from './view/components/Activities'
import Name from './view/components/Name';
import Age from './view/components/Age';
import Height from './view/components/Height';
import Weight from './view/components/Weight';
import Plan from './view/components/PersonalPlan'
import SingleWorkout from './view/components/SingleWorkout';
import EmptyPlan from './view/components/EmptyPlan';
import PlanGenerator from './view/components/MyPlans';
import Food from './view/components/Food';
import Profile from './view/components/Profile';
import Plandecider from './view/components/Plandecider';
import Music from './view/components/Music';
import Exercises from './view/components/Exercises';
import Duration from './view/components/Duration';
// import Test from './view/components/Test';
// import Market from './view/components/Market'
import { useDispatch } from "react-redux"
import  { setExercises } from "./slice"
import axios from 'axios';
import Store from './view/Store/Store'
import Cart from './view/cart/cart'
import MyPlans from './view/components/MyPlans'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
        <Routes>
        {/* <Route  path="/cart" element={<Cart cartItems={cartItems} setcartItems={setcartItems} />}/>
        <Route  path="/store" element={<Store cartItems={cartItems} setcartItems={setcartItems} />} /> */}
        {/* <Route  path="/market" element={<Market/>}/> */}
        <Route  path="/music" element={<Music/>}/>
        <Route  path="/exercises" element={<Exercises/>}/>
        <Route  path="/duration" element={<Duration/>}/>
        <Route  path="/plandecider" element={<Plandecider/>}/>
        <Route  path="/food" element={<Food/>}/>
        <Route  path="/profile" element={<Profile/>}/>
        <Route  path="/plangenerator" element={<MyPlans/>}/>
        <Route  path="/emptyPlan" element={<EmptyPlan/>}/>
        <Route  path="/singleworkout" element={<SingleWorkout/>}/>
        <Route  path="/personalplan" element={<Plan/>}/>
        <Route  path="/weight" element={<Weight/>}/>
        <Route  path="/height" element={<Height/>}/>
        <Route  path="/age" element={<Age/>}/>
        <Route  path="/name" element={<Name/>}/>
        <Route  path="/activity" element={<Activity/>}/>
        <Route  path="/goal" element={<MainGoal/>}/>
        <Route  path="/gender" element={<Gender/>}/>
        <Route  path="/newAccount" element={<NewAccount/>}/>
        <Route  path="/facebook" element={<Facebook/>}/>
        <Route path="/gmail" element={<Gmail />} /> 
        <Route  path="/" element={<><Header/><SignUp/></>}/>  
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
