"use strict";

exports.__esModule = true;

var react_1 = require("react");

var react_intl_1 = require("react-intl");

require("react-pro-sidebar/dist/css/styles.css");

require("./Dashboard.css");

var Layout_1 = require("../Layout");

var messages = require('./messages.js')["default"];

console.log(messages["default"]);

function Dashboard() {
  var _a = react_1.useState('en'),
      locale = _a[0],
      setLocale = _a[1];

  return react_1["default"].createElement(react_intl_1.IntlProvider, {
    locale: locale,
    messages: messages[locale]
  }, react_1["default"].createElement(Layout_1["default"], {
    setLocale: setLocale
  }));
}

exports["default"] = Dashboard;