var league = /** @class */ (function () {
    function league(team1, team2, team3, team4) {
        this.teams = [];
        try {
            this.teams.push(team1, team2, team3, team4);
        }
        catch (error) {
            console.error(error);
        }
    }
    return league;
}());
var team = /** @class */ (function () {
    function team(team1, points) {
        this.name = team1;
        this.points = points;
    }
    return team;
}());
var Teams;
(function (Teams) {
    Teams["Sakhnin"] = "SAKHNIN";
    Teams["MaccabiHaifa"] = "MACCABIHAIFA";
    Teams["Ashdod"] = "ASHDOD";
    Teams["TelAviv"] = "TELAVIV";
})(Teams || (Teams = {}));
;
console.log(new team(Teams.Sakhnin, 90));
console.log(new league(new team(Teams.Sakhnin, 90), new team(Teams.MaccabiHaifa, 80), new team(Teams.Ashdod, 70), new team(Teams.TelAviv, 45)));
