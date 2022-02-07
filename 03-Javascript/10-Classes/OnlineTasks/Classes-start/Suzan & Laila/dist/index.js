var teams;
(function (teams) {
    teams["sachnin"] = "SACHNIN";
    teams["beitar"] = "BEITAR";
    teams["keyryatShmona"] = "KYRIAT_SHMONA";
    teams["natanya"] = "HAPOEL_NATANYA";
    teams["haifa"] = "HAPOELHAIFA";
})(teams || (teams = {}));
var Games = /** @class */ (function () {
    function Games(team1, team2) {
        this.team1 = team1;
        this.team2 = team2;
    }
    Games.prototype.setWinner = function (winner) {
        try {
            if (winner !== this.team1 && winner !== this.team2)
                throw new Error("The winner is not from the compiting teams");
            this.winner = winner;
        }
        catch (err) {
            console.error(err);
        }
    };
    Object.defineProperty(Games.prototype, "theWinner", {
        set: function (winner) {
            try {
                if (winner !== this.team1 && winner !== this.team2)
                    throw new Error("The winner is not from the compiting teams");
                this.winner = winner;
            }
            catch (err) {
                console.error(err);
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Games.prototype, "getTheWinner", {
        get: function () {
            return this.winner.toString();
        },
        enumerable: false,
        configurable: true
    });
    return Games;
}());
var game1 = new Games(teams.haifa, teams.keyryatShmona);
var game2 = new Games(teams.beitar, teams.natanya);
var game3 = new Games(teams.sachnin, teams.keyryatShmona);
var game4 = new Games(teams.beitar, teams.haifa);
game1.setWinner(teams.haifa);
game2.setWinner(teams.beitar);
game3.setWinner(teams.keyryatShmona);
game4.setWinner(teams.haifa);
var games = [game1, game2, game3, game4];
console.log(games);
