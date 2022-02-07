enum types{
  Mercedes ="Mercedes",
  Audi="Audi",
  Fiat="Fiat"
}

class car{
  Car_type:types;
  production_year:number;
  color:string;

  constructor(car_type:types,production_year:number, color:string) {
    this.Car_type=car_type;
    this.production_year=production_year;
    this.color=color;
  }

set carType(car_type:types){
  try {
    if(!(Object.values(types).includes(car_type)))throw new console.error("car type does not exiest");
    this.Car_type=car_type;
  } catch (error) {
    console.error(error);

  }
  
}
set productionYear(production_year:number){
  try {
    if(production_year>2022||production_year<0)throw new console.error("production_year invalid");
    this.production_year=production_year;
  } catch (error) {
    console.error(error);

  }
  
}
set setColor(color:string){
  try {
    if(color==null)throw new console.error("color invalid");
    this.color=color;
  } catch (error) {
    console.error(error);

  }

}
get productionYear(){
  return this.production_year;
}
get carColor(){
  return this.color;
}
get getCarType(){

  return this.Car_type;
}



}

const cars:Array<car>=[];

const Mercedes =new car(types.Mercedes,2021,"black");
const  Fiat= new car(types.Fiat,1986,"white");


Mercedes.setColor="Yellow";
cars.push(Mercedes);
cars.push(Fiat);




console.log(cars);

