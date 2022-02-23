function promiseFunc(getURL) {
    return new Promise(function (resolve, reject) {
        fetch("https://jsonplaceholder.typicode.com/todos/1/" + getURL)
            .then(function (r) { return r.json(); })
            .then(function (json) {
            resolve(json);
        })["catch"](function (err) {
            reject(err);
        });
    });
}
promiseFunc("comments?postId=1")
    .then(function (json) {
    console.log(json);
})["catch"](function (err) {
    console.error(err);
});
