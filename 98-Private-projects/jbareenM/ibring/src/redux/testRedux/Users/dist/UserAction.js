"use strict";
exports.__esModule = true;
exports.fetchUsers = exports.fetchUsersFailure = exports.fetchUsersSuccess = exports.fetchUsersRequest = void 0;
var UserTypes_1 = require("./UserTypes");
function fetchUsersRequest() {
    var action = {
        type: UserTypes_1.FETCH_USER_REQUEST
    };
    return action;
}
exports.fetchUsersRequest = fetchUsersRequest;
function fetchUsersSuccess(users) {
    var action = {
        type: UserTypes_1.FETCH_USER_SUCCESS,
        payload: users
    };
    return action;
}
exports.fetchUsersSuccess = fetchUsersSuccess;
function fetchUsersFailure(error) {
    var action = {
        type: UserTypes_1.FETCH_USER_FAILURE,
        payload: error
    };
    return action;
}
exports.fetchUsersFailure = fetchUsersFailure;
function fetchUsers() {
    return function (dispatch) {
        new Promise(function (resolve, reject) {
            dispatch(fetchUsersRequest());
            fetch("https://jsonplaceholder.typicode.com/users")
                .then(function (r) { return r.json(); })
                .then(function (data) {
                var users = data;
                resolve(dispatch(fetchUsersSuccess(users)));
            })["catch"](function (error) {
                var errorMsg = error.message;
                reject(dispatch(fetchUsersFailure(errorMsg)));
            });
        });
    };
}
exports.fetchUsers = fetchUsers;
