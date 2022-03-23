
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './view/pages/home/home'
import Profile from './view/pages/profile/profile'
import PreviousAccident from "./view/pages/previousAccidents/previousAccidents"
import "./App.css";
import LogIn from './view/pages/logIn/LogIn';
import { Emergency } from "./view/pages/emergency/Emergency";
import SignUp from './view/pages/signUp/signup'
import Stories from "./view/pages/stories/stories";
import About from "./view/pages/about/about"
import Chat from "./view/pages/chat/Chat"
import ChatRooms from "./view/pages/ChatRooms/chatRooms";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<LogIn />} />
        <Route path="/SignUp" element={<SignUp />}></Route>
        <Route path="/profile" element={<Profile />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/info" element={<About />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/emergency/:accidentName" element={<Emergency />}></Route>
        <Route path="/previousAccidents" element={<PreviousAccident />} />
        <Route path="/chatRoams" element={<ChatRooms/>} />

      </Routes>
    </Router>
  );
}

export default App;
