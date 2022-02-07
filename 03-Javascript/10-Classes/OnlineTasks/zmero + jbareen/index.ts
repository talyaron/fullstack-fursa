class league {
    allraces: Array<race>;
    start: Date;
    end: Date;
    winner: car;
    constructor(races: Array<race>, start: Date, end: Date) {
        this.allraces = races;
        this.start = start;
        this.end = end;
    }
    addRace(race: race) {
        try {
            this.allraces.push(race);
        } catch (error) {
            console.error(error);
        }
    }
    deleteRace(race: race) {
        try {
            this.allraces = this.allraces.filter((r: race) => {
                if (r !== race) return r;
            })

        } catch (error) {
            console.error(error)
        }
    }
    updateWinner(newWinner: car) {
        this.winner = newWinner;
    }
}
class race {
    Allcars: Array<car>;
    date: Date;
    winner: car | undefined;
    constructor(cars: Array<car>, date: Date) {
        this.Allcars = cars;
        this.date = date;
    }
    setWinner(car: car) {
        try {
            this.winner = car
        } catch (e) {

        }
    }
}
enum car {
    bmw = "bmw", tesla = "tesla", ford = "ford", ferrari = "ferrari", porsche = "porsche", maserati = "maserati", audi = "audi"
}
const newLeague: league = new league([], new Date(), new Date())
const race1: race = new race([car.audi, car.tesla, car.bmw], new Date())
newLeague.addRace(race1)
race1.setWinner(car.audi)
const race2: race = new race([car.ferrari, car.maserati, car.bmw], new Date())
newLeague.addRace(race2)
race2.setWinner(car.ferrari)
const race3: race = new race([car.porsche, car.tesla, car.bmw], new Date())
newLeague.addRace(race3)
race3.setWinner(car.porsche)
const race4: race = new race([car.ferrari, car.tesla, car.ford], new Date())
newLeague.addRace(race4)
race4.setWinner(car.ferrari)
const race5: race = new race([car.audi, car.maserati, car.porsche], new Date())
newLeague.addRace(race5)
race5.setWinner(car.maserati)
newLeague.updateWinner(car.ferrari)
console.log(newLeague)

