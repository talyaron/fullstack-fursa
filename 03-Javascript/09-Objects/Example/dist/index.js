var teams;
(function (teams) {
    teams[teams["SACHNIN"] = 0] = "SACHNIN";
    teams[teams["BEITAR"] = 1] = "BEITAR";
})(teams || (teams = {}));
var schaninBitarJs = {
    date: new Date("02-13-2022"),
    team1: teams.BEITAR,
    team2: teams.SACHNIN,
    winner: undefined,
    setWinner: function (winner) {
        try {
            if (winner !== this.team1 && winner !== this.team2)
                throw new Error("winner is not one of the compiting teams");
            this.winner = winner;
        }
        catch (err) {
            console.error(err);
        }
    }
};
console.log(schaninBitarJs);
schaninBitarJs.setWinner(teams.BEITAR);
console.log(schaninBitarJs);
