var javaScript = {
    date: new Date("02-07-2022"),
    taecher: "Tal",
    numOfStudent: 19,
    subject: undefined,
    setSubject: function (subject) {
        this.subject = subject;
    }
};
javaScript.setSubject("JavaScript");
console.log(javaScript);
