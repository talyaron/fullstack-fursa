enum university{
    "Haifa","Tel-Aviv","Jerusalem"
}

interface student{
    name:string;
    age:number;
    id:string;
    uni:string | undefined;
    yourUni(uni_:university);
}

const student1:student = {
    name:"Dima",
    age:25,
    id:"1234567",
    uni:undefined,
    yourUni(uni_){
        try{
            if(uni_ !== university.Haifa && uni_ !== university["Tel-Aviv"] && uni_ !== university.Jerusalem){
                throw new Error("The university name not found"); 
            }
            this.uni = university[uni_];
        }catch(error){
            console.log(error);
        }
    }
};

console.log(student1);
student1.yourUni(university.Haifa);
console.log(student1);