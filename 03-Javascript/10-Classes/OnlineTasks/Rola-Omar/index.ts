enum teams {
  realmadrid = "Madrid",
  barcelona = "Barcelona",
  valencia = "Valencia",
  sevilla = "Sevilla",
}

interface Game {
  team1: teams;
  team2: teams;
  winner: teams | undefined;
}

class Games {
  team1: string;
  team2: string;
  winner: string | undefined;

  constructor(team1: teams, team2: teams) {
    this.team1 = team1;
    this.team2 = team2;
  }
  settheWinner(winner: teams) {
    try {
      if (winner !== this.team1 && winner !== this.team2)
        throw new Error("The winner is not from the compiting teams");
      this.winner = winner;
    } catch (err) {
      console.error(err);
    }
  }

}

const First = new Games(teams.realmadrid, teams.barcelona);
First.settheWinner(teams.realmadrid);

const second = new Games(teams.realmadrid, teams.sevilla);
second.settheWinner(teams.sevilla);

const third = new Games(teams.valencia, teams.sevilla);
third.settheWinner(teams.sevilla);

const fourth = new Games(teams.valencia, teams.barcelona);
fourth.settheWinner(teams.valencia);


// function addTeams(t1, t2) {
//   const array = [];
//   array.push(t1,t2)
//   for (let i in array)
//     console.log("The match winner of game " + i + " is " + array[i].winner)
// }

// addTeams(new Games(teams.realmadrid,teams.barcelona))
const array = [];
array.push(First); array.push(second); array.push(third); array.push(fourth);
for (let i in array)
  console.log("The match winner of game " + i + " is " + array[i].winner)
  
