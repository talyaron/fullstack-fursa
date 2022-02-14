function getAlbums() {
    return new Promise((resolve, reject) => {
        fetch("https://jsonplaceholder.typicode.com/albums")
            .then((response) => response.json())
            .then((json) => {
                resolve(json)
            })
            .catch((err) => {
                reject(err);
            })
    })
}
function getAlbumWithID(num: number) {
    return new Promise((resolve, reject) => {
        fetch(`https://jsonplaceholder.typicode.com/albums/${num}`)
            .then((json) => {
                resolve(json)
            })
            .catch((err) => {
                reject(err)
            })
    })
}

getAlbums().then((json) => {
    console.log(json)
}).catch((err) => {
    console.log(err)
})


getAlbumWithID(5).then((json) => {
    console.log(json)
}).catch((err) => {
    console.log(err)
})