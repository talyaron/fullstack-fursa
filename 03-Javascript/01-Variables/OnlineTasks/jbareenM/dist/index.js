var details = {
    firstName: "mohamad",
    lastName: "jbareen"
};
details["age"] = 23;
console.log("details:", details);
var secondDetails = {
    firstName: "mohamad",
    lastName: "jbareen"
};
secondDetails.age = 23;
console.log("secondDetails:", secondDetails);
for (var key in details) {
    console.log(details[key]);
}
