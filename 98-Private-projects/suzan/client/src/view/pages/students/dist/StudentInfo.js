"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
var arr = [
    { info: { firstName: 'Suzan', lastName: 'Kassabry', father: 'Emad', mother: 'Linda', id: '207745638', phone: '0537756048', fphone: '0537756048', mphone: '0537756048', email: 'suzankassabry97@gmail.com' } },
    { info: { firstName: 'Maria', lastName: 'Kassabry', father: 'Emad', mother: 'Linda', id: '218439247', phone: '0537756048', fphone: '0537756048', mphone: '0537756048', email: 'suzankassabry97@gmail.com' } },
    { info: { firstName: 'Nora', lastName: 'Kassabry', father: 'Emad', mother: 'Linda', id: '634892469', phone: '0537756048', fphone: '0537756048', mphone: '0537756048', email: 'suzankassabry97@gmail.com' } }
];
function StudentInfo() {
    var studentId = react_router_dom_1.useParams().studentId;
    function getStudentInfo(id, students) {
        var student = students.find(function (student) { return student.info.id === id; });
        if (student) {
            return [student.info.firstName, student.info.lastName, student.info.father, student.info.mother, student.info.phone, student.info.fphone, student.info.mphone, student.info.email];
        }
        else {
            return '';
        }
    }
    var info = getStudentInfo(studentId, arr);
    //0 first name
    //1 last name
    //2 father
    //3 mother
    //4 phone
    //5 fphone
    //6 mphone
    //7 email
    return (React.createElement("div", { className: 'studentInfo' },
        React.createElement("h1", null,
            " ",
            info[0],
            " ",
            info[1],
            " "),
        React.createElement("p", null,
            React.createElement("span", null, "student's id:"),
            " ",
            studentId),
        React.createElement("p", null,
            React.createElement("span", null, "student's email:"),
            " ",
            info[7]),
        React.createElement("p", null,
            React.createElement("span", null, "father's name:"),
            " ",
            info[2]),
        React.createElement("p", null,
            React.createElement("span", null, "father's phone:"),
            " ",
            info[5]),
        React.createElement("p", null,
            React.createElement("span", null, "mother's name:"),
            " ",
            info[3]),
        React.createElement("p", null,
            React.createElement("span", null, "mother's phone:"),
            " ",
            info[6]),
        React.createElement("p", null,
            React.createElement("span", null, "student's email:"),
            " ",
            info[7])));
}
exports["default"] = StudentInfo;
