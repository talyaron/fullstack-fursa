import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from './view/pages/logIn/LogIn';
import User from './view/pages/user/User';
import SignUp from './view/pages/signUp/SignUp';
import ResetPassword from "./view/pages/resetPassword/ResetPassword";
import MainScreen from "./view/pages/mainScreen/MainScreen";
import NewRecipe from './view/pages/newRecipe/NewRecipe';
import { styled } from '@mui/material/styles';
import { TextField } from "@mui/material";

export const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
      color: '#b5739d',
  },
  '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
          borderColor: '#b5739d',
      },
  },
  input: {
      color: "gray",
      fontSize: 15,
  },
});

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="User" element={<User />} />
        <Route path="SignUp" element={<SignUp />} />
        <Route path="ResetPassword" element={<ResetPassword />} />
        <Route path="MainScreen" element={<MainScreen />} />
        <Route path="NewRecipe" element={<NewRecipe/>} />
      </Routes>
    </BrowserRouter>
  );
  
}

export default App;
