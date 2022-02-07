var university;
(function (university) {
    university[university["Haifa"] = 0] = "Haifa";
    university[university["Tel-Aviv"] = 1] = "Tel-Aviv";
    university[university["Jerusalem"] = 2] = "Jerusalem";
})(university || (university = {}));
var student1 = {
    name: "Dima",
    age: 25,
    id: "1234567",
    uni: undefined,
    yourUni: function (uni_) {
        try {
            if (uni_ !== university.Haifa && uni_ !== university["Tel-Aviv"] && uni_ !== university.Jerusalem) {
                throw new Error("The university name not found");
            }
            this.uni = university[uni_];
        }
        catch (error) {
            console.log(error);
        }
    }
};
console.log(student1);
student1.yourUni(university.Haifa);
console.log(student1);
