import React from 'react';
import './App.css';
import ViewList from './view/components/ViewList/ViewList';
import Navbar from './view/components/nav/Navbar'
import Bottom_Nav from './view/components/nav/Bottom_Nav';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Signup from './view/Pages/Signup/Signup';
import Homepage from './view/Pages/Homepage/Homepage';
import TravelInfo1 from './view/Pages/TravelInfo1/TravelInfo1';
import TravelInfo2 from './view/Pages/TravelInfo2/TravelInfo2';
import Test from './view/Pages/TravelInfo1/Test';
import Preparing from './view/components/Preparing/Preparing';





function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
       
        <Route path="/" element={<Homepage />} />
        <Route path="/TravelInfo1" element={< TravelInfo1/>} />
        <Route path="/TravelInfo2" element={< TravelInfo2/>} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/ViewList" element={<ViewList />} />
        <Route path="/Test" element={<Test />} />
        <Route path="/Preparing" element={<Preparing />} />


      </Routes>
      <Bottom_Nav />
    </BrowserRouter>
  );
}

export default App;
