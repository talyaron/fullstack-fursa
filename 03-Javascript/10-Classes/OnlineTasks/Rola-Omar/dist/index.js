var teams;
(function (teams) {
    teams["realmadrid"] = "Madrid";
    teams["barcelona"] = "Barcelona";
    teams["valencia"] = "Valencia";
    teams["sevilla"] = "Sevilla";
})(teams || (teams = {}));
var Games = /** @class */ (function () {
    function Games(team1, team2) {
        this.team1 = team1;
        this.team2 = team2;
    }
    Games.prototype.settheWinner = function (winner) {
        try {
            if (winner !== this.team1 && winner !== this.team2)
                throw new Error("The winner is not from the compiting teams");
            this.winner = winner;
        }
        catch (err) {
            console.error(err);
        }
    };
    return Games;
}());
var First = new Games(teams.realmadrid, teams.barcelona);
First.settheWinner(teams.realmadrid);
var second = new Games(teams.realmadrid, teams.sevilla);
second.settheWinner(teams.sevilla);
var third = new Games(teams.valencia, teams.sevilla);
third.settheWinner(teams.sevilla);
var fourth = new Games(teams.valencia, teams.barcelona);
fourth.settheWinner(teams.valencia);
// function addTeams(t1, t2) {
//   const array = [];
//   array.push(t1,t2)
//   for (let i in array)
//     console.log("The match winner of game " + i + " is " + array[i].winner)
// }
// addTeams(new Games(teams.realmadrid,teams.barcelona))
var array = [];
array.push(First);
array.push(second);
array.push(third);
array.push(fourth);
for (var i in array)
    console.log("The match winner of game " + i + " is " + array[i].winner);
