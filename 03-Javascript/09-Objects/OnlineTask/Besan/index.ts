enum teams{
    "SACHNIN", "BEITAR"
}

enum food{
    "Pasta", "Burger"
}

interface Eat{
    amount: number
    day: string
    
}

interface Game {
  date: Date;
  team1: teams;
  team2: teams;
  winner: string | undefined;
  setWinner(winner: teams);
}

interface Team {
  name: string;
  result?: number;
}
const schaninBitarJs: Game = {
  date: new Date("02-13-2022"),
  team1: teams.BEITAR,
  team2: teams.SACHNIN,
  winner: undefined,
  setWinner(winner) {
    try {
      if (winner !== this.team1 && winner !== this.team2)
        throw new Error("winner is not one of the compiting teams");
      this.winner = winner;
    } catch (err) {
      console.error(err);
    }
  },
};

console.log(schaninBitarJs);
schaninBitarJs.setWinner(teams.BEITAR);
console.log(schaninBitarJs)