//https://jsonplaceholder.typicode.com/
//promise
console.log("before");
console.time('fetch1');
fetch("https://jsonplaceholder.typicode.com/posts") // request rest api
    .then(function (response) { return response.json(); })
    .then(function (json) {
    console.log(json);
    console.log('first call');
    console.timeEnd('fetch1');
});
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(function (response) { return response.json(); })
    .then(function (json) {
    console.log(json);
    console.log('second call');
});
console.log("after");
