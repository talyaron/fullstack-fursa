var league = /** @class */ (function () {
    function league(races, start, end) {
        this.allraces = races;
        this.start = start;
        this.end = end;
    }
    league.prototype.addRace = function (race) {
        try {
            this.allraces.push(race);
        }
        catch (error) {
            console.error(error);
        }
    };
    league.prototype.deleteRace = function (race) {
        try {
            this.allraces = this.allraces.filter(function (r) {
                if (r !== race)
                    return r;
            });
        }
        catch (error) {
            console.error(error);
        }
    };
    league.prototype.updateWinner = function (newWinner) {
        this.winner = newWinner;
    };
    return league;
}());
var race = /** @class */ (function () {
    function race(cars, date) {
        this.Allcars = cars;
        this.date = date;
    }
    race.prototype.setWinner = function (car) {
        try {
            this.winner = car;
        }
        catch (e) {
        }
    };
    return race;
}());
var car;
(function (car) {
    car["bmw"] = "bmw";
    car["tesla"] = "tesla";
    car["ford"] = "ford";
    car["ferrari"] = "ferrari";
    car["porsche"] = "porsche";
    car["maserati"] = "maserati";
    car["audi"] = "audi";
})(car || (car = {}));
var newLeague = new league([], new Date(), new Date());
var race1 = new race([car.audi, car.tesla, car.bmw], new Date());
newLeague.addRace(race1);
race1.setWinner(car.audi);
var race2 = new race([car.ferrari, car.maserati, car.bmw], new Date());
newLeague.addRace(race2);
race2.setWinner(car.ferrari);
var race3 = new race([car.porsche, car.tesla, car.bmw], new Date());
newLeague.addRace(race3);
race3.setWinner(car.porsche);
var race4 = new race([car.ferrari, car.tesla, car.ford], new Date());
newLeague.addRace(race4);
race4.setWinner(car.ferrari);
var race5 = new race([car.audi, car.maserati, car.porsche], new Date());
newLeague.addRace(race5);
race5.setWinner(car.maserati);
newLeague.updateWinner(car.ferrari);
console.log(newLeague);
