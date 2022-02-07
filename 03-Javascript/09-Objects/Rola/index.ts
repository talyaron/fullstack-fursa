enum students{
    "Rola", "Ahmad","Noor","Aya"
}

interface  Id{
  name:string;
  average: number| undefined;
  setaverage(average:number);
}

const StudentId: Id = {
  name: students[0],
  average:undefined,
  setaverage(average) {
    try {
      if (average < 0)
        throw new Error("No average Like this");
      this.average = average;
    } catch (err) {
      console.error(err);
    }
  },
};

StudentId.setaverage(95);
console.log(StudentId);