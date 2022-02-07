var students;
(function (students) {
    students[students["Rola"] = 0] = "Rola";
    students[students["Ahmad"] = 1] = "Ahmad";
    students[students["Noor"] = 2] = "Noor";
    students[students["Aya"] = 3] = "Aya";
})(students || (students = {}));
var StudentId = {
    name: students[0],
    average: undefined,
    setaverage: function (average) {
        try {
            if (average < 0)
                throw new Error("No average Like this");
            this.average = average;
        }
        catch (err) {
            console.error(err);
        }
    }
};
StudentId.setaverage(95);
console.log(StudentId);
