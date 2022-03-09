
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './view/pages/home/home'
import Profile from './view/pages/profile/profile'
import PreviousAccident from "./view/pages/previousAccidents/previousAccidents"
import "./App.css";
import { Emergency } from "./view/pages/emergency/Emergency";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="emergency" element={<Emergency />}></Route>
        <Route path="/previousAccidents" element={<PreviousAccident />} />

      </Routes>
    </Router>
  );
}

export default App;
