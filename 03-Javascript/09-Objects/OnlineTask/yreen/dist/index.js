//create an object with enum
//about a topic you like.
//create some method, with this key word
var countrys;
(function (countrys) {
    countrys[countrys["Moscow"] = 0] = "Moscow";
    countrys[countrys["Paris"] = 1] = "Paris";
})(countrys || (countrys = {}));
var obj = {
    date: new Date("02-13-2022"),
    country_1: countrys.Moscow,
    country_2: countrys.Paris,
    choose: undefined,
    setcountry: function (choose) {
        try {
            if (choose !== this.country_1 && choose !== this.country_2)
                throw new Error("NO");
            this.choose = choose;
        }
        catch (err) {
            console.error(err);
        }
    }
};
