"use strict";
exports.__esModule = true;
exports.SidebarData = void 0;
var react_1 = require("react");
var FaIcons = require("react-icons/fa");
var AiIcons = require("react-icons/ai");
var IoIcons = require("react-icons/io");
exports.SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: react_1["default"].createElement(AiIcons.AiFillHome, null),
        cName: 'nav-text'
    },
    {
        title: 'Reports',
        path: '/reports',
        icon: react_1["default"].createElement(IoIcons.IoIosPaper, null),
        cName: 'nav-text'
    },
    {
        title: 'Products',
        path: '/products',
        icon: react_1["default"].createElement(FaIcons.FaCartPlus, null),
        cName: 'nav-text'
    },
    {
        title: 'Team',
        path: '/team',
        icon: react_1["default"].createElement(IoIcons.IoMdPeople, null),
        cName: 'nav-text'
    },
    {
        title: 'Messages',
        path: '/messages',
        icon: react_1["default"].createElement(FaIcons.FaEnvelopeOpenText, null),
        cName: 'nav-text'
    },
    {
        title: 'Support',
        path: '/support',
        icon: react_1["default"].createElement(IoIcons.IoMdHelpCircle, null),
        cName: 'nav-text'
    }
];
