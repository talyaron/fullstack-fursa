enum fruits{
    "bannana", "apple","grape"
}

interface bag {
  fruit1:fruits;
  fruit2:fruits;
  fruit3:fruits;
  getfriuts();

}

const choosenBag: bag = {
fruit1 : fruits.apple,
fruit2 : fruits.bannana,
fruit3 : fruits.grape,
getfriuts() {
    console.log(this.fruit1,this.fruit2,this.fruit3);
    
  },
};

console.log(choosenBag);
choosenBag.getfriuts();

