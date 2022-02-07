var car;
(function (car) {
    car[car["bmw"] = 0] = "bmw";
    car[car["tesla"] = 1] = "tesla";
    car[car["ford"] = 2] = "ford";
    car[car["ferrari"] = 3] = "ferrari";
    car[car["porsche"] = 4] = "porsche";
    car[car["maserati"] = 5] = "maserati";
    car[car["audi"] = 6] = "audi";
})(car || (car = {}));
var arrcars = [car.audi, car.tesla, car.bmw];
var newRace = {
    Allcars: arrcars,
    date: new Date("02-13-2022"),
    winner: undefined,
    setWinner: function (car) {
        try {
            this.winner = car;
        }
        catch (e) {
            console.error(e);
        }
    }
};
newRace.setWinner(car.audi);
console.log(newRace);
