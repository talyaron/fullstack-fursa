function getpost( postNumber: number){
    return new Promise((resolve,reject)=>{
        fetch(`https://jsonplaceholder.typicode.com/comments/${postNumber}`)
        .then((response)=>response.json())
        .then((json)=>{
            resolve(json)

        })
        .catch(err=>{
                      reject(err)
                    });
    })

}

  getpost(250)
    .then((json) => {
      console.log(json);
    })
    .catch((err) => {
      console.error(err);
    });


// function getPost(postNumber: number) {
//     return new Promise((resolve, reject) => {
//       // fetch(`https://jsonplaceholder.typicode.com/todos/${postNumber}`)
//       //   .then((response) => response.json())
//       //   .then((json) => {
  
//       //     resolve(json)
  
//       //   })
//       //   .catch(err=>{
//       //     reject(err)
//       //   });
  
//       setTimeout(() => {
//         const coin = Math.random();
//         if (coin >= 0.5) {
//           resolve("You Won!!!!!!!");
//         } else {
//           reject('You Lost :-(')
//         }
//       }, 1000);
//     });
//   };
  
//   getPost(2)
//     .then((json) => {
//       console.log(json);
//     })
//     .catch((err) => {
//       console.error(err);
//     });
  