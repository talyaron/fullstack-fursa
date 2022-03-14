"use strict";
exports.__esModule = true;
var Layout_1 = require("../Layout");
var Projectspresent_1 = require("./Components/Projectspresent");
var DashboardGraphs_1 = require("./graphs/DashboardGraphs");
require("./style/Tasks.scss");
var userName = "saleem";
function Tasks(props) {
    return (React.createElement("div", { className: 'TasksCont' },
        React.createElement(Layout_1["default"], { setLocale: props.langfunc }),
        React.createElement("div", { className: 'TaskPanel' },
            React.createElement("header", null,
                React.createElement("h2", null, "Good morning "),
                React.createElement("h4", null, userName)),
            React.createElement("div", { className: 'content' },
                React.createElement("div", { className: 'detailedProjects' },
                    React.createElement(Projectspresent_1.Projectspresent, null),
                    React.createElement("div", { className: 'detailedProjectsfooter' },
                        React.createElement("a", { href: "" }, "All.."))),
                React.createElement("div", { className: 'total' },
                    React.createElement(DashboardGraphs_1.DashbboardGraphs, null))))));
}
exports["default"] = Tasks;
