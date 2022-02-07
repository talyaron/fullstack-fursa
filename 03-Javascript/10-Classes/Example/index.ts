enum teams {
  sachnin = "SACHNIN",
  beitar = "BEITAR",
  keyryatShmona = "KYRIAT_SHMONA",
  natanya = "HAPOEL_NATANYA",
}

interface Game {
  date: Date;
  team1: teams;
  team2: teams;
  winner: teams | undefined;
  setWinner(winner: teams);
}

interface Team {
  name: string;
  result?: number;
}
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

class Games {
  team1: string;
  team2: string;
  winner: string | undefined;

  constructor(team1: teams, team2: teams) {
    console.log(team1);
    this.team1 = team1;
    this.team2 = team2;
  }

  setWinner(winner: teams) {
    try {
      if (winner !== this.team1 && winner !== this.team2)
        throw new Error("The winner is not from the compiting teams");
      this.winner = winner;
    } catch (err) {
      console.error(err);
    }
  }
  set theWinner(winner: teams){
    try {
        if (winner !== this.team1 && winner !== this.team2)
          throw new Error("The winner is not from the compiting teams");
        this.winner = winner;
      } catch (err) {
        console.error(err);
      }
  }

  get getTheWinner():string{
      return this.winner.toString()
  }
}

const kyriatSmoneVsNatanya = new Games(teams.natanya, teams.keyryatShmona);
// kyriatSmoneVsNatanya.setWinner(teams.sachnin);
kyriatSmoneVsNatanya.theWinner = teams.keyryatShmona;
console.log(kyriatSmoneVsNatanya.getTheWinner)

console.dir(kyriatSmoneVsNatanya);
