interface student {
  firstName: String;
  lastName: String;
  age: number;
  email: String;
  phoneNum: String;
}

var ok: student = {
  firstName: "Mohamed",
  lastName: "Zmero",
  age: 27,
  email: "m.zmiro@hotmail.com",
  phoneNum: "0549074119",
}
ok.age = 27.5
console.log(ok);
