import './App.css';
import React, { useState,useEffect } from 'react';
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
import Store from './view/Store/Store.tsx'
import Cart from './view/cart/cart.tsx'
import MyPlans from './view/components/MyPlans'
function App() {
  const [cartItems, setcartItems] = useState([]);
const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("http://localhost:3004/exercises")
      .then(({ data }) => {
        console.log(data);
        dispatch(setExercises(data))
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route exact path="/cart" element={<Cart cartItems={cartItems} setcartItems={setcartItems} />}/>
        <Route exact path="/store" element={<Store cartItems={cartItems} setcartItems={setcartItems} />} />
        {/* <Route exact path="/market" element={<Market/>}/> */}
        <Route exact path="/music" element={<Music/>}/>
        <Route exact path="/exercises" element={<Exercises/>}/>
        <Route exact path="/duration" element={<Duration/>}/>
        <Route exact path="/plandecider" element={<Plandecider/>}/>
        <Route exact path="/food" element={<Food/>}/>
        <Route exact path="/profile" element={<Profile/>}/>
        <Route exact path="/plangenerator" element={<MyPlans/>}/>
        <Route exact path="/emptyPlan" element={<EmptyPlan/>}/>
        <Route exact path="/singleworkout" element={<SingleWorkout/>}/>
        <Route exact path="/personalplan" element={<Plan/>}/>
        <Route exact path="/weight" element={<Weight/>}/>
        <Route exact path="/height" element={<Height/>}/>
        <Route exact path="/age" element={<Age/>}/>
        <Route exact path="/name" element={<Name/>}/>
        <Route exact path="/activity" element={<Activity/>}/>
        <Route exact path="/goal" element={<MainGoal/>}/>
        <Route exact path="/gender" element={<Gender/>}/>
        <Route exact path="/newAccount" element={<NewAccount/>}/>
        <Route exact path="/facebook" element={<Facebook/>}/>
        <Route path="/gmail" element={<Gmail />} /> 
        <Route exact path="/" element={<><Header/><SignUp/></>}/>  
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
