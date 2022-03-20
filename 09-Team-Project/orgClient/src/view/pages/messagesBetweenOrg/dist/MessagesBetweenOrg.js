"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Box_1 = require("@material-ui/core/Box");
var TextField_1 = require("@material-ui/core/TextField");
var FormControl_1 = require("@material-ui/core/FormControl");
var Select_1 = require("@material-ui/core/Select");
var InputLabel_1 = require("@material-ui/core/InputLabel");
var MenuItem_1 = require("@material-ui/core/MenuItem");
var core_1 = require("@material-ui/core");
var hooks_1 = require("../../../app/hooks");
var sharingReducer_1 = require("../../../app/reducer/sharingReducer");
require("./style.scss");
var axios_1 = require("axios");
function MessagesBetweenOrg() {
    var _a = react_1.useState(""), org = _a[0], setOrg = _a[1];
    var _b = react_1.useState(""), user = _b[0], setUser = _b[1];
    var _c = react_1.useState(""), description = _c[0], setDescription = _c[1];
    var _d = react_1.useState([]), orgs = _d[0], setOrgs = _d[1];
    var _e = react_1.useState([]), users = _e[0], setUsers = _e[1];
    var orgArr = ['org1', 'org2', 'org35'];
    var userArr = ['user1', 'user2', 'user3'];
    var selectedAccident = hooks_1.useAppSelector(function (state) { return state.accident; });
    var currentUser = hooks_1.useAppSelector(function (state) { return state.orgUser; });
    //---------------//
    // const currentUser = "";
    // const selectedAccident = null;
    //---------------//
    react_1.useEffect(function () {
        fetch('/messagesBetweemOrg/get-organizations')
            .then(function (res) { return res.json(); })
            .then(function (data) {
            setOrgs(data.data);
        })["catch"](function (err) {
            console.error(err);
        });
    }, []);
    function handleOrgChange(ev) {
        ev.preventDefault();
        setOrg(ev.target.value);
        axios_1["default"]
            .post('/messagesBetweemOrg/get-Users-byOrgName', { orgName: org })
            .then(function (res) {
            var data = res.data;
            setUsers(data.name);
        })["catch"](function (err) {
            console.error(err);
        });
    }
    var dispatch = hooks_1.useAppDispatch();
    function handleClick() {
        dispatch(sharingReducer_1.setSharing({
            from: currentUser, to: user, content: description,
            date: new Date(), accident: selectedAccident
        }));
    }
    function handleDescription(ev) {
        setDescription(ev.target.value);
    }
    return (react_1["default"].createElement("div", { className: 'container' },
        react_1["default"].createElement("div", { className: "info" },
            react_1["default"].createElement(Box_1["default"], { className: "box", sx: { width: 200 } },
                react_1["default"].createElement(FormControl_1["default"], { fullWidth: true },
                    react_1["default"].createElement(InputLabel_1["default"], { id: "demo-simple-select-label" }, "Pick Organization"),
                    react_1["default"].createElement(Select_1["default"], { labelId: "demo-simple-select-label", id: "demo-simple-select", value: org, onChange: handleOrgChange }, orgArr.map(function (item, index) {
                        return (react_1["default"].createElement(MenuItem_1["default"], { value: item }, item));
                    })))),
            react_1["default"].createElement(Box_1["default"], { className: "box", sx: { width: 200 } },
                react_1["default"].createElement(FormControl_1["default"], { fullWidth: true },
                    react_1["default"].createElement(InputLabel_1["default"], { id: "demo-simple-select-label" }, "Pick User"),
                    react_1["default"].createElement(Select_1["default"], { labelId: "demo-simple-select-label", id: "demo-simple-select", value: user, onChange: function (e) { return setUser(e.target.value); } }, userArr.map(function (item, index) {
                        return (react_1["default"].createElement(MenuItem_1["default"], { value: item }, item));
                    })))),
            react_1["default"].createElement(Box_1["default"], { className: "box", sx: { width: 200 } },
                react_1["default"].createElement(FormControl_1["default"], { fullWidth: true },
                    react_1["default"].createElement(TextField_1["default"], { id: "outlined-multiline-static", multiline: true, label: "add description", 
                        // rows={4}
                        onKeyUp: handleDescription }))),
            react_1["default"].createElement(core_1.Button, { className: "button", onClick: handleClick, variant: "contained" }, "Send Meassage"))));
}
exports["default"] = MessagesBetweenOrg;
