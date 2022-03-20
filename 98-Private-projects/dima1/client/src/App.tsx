import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from './view/pages/logIn/LogIn';
import User from './view/pages/user/User';
import SignUp from './view/pages/signUp/SignUp';
import ResetPassword from "./view/pages/resetPassword/ResetPassword";
import MainScreen from "./view/pages/mainScreen/MainScreen";
import NewRecipe from './view/pages/newRecipe/NewRecipe';
import RecipeInfo from "./view/pages/recipeInfo/RecipeInfo";
import { styled } from '@mui/material/styles';
import { TextField } from "@mui/material";
import { useState } from 'react';
import RecipeTypes from "./view/pages/recipeTypes/RecipeTypes";

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

export interface recipeInfo{
  id:number;
  name:string;
  image:Blob;
  time:string;
  people:string;
  calories:string;
  ingredients:string;
  method:string;
}

export interface recipeProp{
  recipe:any;
  setRecipe:any;
}

function App(){

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/:userName/:type/RecipeTypes" element={<RecipeTypes />} />
        <Route path="/:userName" element={<User />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
        <Route path="/:userName/MainScreen" element={<MainScreen />} />
        <Route path="/:userName/:recipeId/EditRecipe" element={<NewRecipe />} />
        <Route path="/:userName/NewRecipe" element={<NewRecipe />} />
        {/* <Route path="RecipeInfo" element={<RecipeInfo />} /> */}
        <Route path="/:userName/:recipeId" element={<RecipeInfo />} />
        
      </Routes>
    </BrowserRouter>
  );
  
}

export default App;
