"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./App.scss");
var header_1 = require("./view/components/header/header");
// import Card from './view/components/card/Card';
// import SignUp from './view/pages/signUp/signup'
var homepage_1 = require("./view/pages/homepage/homepage");
// const students:Array<Place> = [{name:'Saleem', place:'Mashad'},{name:'Mona',place:"Nazereth"}];
// interface Place{
//   name:string;
//   place:string
// }
var text = "hii all";
function App() {
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement("header", { className: "App-header" },
            react_1["default"].createElement(header_1["default"], null),
            react_1["default"].createElement(homepage_1["default"], null))));
}
exports["default"] = App;
{ /* <img src={logo} className="App-logo" alt="logo" />
<p>
  Edit <code>src/App.tsx</code> and save to reload.
</p>
<Card />
<p>
  the text  is {text}
</p>

<a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Learn React
</a> */
}
