import React, { useEffect, useState } from "react";
import axios from "axios";
function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("");

  useEffect ( () => {
    const response = axios.get('/testSQL').then(({data})=> {
      console.log(data);
    });
    console.log(response);
  }, [])

  async function hadleSubmit(e: any) {
    e.preventDefault();
    const response = await axios.post("/user/login", {
      email: email,
      password: password,
      type: type
    });

    const data = response.data;
    if (data.ok) {
      console.log('logged in successfully')
      alert("login succsess");
    } else {
      console.log('log in failed')
      alert("login failed");
    }
  }

  async function handleGetPrivateInfo(){
      const info = await axios.get('/user/get-private-info');
      console.log(info.data.info);
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
        <input
          value={type}
          onChange={(e) => setType(e.target.value)}
          type="text"
          placeholder="user type"
          className="input"
          required
        />
        <br></br>
        <input type="checkbox" id="remember" value="remember" />
        <span>Remember me </span>
        <br></br>
        <input type="submit" className="submit" value="Login" />
      </form>

      <button onClick={handleGetPrivateInfo}>get info</button>
    </div>
  );
}
export default LogIn;
