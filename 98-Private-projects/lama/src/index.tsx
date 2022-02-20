import React from 'react';
// import ReactDOM from 'react-dom';
import './index.scss';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import HomePage from "./view/pages/homepage/homepage";
import SignIn from "./view/pages/signIn/signin";
import SignUp from "./view/pages/signUp/signup";
import Trainers from "./view/pages/trainers/trainers";
import Horses from "./view/pages/horses/horses";
import Courses from "./view/pages/courses/courses";
import Course from "./view/pages/course/course";
import Calender from "./view/pages/coursescalender/calender";
import Data from "./view/pages/data/data";


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="courses" element={<Courses />} >
        <Route path=":courseId" element={<Course />} />
     
      </Route>
      <Route path="homepage" element={<HomePage />} />
      <Route path="signIn" element={<SignIn />} />
      <Route path="signUp" element={<SignUp />} />
      <Route path="trainers" element={<Trainers />} />
      <Route path="horses" element={<Horses />} />
      <Route path="courses" element={<Courses />} />
      <Route path="data" element={<Data />} />
      <Route path="calender" element={<Calender />} />
      <Route path="course/:courseId" element={<Course />} />
    </Routes>
  </BrowserRouter>,
    // document.getElementById("root")
  rootElement
);

