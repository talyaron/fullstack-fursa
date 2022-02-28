"use strict";
exports.__esModule = true;
var AppBar_1 = require("../../components/header/AppBar");
require("./Classes.scss");
var Button_1 = require("@mui/material/Button");
var ClassCard_1 = require("../../components/classCard/ClassCard");
var react_router_dom_1 = require("react-router-dom");
var Edit_1 = require("@mui/icons-material/Edit");
var react_1 = require("react");
var hooks_1 = require("../../../../app/hooks");
var SchoolSlice_1 = require("../../../../app/reducers/school/SchoolSlice");
function SchoolClasses() {
    // const classes = [{ name: 'class 1A', teacher: 'Suzan Kassabry' }, { name: 'class 1B', teacher: 'Suzan Kassabry' },
    // { name: 'class 2A', teacher: 'Suzan Kassabry' }, { name: 'class 2B', teacher: 'Suzan Kassabry' },
    // { name: 'class 3A', teacher: 'Suzan Kassabry' }, { name: 'class 3B', teacher: 'Suzan Kassabry' },
    // { name: 'class 4A', teacher: 'Suzan Kassabry' }, { name: 'class 4B', teacher: 'Suzan Kassabry' }];
    // const [classes, setClasses] = useState([]);
    // useEffect(() => {
    //     axios.get('http://localhost:3004/schoolClasses').then(({ data }) => {
    //         console.log(data);
    //         setClasses(data);
    //     })
    // }, []);
    var dispatch = hooks_1.useAppDispatch();
    react_1.useEffect(function () {
        dispatch(SchoolSlice_1.getSchoolClassesAsync());
        dispatch(SchoolSlice_1.getSchoolStudentsAsync());
        dispatch(SchoolSlice_1.getSchoolTeachersAsync());
    }, []);
    var classes = hooks_1.useAppSelector(SchoolSlice_1.schoolClasses);
    console.log(classes);
    return (React.createElement("div", { className: 'container' },
        React.createElement("div", { className: 'bar' },
            React.createElement(AppBar_1["default"], null)),
        React.createElement("div", { className: "subContainer" },
            React.createElement("div", { className: "newclassBtn" },
                React.createElement(react_router_dom_1.Link, { to: '/newClass' },
                    React.createElement(Button_1["default"], { variant: "contained", size: 'small', startIcon: React.createElement(Edit_1["default"], null) }, "Create new class"))),
            React.createElement("div", { className: "classesContainer" }, classes.map(function (classroom, index) {
                var name = classroom.name, teacher = classroom.teacher;
                return (React.createElement(react_router_dom_1.Link, { to: '/class' },
                    React.createElement(ClassCard_1["default"], { key: index, info: classroom })));
            })))));
}
exports["default"] = SchoolClasses;
