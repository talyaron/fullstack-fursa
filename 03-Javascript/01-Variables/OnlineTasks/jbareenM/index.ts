const details = {
    firstName:"mohamad",
    lastName:"jbareen"
}

details["age"] = 23;

console.log("details:", details);


//interface
interface personalDetails{
    firstName:string,
    lastName:string,
    age?:number
}

const secondDetails:personalDetails = {
    firstName:"mohamad",
    lastName:"jbareen",
}

secondDetails.age = 23;
console.log("secondDetails:", secondDetails);

for(var key in details){
    console.log(details[key]);
}