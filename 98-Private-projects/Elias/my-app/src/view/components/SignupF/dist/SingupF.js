"use strict";
exports.__esModule = true;
require("./SingupF.scss");
var SignupIcon_png_1 = require("../../../icons/SignupIcon.png");
var react_router_dom_1 = require("react-router-dom");
var hooks_1 = require("../../../app/hooks");
var UserReducer_1 = require("../../../app/reducer/UserReducer");
var SingupF = function () {
    var nav = react_router_dom_1.useNavigate();
    var state = react_router_dom_1.useLocation().state;
    var user = hooks_1.useAppSelector(UserReducer_1.GetUser);
    console.log(user);
    // const dispatch = useAppDispatch();
    function gotoSignup(e) {
        nav('/Signup', {
            state: state
        });
    }
    if (user.Islogin) {
        return (React.createElement("div", null));
    }
    else {
        return (React.createElement("div", { className: 'SUwrapper' },
            React.createElement("button", { className: 'Signupc', onClick: gotoSignup },
                React.createElement("img", { src: SignupIcon_png_1["default"], alt: "" }),
                " Sign up")));
    }
};
exports["default"] = SingupF;
