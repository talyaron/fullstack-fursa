
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './view/pages/home/home'
import Profile from './view/pages/profile/profile'
import PreviousAccident from "./view/pages/previousAccidents/previousAccidents"
import "./App.css";
import LogIn from './view/pages/logIn/LogIn';
import { Emergency } from "./view/pages/emergency/Emergency";
import SignUp from './view/pages/signUp/signup'
import Stories from "./view/pages/stories/stories";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/SignUp" element={<SignUp />}></Route>
        <Route path="/profile" element={<Profile />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="emergency" element={<Emergency />}></Route>
        <Route path="/previousAccidents" element={<PreviousAccident />} />

      </Routes>
    </Router>
  );
}

export default App;
