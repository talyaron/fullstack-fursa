"use strict";
exports.__esModule = true;
exports.getJoke = void 0;
function getJoke(ev) {
    return new Promise(function (resolve, reject) {
        fetch('https://api.chucknorris.io/jokes/random')
            .then(function (res) { return res.json(); })
            .then(function (_a) {
            var value = _a.value;
            if (typeof value === 'string') {
                resolve(value);
            }
            else {
                console.log(value);
                reject(new Error('joke is not a string'));
            }
        })["catch"](function (err) { return reject(err); });
    });
}
exports.getJoke = getJoke;
