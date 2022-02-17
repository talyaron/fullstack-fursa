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
function createData(name, calories, fat, carbs, protein) {
    return { name: name, calories: calories, fat: fat, carbs: carbs, protein: protein };
}
var rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];
function Mygroups() {
    return (React.createElement(TableContainer_1["default"], { component: Paper_1["default"] },
        React.createElement(Table_1["default"], { sx: { minWidth: 700 }, "aria-label": "customized table" },
            React.createElement(TableHead_1["default"], null,
                React.createElement(TableRow_1["default"], null,
                    React.createElement(StyledTableCell, null, "Dessert (100g serving)"),
                    React.createElement(StyledTableCell, { align: "right" }, "Calories"),
                    React.createElement(StyledTableCell, { align: "right" }, "Fat\u00A0(g)"),
                    React.createElement(StyledTableCell, { align: "right" }, "Carbs\u00A0(g)"),
                    React.createElement(StyledTableCell, { align: "right" }, "Protein\u00A0(g)"))),
            React.createElement(TableBody_1["default"], null, rows.map(function (row) { return (React.createElement(StyledTableRow, { key: row.name },
                React.createElement(StyledTableCell, { component: "th", scope: "row" }, row.name),
                React.createElement(StyledTableCell, { align: "right" }, row.calories),
                React.createElement(StyledTableCell, { align: "right" }, row.fat),
                React.createElement(StyledTableCell, { align: "right" }, row.carbs),
                React.createElement(StyledTableCell, { align: "right" }, row.protein))); })))));
}
exports["default"] = Mygroups;
