var obj = { name: "Dima Abbas", age: 25, Email: "dimaabbas25@gmail.com", gender: "female", phone: "0525041028" };
console.log(obj);
console.log("---loop---");
for (var index in obj) {
    console.log(obj[index]);
}
