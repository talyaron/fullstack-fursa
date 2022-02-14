function getPost(postNumber: number) {
  return new Promise((resolve, reject) => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${postNumber}`)
      .then((response) => response.json())
      .then((json) => {
      
    
        resolve(json);
      })
      .catch((err) => {
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
  return new Promise((resolve, reject) => {
    fetch(`https://jsonplaceholder.typicode.com/albums`)
      .then((response) => response.json())
      .then((json) => {

        resolve(json);
      })
      .catch((err) => {
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
  .then((json) => {
    console.log(json);
  })
  .catch((err) => {
    console.error(err);
  });

getAlbums()
  .then((json) => {
    console.log(json);
  })
  .catch((err) => {
    console.error(err);
  });

  const posts = getPost(4);
  const albums = getAlbums();

  Promise.all([posts, albums]).then(values=>{
      console.log(values)
  })
