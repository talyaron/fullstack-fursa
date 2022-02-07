var player;
(function (player) {
    player[player["BlackPlayer"] = 0] = "BlackPlayer";
    player[player["WhitePlayer"] = 1] = "WhitePlayer";
})(player || (player = {}));
var checkersGame = {
    date: new Date("02-13-2022"),
    team1: player.BlackPlayer,
    team2: player.WhitePlayer,
    winner: undefined,
    setWinner: function (winner) {
        try {
            if (winner !== this.team1 && winner !== this.team2)
                throw new Error("winner is not one of the compiting player");
            this.winner = winner;
        }
        catch (err) {
            console.error(err);
        }
    }
};
console.log(checkersGame);
checkersGame.setWinner(player.BlackPlayer);
console.log(checkersGame);
