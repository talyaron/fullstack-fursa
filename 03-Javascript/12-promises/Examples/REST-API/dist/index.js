//https://jsonplaceholder.typicode.com/
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(function (response) { return response.json(); })
    .then(function (json) { return console.log(json); });
