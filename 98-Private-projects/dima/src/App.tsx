import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from './view/pages/logIn/LogIn';
import User from './view/pages/user/User';
import SignUp from './view/pages/signUp/SignUp';

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="User" element={<User />} />
        <Route path="SignUp" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
  
}

export default App;
