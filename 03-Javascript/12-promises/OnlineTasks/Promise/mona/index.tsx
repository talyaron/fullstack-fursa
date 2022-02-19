function getPhoto(photoNumber: number) {
    return new Promise((resolve, reject) => {
       fetch(`https://jsonplaceholder.typicode.com/posts/${photoNumber}`)
         .then((response) => response.json())
         .then((json) => {
  
           resolve(json)
  
         })
       .catch(err=>{
           reject(err)
         });

        });
    };


    getPhoto(200)
    .then((json) => {
      console.log(json);
    })
    .catch((err) => {
      console.error(err);
    });


        
    