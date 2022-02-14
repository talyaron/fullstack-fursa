function getAlbum(albumNumber) {
    return new Promise(function (resolve, reject) {
        fetch("https://jsonplaceholder.typicode.com/albums/" + albumNumber)
            .then(function (response) { return response.json(); })
            .then(function (json) {
            if (Object.keys(json).length === 0) {
                reject("album not found");
            }
            resolve(json);
        });
        // .catch(err => {
        //     reject(err)
        // })
    });
}
getAlbum(101).then(function (json) {
    console.log(json);
})["catch"](function (err) {
    console.log(err);
});
