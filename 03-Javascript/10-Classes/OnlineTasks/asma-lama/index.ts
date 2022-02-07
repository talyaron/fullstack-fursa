enum subjacts {
    java="java",
    javascript="javascript",
    html="html",
  }

class  Subjects{
    taecher: string;
    numOfStudent: number;
    subject: string | undefined;

    constructor(teacher:string,  numOfStudent: number) {     
        this.taecher = teacher;
        this.numOfStudent =  numOfStudent;
      }
      setSubject(subject: string){
          try {
            if(subject in subjacts) 
                this.subject=subject;
            else
                throw new Error("Subject is not in the enum");
          }
            catch (err) {
            console.error(err);
          }  
      }
}

  
  const Java = new Subjects("Tal",19);
  Java.setSubject("java");
  console.log(Java)

  const Javascript = new Subjects("Tal2",20);
  Javascript.setSubject(subjacts.javascript);

  const Html = new Subjects("Tal3",22);
  Html.setSubject(subjacts.html);

  const Css = new Subjects("Tal4",22);
  Css.setSubject("css");

  const arrSubjects=[];
  arrSubjects.push(Java);
  arrSubjects.push(Javascript);
  arrSubjects.push(Html);
  arrSubjects.push(Css);

  console.log(arrSubjects)