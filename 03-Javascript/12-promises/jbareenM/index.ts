function promiseFunc(getURL: string) {
  return new Promise((resolve, reject) => {
    fetch(`https://jsonplaceholder.typicode.com/todos/1/${getURL}`)
      .then((r) => r.json())
      .then((json) => {
        resolve(json)
      })
      .catch(err=>{
        reject(err)
      });
  });
}

promiseFunc("comments?postId=1")
  .then((json) => {
    console.log(json);
  })
  .catch((err) => {
    console.error(err);
  });
