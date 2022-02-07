var teams;
(function (teams) {
    teams["sachnin"] = "SACHNIN";
    teams["beitar"] = "BEITAR";
    teams["keyryatShmona"] = "KYRIAT_SHMONA";
    teams["natanya"] = "HAPOEL_NATANYA";
})(teams || (teams = {}));
// const schaninBitarJs: Game = {
//   date: new Date("02-13-2022"),
//   team1: teams.BEITAR,
//   team2: teams.SACHNIN,
//   winner: undefined,
//   setWinner(winner) {
//     try {
//       if (winner !== this.team1 && winner !== this.team2)
//         throw new Error("winner is not one of the compiting teams");
//       this.winner = winner;
//     } catch (err) {
//       console.error(err);
//     }
//   },
// };
// console.log(schaninBitarJs);
// schaninBitarJs.setWinner(teams.beitar);
// console.log(schaninBitarJs);
var Games = /** @class */ (function () {
    function Games(team1, team2) {
        console.log(team1);
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
var kyriatSmoneVsNatanya = new Games(teams.natanya, teams.keyryatShmona);
// kyriatSmoneVsNatanya.setWinner(teams.sachnin);
kyriatSmoneVsNatanya.theWinner = teams.keyryatShmona;
console.log(kyriatSmoneVsNatanya.getTheWinner);
console.dir(kyriatSmoneVsNatanya);
