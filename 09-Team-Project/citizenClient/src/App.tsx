
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
import { useEffect } from "react";
import { useAppDispatch } from "./app/hooks";
import { authenticate } from "./app/reducer/userReducer";
import ChatRooms from './view/pages/chatRoams/chatRooms'

function App() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(authenticate())
  }, [])
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/profile" element={<Profile />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/info" element={<About />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/emergency/:accidentName" element={<Emergency />}></Route>
        <Route path="/previousAccidents" element={<PreviousAccident />} />
        <Route path="/chatRoams" element={<ChatRooms />} />

      </Routes>
    </Router>
  );
}

export default App;
