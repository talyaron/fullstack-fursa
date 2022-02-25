"use strict";
exports.__esModule = true;
//import { useState } from 'react';
var react_1 = require("react");
var hooks_1 = require("../../../app/hooks");
var UserReducer_1 = require("../../../app/reducer/UserReducer");
require("./Signup.scss");
function Signup(props) {
    var _a = react_1.useState(""), username = _a[0], setusername = _a[1];
    var user_name = username;
    // const user = useAppSelector((state) => state.User);
    var user = hooks_1.useAppSelector(UserReducer_1.GetUserinfo);
    console.log(user);
    var dispatch = hooks_1.useAppDispatch();
    function SignUpHandel(e) {
        console.log("signup pressed");
        // dispatch(login({
        //     userInfo: {
        //         Email: "Elias3",
        //         Fname: "Elias3",
        //         Lname: "elias3"
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
