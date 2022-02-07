class league{
  teams:Array<team> = [];
  constructor(team1:team,team2:team,team3:team,team4:team){
      try{
    this.teams.push(team1,team2,team3,team4);
      }
      catch(error){
          console.error(error);
      }
  }
}


class team{
    name: string;
    points:number;
    constructor(team1:Teams,points:number){
       this.name = team1;
       this.points = points;
    }
}

enum Teams{
    Sakhnin = "SAKHNIN",
    MaccabiHaifa="MACCABIHAIFA",
    Ashdod="ASHDOD",
    TelAviv="TELAVIV",
};


console.log( new team(Teams.Sakhnin,90));
console.log(new league(new team(Teams.Sakhnin,90),new team(Teams.MaccabiHaifa,80),new team(Teams.Ashdod,70),new team(Teams.TelAviv,45)));