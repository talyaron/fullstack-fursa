var subjacts;
(function (subjacts) {
    subjacts["java"] = "java";
    subjacts["javascript"] = "javascript";
    subjacts["html"] = "html";
})(subjacts || (subjacts = {}));
var Subjects = /** @class */ (function () {
    function Subjects(teacher, numOfStudent) {
        this.taecher = teacher;
        this.numOfStudent = numOfStudent;
    }
    Subjects.prototype.setSubject = function (subject) {
        try {
            if (subject in subjacts)
                this.subject = subject;
            else
                throw new Error("Subject is not in the enum");
        }
        catch (err) {
            console.error(err);
        }
    };
    return Subjects;
}());
var Java = new Subjects("Tal", 19);
Java.setSubject("java");
console.log(Java);
var Javascript = new Subjects("Tal2", 20);
Javascript.setSubject(subjacts.javascript);
var Html = new Subjects("Tal3", 22);
Html.setSubject(subjacts.html);
var Css = new Subjects("Tal4", 22);
Css.setSubject("css");
var arrSubjects = [];
arrSubjects.push(Java);
arrSubjects.push(Javascript);
arrSubjects.push(Html);
arrSubjects.push(Css);
console.log(arrSubjects);
