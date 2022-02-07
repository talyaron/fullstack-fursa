enum players{
    "Ronaldo", "Messi" , " Mbappi" , "Zidane" , "Hazard"
}

interface player {
  FirstPlayer: players;
  SecondPlayer: players;
  winner: string | undefined;
  setFaster(winner: players);
}


const MessiVsRonaldo: player = {
  
  FirstPlayer: players.Messi,
  SecondPlayer: players.Ronaldo,
  winner: undefined,
  setFaster(winner) {
    try {
      if (winner !== this.FirstPlayer && winner !== this.SecondPlayer)
        throw new Error("player is not found");
      this.winner = winner;
    } catch (err) {
      console.error(err);
    }
  },
};

console.log(MessiVsRonaldo);
schaninBitarJs.setFaster(players.Ronaldo);
console.log(MessiVsRonaldo)
