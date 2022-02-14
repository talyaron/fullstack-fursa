function getAlbum(albumNumber: number) {
    return new Promise((resolve, reject) => {
        fetch(`https://jsonplaceholder.typicode.com/albums/${albumNumber}`)
        .then(response => response.json())
        .then(json => {
            if(Object.keys(json).length === 0){
                reject("album not found");
            }
            resolve(json)
        })

        // .catch(err => {
        //     reject(err)
        // })
    })
}

getAlbum(101).then(json => {
    console.log(json)})
.catch((err) => {
    console.log(err)
})