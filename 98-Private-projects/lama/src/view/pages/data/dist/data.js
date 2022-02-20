"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
require("./data.scss");
var react_1 = require("react");
function Data() {
    // const [details, setdetails] = useState<Array<{ value: string }>>([]);
    var _a = react_1.useState(), details = _a[0], setdetails = _a[1];
    function handleAxios() {
        axios_1["default"].get('http://localhost:3004/courses').then(function (_a) {
            var data = _a.data;
            return setdetails(data.Array);
        });
        //    console.log(data);
        // axios.get('http://localhost:3004/posts/2').then(({data})=>console.log(data));
        // axios.post('http://localhost:3004/posts',{'title':'bad book'}).then(({data})=>console.log(data));
        //axios.put('http://localhost:3004/posts/2',{'title':'best book', author:'best author'}).then(({data})=>console.log(data));
        // axios.patch('http://localhost:3004/posts/2',{ author:'best ever author'}).then(({data})=>console.log(data));
        // axios.patch('http://localhost:3004/posts/2', {readers:['Jame',"bob", 'alis']}).then(({data})=>console.log(data))
        // axios.delete('http://localhost:3004/posts/3').then(({data})=>console.log(data));
    }
    function Deletedata() {
        axios_1["default"].get('http://localhost:3004/courses').then(function (_a) {
            var data = _a.data;
            return console.log(data);
        });
        // axios.patch('http://localhost:3004/posts/2',{ author:'best ever author'}).then(({data})=>console.log(data));
        // axios.patch('http://localhost:3004/posts/2', {readers:['Jame',"bob", 'alis']}).then(({data})=>console.log(data))
        // axios.delete('http://localhost:3004/posts/3').then(({data})=>console.log(data));
    }
    var numbers = ['course1', 'course2', 'course3'];
    var listItems = numbers.map(function (number) {
        return React.createElement("li", null, number);
    });
    return (React.createElement("div", null,
        React.createElement("p", null, "courses"),
        React.createElement("p", null, listItems),
        React.createElement("div", null,
            React.createElement("p", null, details)),
        React.createElement("button", { onClick: handleAxios }, "Activate"),
        React.createElement("button", { onClick: Deletedata }, "Delete")));
}
exports["default"] = Data;
