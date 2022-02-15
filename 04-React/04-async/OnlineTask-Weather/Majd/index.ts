

function getWeather(city:string){
 return new Promise((resolve, reject) => {
    fetch(`http://api.weatherstack.com/current?access_key=12c0f0c94925db508149569c31ff336b&query=`+ city)
    .then((response) => response.json())
    .then((json) => {
    
  
      resolve(json);
    })
    .catch((err) => {
      reject(err);
    });

});
}


getWeather('london')
  .then((json)=>{
     var obj = JSON.parse(JSON.stringify(json));
     console.log(obj.current.temperature);
  });

  getWeather('tel aviv')
  .then((json)=>{
     var obj = JSON.parse(JSON.stringify(json));
     console.log(obj.current.temperature);
  });
  
  getWeather('new york')
  .then((json)=>{
     var obj = JSON.parse(JSON.stringify(json));
     console.log(obj.current.temperature);
  });
  

