function getAlbums() {
    return new Promise(function (resolve, reject) {
        fetch("https://jsonplaceholder.typicode.com/albums")
            .then(function (response) { return response.json(); })
            .then(function (json) {
            resolve(json);
        })["catch"](function (err) {
            reject(err);
        });
    });
}
function getAlbumWithID(num) {
    return new Promise(function (resolve, reject) {
        fetch("https://jsonplaceholder.typicode.com/albums/" + num)
            .then(function (json) {
            resolve(json);
        })["catch"](function (err) {
            reject(err);
        });
    });
}
getAlbums().then(function (json) {
    console.log(json);
})["catch"](function (err) {
    console.log(err);
});
getAlbumWithID(5).then(function (json) {
    console.log(json);
})["catch"](function (err) {
    console.log(err);
});
