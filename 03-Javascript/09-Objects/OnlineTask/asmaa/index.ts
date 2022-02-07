interface Class {
    date: Date;
    taecher: string;
    subject: string | undefined;
    numOfStudent: number;
    setSubject(subject: string);
  }

  const javaScript: Class = {
    date: new Date("02-07-2022"),
    taecher:"Tal",
    numOfStudent:19,
    subject: undefined,
    setSubject(subject) {
      this.subject=subject;
    },
  };

  javaScript.setSubject("JavaScript");
  console.log(javaScript);
