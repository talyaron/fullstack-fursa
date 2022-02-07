interface race {
    Allcars: Array<car>;
    date: Date;
    winner: car | undefined;
    setWinner(car: car);
}
enum car {
    bmw, tesla, ford, ferrari, porsche, maserati, audi
}
const arrcars: Array<car> = [car.audi, car.tesla, car.bmw]
const newRace: race = {
    Allcars: arrcars,
    date: new Date("02-13-2022"),
    winner: undefined,
    setWinner(car) {
        try {
            this.winner = car
        }
        catch (e) {
            console.error(e);
        }
    },
}
newRace.setWinner(car.audi);
console.log(newRace)