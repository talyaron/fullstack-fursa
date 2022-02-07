var types;
(function (types) {
    types["Mercedes"] = "Mercedes";
    types["Audi"] = "Audi";
    types["Fiat"] = "Fiat";
})(types || (types = {}));
var car = /** @class */ (function () {
    function car(car_type, production_year, color) {
        this.Car_type = car_type;
        this.production_year = production_year;
        this.color = color;
    }
    Object.defineProperty(car.prototype, "carType", {
        set: function (car_type) {
            try {
                if (!(Object.values(types).includes(car_type)))
                    throw new console.error("car type does not exiest");
                this.Car_type = car_type;
            }
            catch (error) {
                console.error(error);
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(car.prototype, "productionYear", {
        get: function () {
            return this.production_year;
        },
        set: function (production_year) {
            try {
                if (production_year > 2022 || production_year < 0)
                    throw new console.error("production_year invalid");
                this.production_year = production_year;
            }
            catch (error) {
                console.error(error);
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(car.prototype, "setColor", {
        set: function (color) {
            try {
                if (color == null)
                    throw new console.error("color invalid");
                this.color = color;
            }
            catch (error) {
                console.error(error);
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(car.prototype, "carColor", {
        get: function () {
            return this.color;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(car.prototype, "getCarType", {
        get: function () {
            return this.Car_type;
        },
        enumerable: false,
        configurable: true
    });
    return car;
}());
var cars = [];
var Mercedes = new car(types.Mercedes, 2021, "black");
var Fiat = new car(types.Fiat, 1986, "white");
Mercedes.setColor = "Yellow";
cars.push(Mercedes);
cars.push(Fiat);
console.log(cars);
