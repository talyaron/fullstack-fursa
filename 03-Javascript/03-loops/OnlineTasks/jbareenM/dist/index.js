var details = {
    firstName: "mohamad",
    lastName: "jbareen"
};
details["age"] = 23;
for (var key in details) {
    console.log(key, ":", details[key]);
}
