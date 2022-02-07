var test;
(function (test) {
    test["asd"] = "asd";
    test["qwe"] = "qwe";
})(test || (test = {}));
;
var firstRace = {
    first: test.asd,
    second: test.qwe,
    winner: undefined,
    setWinner: function (winner) {
        try {
            if (winner !== this.first && winner !== this.second)
                throw new Error("winner is not of the class members!");
            this.winner = winner;
        }
        catch (err) {
            console.error(err);
        }
    }
};
console.log(firstRace);
firstRace.setWinner(test.asd);
console.log(firstRace);
