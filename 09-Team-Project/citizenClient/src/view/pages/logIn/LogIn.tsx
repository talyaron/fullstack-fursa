import React from "react"
import "./LogIn.scss"

function LogIn() {
    return (<body>
        <div className="login-page">
          <div className="login-container">
            <form className="login-form">
              <div className="username-info">
                <label >
                  <input
                    id="username"
                    type="text"
                    placeholder="Username"
                    required
                  />
                </label>
              </div>
              <div className="password-info">
                <label >
                  <input
                    id="password"
                    type="password"
                    placeholder="Password"
                    required
                  />
                </label>
              </div>
              <div className="login-btn">Login</div>
              <a className="forgot-text" href="#">Forgot password?</a>
            </form>
          </div>
    
          <div className="sign-up-container">
            <div className="new-user">
              First time here? <a className="sign-up-text" href="#">Sign up</a>
            </div>
          </div>
        </div>
      </body>)

}
export default LogIn