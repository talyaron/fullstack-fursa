"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var logo_svg_1 = require("./logo.svg");
require("./App.css");
function App() {
    function handleAxios() {
        axios_1["default"].get('http://localhost:3004/posts').then(function (_a) {
            var data = _a.data;
            return console.log(data);
        });
        // axios.get('http://localhost:3004/posts/2').then(({data})=>console.log(data));
        // axios.post('http://localhost:3004/posts',{'title':'bad book'}).then(({data})=>console.log(data));
        //axios.put('http://localhost:3004/posts/2',{'title':'best book', author:'best author'}).then(({data})=>console.log(data));
        // axios.patch('http://localhost:3004/posts/2',{ author:'best ever author'}).then(({data})=>console.log(data));
        // axios.patch('http://localhost:3004/posts/2', {readers:['Jame',"bob", 'alis']}).then(({data})=>console.log(data))
        // axios.delete('http://localhost:3004/posts/3').then(({data})=>console.log(data));
    }
    return (React.createElement("div", { className: "App" },
        React.createElement("header", { className: "App-header" },
            React.createElement("img", { src: logo_svg_1["default"], className: "App-logo", alt: "logo" }),
            React.createElement("p", null,
                "Edit ",
                React.createElement("code", null, "src/App.tsx"),
                " and save to reload."),
            React.createElement("button", { onClick: handleAxios }, "Activate"))));
}
exports["default"] = App;
