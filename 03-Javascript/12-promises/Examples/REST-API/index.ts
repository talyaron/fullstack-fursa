//https://jsonplaceholder.typicode.com/

//promise
console.log("before");
console.time('fetch1')
fetch("https://jsonplaceholder.typicode.com/posts") // request rest api
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
    console.log('first call');
    console.timeEnd('fetch1')
  });

  fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => {
    console.log(json)
    console.log('second call');
  })

console.log("after");
