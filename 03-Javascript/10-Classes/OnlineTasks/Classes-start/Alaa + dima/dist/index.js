var country;
(function (country) {
    country["Israle"] = "Israle";
    country["Holand"] = "Holand";
    country["Turkish"] = "Turkish";
})(country || (country = {}));
var travle = /** @class */ (function () {
    function travle(name, date, From, To, price) {
        this.name = name;
        this.date = date;
        this.To = To;
        this.From = From;
        this.price = price;
        this.middleStation = undefined;
    }
    travle.prototype.setMiddleStation = function (ms) {
        try {
            if (ms !== country.Israle && ms !== country.Holand && ms !== country.Turkish) {
                throw new Error("the country is not exisits");
            }
            this.middleStation = ms;
        }
        catch (err) {
            console.error(err);
        }
    };
    Object.defineProperty(travle.prototype, "goTo", {
        get: function () {
            return this.To;
        },
        set: function (To) {
            this.To = To;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(travle.prototype, "comeFrom", {
        get: function () {
            return this.From;
        },
        set: function (from1) {
            this.From = from1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(travle.prototype, "person", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(travle.prototype, "travleDate", {
        get: function () {
            return this.date;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(travle.prototype, "getPrice", {
        get: function () {
            return this.price;
        },
        enumerable: false,
        configurable: true
    });
    return travle;
}());
var arr = [new travle("dima", new Date('02-02-2022'), country.Holand, country.Israle, 800, country.assda),
    new travle("dima", new Date('02-02-2022'), country.Holand, country.Israle, 800),
    new travle("dima", new Date('02-02-2022'), country.Holand, country.Israle, 750),
    new travle("dima", new Date('02-02-2022'), country.Holand, country.Israle, 900),
    new travle("dima", new Date('02-02-2022'), country.Holand, country.Israle, 1800),
    new travle("dima", new Date('02-02-2022'), country.Holand, country.Israle, 800),
    new travle("dima", new Date('02-02-2022'), country.Holand, country.Israle, 8000),
    new travle("dima", new Date('02-02-2022'), country.Holand, country.Israle, 1500)];
arr[3].setMiddleStation(country.Holand);
console.log(arr[3]);
