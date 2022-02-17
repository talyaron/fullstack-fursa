import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from './view/pages/logIn/LogIn';
import User from './view/pages/user/User';

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="User" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
  
}

export default App;
