

interface TheObj {
    name: string;
    email: string;
    phone: number;
  }

const mySelf:TheObj = { name: "raneen", email: "raneen.mandalawe@gmail.com",
                         phone: 71363};  
for(let key in mySelf){
  
   console.log(key,':', mySelf[key]);
}

