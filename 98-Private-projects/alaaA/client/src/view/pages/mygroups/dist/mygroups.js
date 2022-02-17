"use strict";
exports.__esModule = true;
var React = require("react");
var styles_1 = require("@mui/material/styles");
var Table_1 = require("@mui/material/Table");
var TableBody_1 = require("@mui/material/TableBody");
var TableCell_1 = require("@mui/material/TableCell");
var TableContainer_1 = require("@mui/material/TableContainer");
var TableHead_1 = require("@mui/material/TableHead");
var TableRow_1 = require("@mui/material/TableRow");
var Paper_1 = require("@mui/material/Paper");
var StyledTableCell = styles_1.styled(TableCell_1["default"])(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {},
        _b["&." + TableCell_1.tableCellClasses.head] = {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white
        },
        _b["&." + TableCell_1.tableCellClasses.body] = {
            fontSize: 14
        },
        _b);
});
var StyledTableRow = styles_1.styled(TableRow_1["default"])(function (_a) {
    var theme = _a.theme;
    return ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0
        }
    });
});
function createData(name, city, age) {
    return { name: name, city: city, age: age };
}
var rows = [
    createData('Majd Nassar', 'Araba', 25),
    createData('Alaa ali aga', 'Sakhnin', 25),
    createData('cristiano ronaldo', 'Portugal', 37),
    createData('mohammad salah', 'Egybt', 28),
    createData('karim benzema', 'france', 33)
];
function Mygroups() {
    return (React.createElement(TableContainer_1["default"], { component: Paper_1["default"] },
        React.createElement(Table_1["default"], { sx: { minWidth: 700 }, "aria-label": "customized table" },
            React.createElement(TableHead_1["default"], null,
                React.createElement(TableRow_1["default"], null,
                    React.createElement(StyledTableCell, null, "FULL NAME"),
                    React.createElement(StyledTableCell, { align: "right" }, "CITY"),
                    React.createElement(StyledTableCell, { align: "right" }, "AGE"))),
            React.createElement(TableBody_1["default"], null, rows.map(function (row) { return (React.createElement(StyledTableRow, { key: row.name },
                React.createElement(StyledTableCell, { component: "th", scope: "row" }, row.name),
                React.createElement(StyledTableCell, { align: "right" }, row.city),
                React.createElement(StyledTableCell, { align: "right" }, row.age))); })))));
}
exports["default"] = Mygroups;
