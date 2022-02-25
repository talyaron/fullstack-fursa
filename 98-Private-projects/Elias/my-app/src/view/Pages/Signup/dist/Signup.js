"use strict";
exports.__esModule = true;
//import { useState } from 'react';
var react_1 = require("react");
var hooks_1 = require("../../../app/hooks");
var NavTextReducer_1 = require("../../../app/reducer/NavTextReducer");
var UserReducer_1 = require("../../../app/reducer/UserReducer");
require("./Signup.scss");
function Signup(props) {
    //const[username,setusername]=useState("");
    // const user_name:string = username;
    var user = hooks_1.useAppSelector(UserReducer_1.GetUserinfo);
    var dispatch = hooks_1.useAppDispatch();
    react_1.useEffect(function () {
        dispatch(NavTextReducer_1.changeNavText("Sign up to save List"));
    }, [dispatch]);
    function SignUpHandel(e) {
        console.log("signup pressed");
        // dispatch(login({
        //     userInfo: {
        //         Email: "Elias",
        //         Fname: "Elias",
        //         Lname: "elias"
        //     },
        //         Islogin: "True",
        //     status: 'loading'
        // }));
        // console.log(user.userInfo);
        // useEffect(()=>{
        //     //GetUserName()
        // },[]);
        dispatch(UserReducer_1.getUserInfoAsync());
    }
    return (React.createElement("div", { className: 'wrapper' },
        React.createElement("div", null, "signup to save list"),
        React.createElement("div", { className: 'imagTeampet' },
            React.createElement("img", { src: "", alt: "" })),
        React.createElement("div", { className: 'loginOp' },
            React.createElement("button", { className: 'googlebuttonText' }, "Google"),
            "or",
            React.createElement("form", { className: 'other', action: "submit" },
                React.createElement("input", { type: "text", className: ' inputs username', placeholder: 'Email' }),
                React.createElement("input", { type: "password", className: 'inputs password', placeholder: 'Password' })),
            React.createElement("button", { className: 'SignUpbtn', onClick: SignUpHandel }, "Sign Up"))));
}
exports["default"] = Signup;
