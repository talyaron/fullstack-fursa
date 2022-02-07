var Game = /** @class */ (function () {
    function Game(team1, team2, date) {
        this.team1 = team1;
        this.team2 = team2;
        this.date = date;
    }
    Object.defineProperty(Game.prototype, "set_score", {
        set: function (score) {
            this.score = score;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "get_score", {
        get: function () {
            return this.score;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "getdate", {
        get: function () {
            return this.date;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "get_team1", {
        get: function () {
            return this.team1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "get_team2", {
        get: function () {
            return this.team2;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "set_team1", {
        set: function (team1) {
            this.team1 = team1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "set_team2", {
        set: function (team2) {
            this.team2 = team2;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "setDate", {
        set: function (date) {
            this.date = date;
        },
        enumerable: false,
        configurable: true
    });
    return Game;
}());
var arr = [];
var game = new Game("Real Madrid", "Barcelona", new Date('12-03-2022'));
arr.push(game);
var game1 = new Game("Chelsea", "Manchester United", new Date('12-03-2022'));
arr.push(game1);
var game2 = new Game("Valencia", "Liverpool", new Date('12-03-2022'));
arr.push(game2);
var game3 = new Game("Machester City", "Barcelona", new Date('12-03-2022'));
arr.push(game3);
function filter_by_date() {
}
