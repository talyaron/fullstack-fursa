import React, { useCallback, useState } from "react";
import "./logIn.scss";
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { fetchUser, getloginState } from '../../../app/reducer/userReducer';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ConstructionOutlined } from "@mui/icons-material";
function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch()
  let isLoged = useAppSelector(getloginState)
  const navigate = useNavigate();
 
  async function hadleSubmit(e: any) {
    e.preventDefault();

    const loadProducts = useCallback(() => {
      dispatch(fetchUser({ "email": email, "password": password }));
    }, [dispatch]);
    console.log(loadProducts);
    
    if(isLoged)
    {
      console.log(isLoged)
      //navigate("/profile")
    }
    
    
  }

  return (
    <div className="Center">
      <h1> login </h1>
      <img
        src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
        alt="profile-img"
        className="profile-img-card"
      />
      <form onSubmit={hadleSubmit}>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Email"
          required
        />

        <br></br>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="text"
          placeholder="Password"
          className="input"
          required
        />
        <br></br>
        <input type="checkbox" id="remember" value="remember" />
        <span>Remember me </span>
        <br></br>
        <input type="submit" className="submit" value="Login" />
        {}
      </form>
    </div>
  );
}
export default LogIn;
