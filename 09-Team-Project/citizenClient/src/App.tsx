
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './view/pages/home/home'
import "./App.css";
import { Emergency } from "./view/pages/emergency/Emergency";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="emergency" element={<Emergency />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
