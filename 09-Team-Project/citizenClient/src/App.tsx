
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './view/pages/home/home'
import Profile from './view/pages/profile/profile'
import "./App.css";
import Chat from "./view/pages/chat/Chat";

function App() {
  return (
   /* <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>*/
    <Chat></Chat>
  );
}

export default App;
