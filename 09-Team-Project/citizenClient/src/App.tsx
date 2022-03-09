
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './view/pages/home/home'
import Profile from './view/pages/profile/profile'
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
             <Route path="/ProfileInfo" element={<ProfileInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
