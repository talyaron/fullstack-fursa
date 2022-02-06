
interface details {
    age: number;
    name: string;
    email: string;
    phone: string;
  }
  
  const aiman:details = {
    age: 25,
    name: "Aiman Younis",
    email: "aimanyounises@gmail.com",
    phone: "+972544991012",
  };
  
  console.log(aiman)

  for (var index in aiman){
      console.log(aiman[index]);
      var element = document.createElement('div');
      element.style.cssText ='width:100% ; height :10vh  ; font-weight:bold; ; font-size:3em' ;
      element.innerHTML = index + ": " + aiman[index];
      document.body.appendChild(element);
  }