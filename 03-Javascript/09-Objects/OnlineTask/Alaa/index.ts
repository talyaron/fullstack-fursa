enum player{
    "BlackPlayer", "WhitePlayer"
}

interface Game {
  date: Date;
  player1: player;
  player2: player;
  point1:number;
  point2:number;
  winner: string | undefined;

  setWinner();
}

interface Team {
  name: string;
  result?: number;
}
const checkersGame: Game = {
  date: new Date("06-19-2022"),
  player1: player.BlackPlayer,
  player2: player.WhitePlayer,
  point1:100,
  point2:100, 
  winner: undefined,
  setWinner() {
    try {
      if (point1 = point2)
        throw new Error("winner is not one of the compiting player");
      this.winner = winner;
    } catch (err) {
      console.error(err);
    }
  },
};

console.log(checkersGame);
checkersGame.setWinner(player.BlackPlayer);
console.log(checkersGame)
