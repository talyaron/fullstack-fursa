var profile = {
    name: "Elias",
    Email: null,
    age: null,
    phonenumber: "0528423617"
};
profile.Email = "eliasrenawi23@gmail.com";
profile.age = 24;
for (var i in profile) {
    console.log(i, ':', profile[i]);
}
