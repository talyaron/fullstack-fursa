"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
require("./data.scss");
var react_1 = require("react");
// import 'db.json';
function Data() {
    // const [details, setdetails] = useState<Array<{ value: string }>>([]);
    var _a = react_1.useState([{ id: 0, name: "", participants: 0, cost: 0 }]), details = _a[0], setdetails = _a[1];
    function handleAxios() {
        // axios.get('http://localhost:3004/courses').then(({data})=>setdetails(data));
        //    console.log(data);
        axios_1["default"].get('http://localhost:3004/courses/1').then(function (_a) {
            var data = _a.data;
            return setdetails(data);
        });
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
            React.createElement("p", null, "aaaaaaaa"),
            details.map(function (data, key) {
                return (React.createElement("div", { key: key }, data.id +
                    " , " +
                    data.name +
                    " ," +
                    data.participants +
                    ", " +
                    data.cost));
            })),
        React.createElement("button", { onClick: handleAxios }, "Activate"),
        React.createElement("button", { onClick: Deletedata }, "Delete")));
}
exports["default"] = Data;
