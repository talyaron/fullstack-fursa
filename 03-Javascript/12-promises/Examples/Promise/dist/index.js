function getPost(postNumber) {
    return new Promise(function (resolve, reject) {
        // fetch(`https://jsonplaceholder.typicode.com/todos/${postNumber}`)
        //   .then((response) => response.json())
        //   .then((json) => {
        //     resolve(json)
        //   })
        //   .catch(err=>{
        //     reject(err)
        //   });
        setTimeout(function () {
            var coin = Math.random();
            if (coin >= 0.5) {
                resolve("You Won!!!!!!!");
            }
            else {
                reject('You Lost :-(');
            }
        }, 1000);
    });
}
;
getPost(2)
    .then(function (json) {
    console.log(json);
})["catch"](function (err) {
    console.error(err);
});
