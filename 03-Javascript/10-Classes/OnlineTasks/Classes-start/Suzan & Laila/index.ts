enum teams {
    sachnin = "SACHNIN",
    beitar = "BEITAR",
    keyryatShmona = "KYRIAT_SHMONA",
    natanya = "HAPOEL_NATANYA",
    haifa = 'HAPOELHAIFA',
  }

  
  class Games {
    team1: string;
    team2: string;
    winner: string | undefined;
  
    constructor(team1: teams, team2: teams) {
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

  const game1 = new Games(teams.haifa, teams.keyryatShmona);
  const game2 = new Games(teams.beitar, teams.natanya);
  const game3 = new Games(teams.sachnin, teams.keyryatShmona);
  const game4 = new Games(teams.beitar, teams.haifa);

  game1.setWinner(teams.haifa);
  game2.setWinner(teams.beitar);
  game3.setWinner(teams.keyryatShmona);
  game4.setWinner(teams.haifa);

  const games = [game1, game2, game3, game4];

  console.log(games);