var players;
(function (players) {
    players[players["Ronaldo"] = 0] = "Ronaldo";
    players[players["Messi"] = 1] = "Messi";
    players[players[" Mbappi"] = 2] = " Mbappi";
    players[players["Zidane"] = 3] = "Zidane";
    players[players["Hazard"] = 4] = "Hazard";
})(players || (players = {}));
var MessiVsRonaldo = {
    FirstPlayer: players.Messi,
    SecondPlayer: players.Ronaldo,
    winner: undefined,
    setFaster: function (winner) {
        try {
            if (winner !== this.FirstPlayer && winner !== this.SecondPlayer)
                throw new Error("player is not found");
            this.winner = winner;
        }
        catch (err) {
            console.error(err);
        }
    }
};
console.log(MessiVsRonaldo);
schaninBitarJs.setFaster(players.Ronaldo);
console.log(MessiVsRonaldo);
