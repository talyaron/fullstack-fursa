function getWeather(city) {
    return new Promise(function (resolve, reject) {
        fetch("http://api.weatherstack.com/current?access_key=12c0f0c94925db508149569c31ff336b&query=" + city)
            .then(function (response) { return response.json(); })
            .then(function (json) {
            resolve(json);
        })["catch"](function (err) {
            reject(err);
        });
    });
}
getWeather('london')
    .then(function (json) {
    var obj = JSON.parse(JSON.stringify(json));
    console.log(obj.current.temperature);
});
getWeather('tel aviv')
    .then(function (json) {
    var obj = JSON.parse(JSON.stringify(json));
    console.log(obj.current.temperature);
});
getWeather('new york')
    .then(function (json) {
    var obj = JSON.parse(JSON.stringify(json));
    console.log(obj.current.temperature);
});
