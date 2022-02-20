function getPhoto(photoNumber) {
    return new Promise(function (resolve, reject) {
        fetch("https://jsonplaceholder.typicode.com/posts/" + photoNumber)
            .then(function (response) { return response.json(); })
            .then(function (json) {
            resolve(json);
        })["catch"](function (err) {
            reject(err);
        });
    });
}
;
getPhoto(200)
    .then(function (json) {
    console.log(json);
})["catch"](function (err) {
    console.error(err);
});
