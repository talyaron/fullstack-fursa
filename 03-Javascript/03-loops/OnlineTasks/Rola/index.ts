
interface TheObj {
    name: string;
    email:any;
    age: number;
    phonenumber:number;
  }
  
  const obj:TheObj = { name:"Rola", email:"Rola.marei",age:24,phonenumber:39580}
  const arr:Array<any> = ["name:Rola","email:Rola.marei","number:24,39580"]
  obj.age = 26;
  obj.phonenumber = 540844;

  
for(let key in obj){
  
    console.log(key,':', obj[key]);
    
 }
 
 for(let elm of arr){
    console.log(elm)
}
