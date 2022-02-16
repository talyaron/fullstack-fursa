function getAlbums() {
    return new Promise(function (resolve, reject) {
        fetch("https://jsonplaceholder.typicode.com/albums}")
            .then(function (response) { return response.json(); })
            .then(function (json) { resolve(json); })["catch"](function (err) {
            reject(err);
        });
    });
}
;
