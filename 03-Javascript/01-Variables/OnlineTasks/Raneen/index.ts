

interface TheObj {
    name: string;
    email: string;
    age: number;
    phone: number;
  }

const mySelf:TheObj = { name: "raneen", email: "raneen.mandalawe@gmail.com",
                        age: 27, phone: 71363};  
mySelf.name = "ra";

console.log(mySelf);