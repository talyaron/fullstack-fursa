function getAlbums(){
    return new Promise((resolve, reject) => {
        fetch(`https://jsonplaceholder.typicode.com/albums}`)
          .then((response) => response.json())
          .then((json) => {resolve(json)})
          .catch(err=>{
            reject(err)
          })
        });
    };
    