function getPost(postNumber) {
    return new Promise(function (resolve, reject) {
        fetch("https://jsonplaceholder.typicode.com/todos/" + postNumber)
            .then(function (response) { return response.json(); })
            .then(function (json) {
            resolve(json);
        })["catch"](function (err) {
            reject(err);
        });
        // setTimeout(() => {
        //   const coin = Math.random();
        //   if (coin >= 0.5) {
        //     resolve("You Won!!!!!!!");
        //   } else {
        //     reject('You Lost :-(')
        //   }
        // }, 1000);
    });
}
function getAlbums() {
    return new Promise(function (resolve, reject) {
        fetch("https://jsonplaceholder.typicode.com/albums")
            .then(function (response) { return response.json(); })
            .then(function (json) {
            resolve(json);
        })["catch"](function (err) {
            reject(err);
        });
        // setTimeout(() => {
        //   const coin = Math.random();
        //   if (coin >= 0.5) {
        //     resolve("You Won!!!!!!!");
        //   } else {
        //     reject('You Lost :-(')
        //   }
        // }, 1000);
    });
}
getPost(5)
    .then(function (json) {
    console.log(json);
})["catch"](function (err) {
    console.error(err);
});
getAlbums()
    .then(function (json) {
    console.log(json);
})["catch"](function (err) {
    console.error(err);
});
var posts = getPost(4);
var albums = getAlbums();
Promise.all([posts, albums]).then(function (values) {
    console.log(values);
});
