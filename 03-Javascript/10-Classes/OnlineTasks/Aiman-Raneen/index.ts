class Game {
  private team1: string;
  private team2: string;
  private date: Date;
  private score:string;
  constructor(team1: string, team2: string, date: Date) {
    this.team1 = team1;
    this.team2 = team2;
    this.date = date;
  }
  set set_score(score:string) {
      this.score = score;
  }

  get get_score(){
      return this.score;
  }
  get getdate() {
    return this.date;
  }
  get get_team1() {
    return this.team1;
  }

  get get_team2() {
    return this.team2;
  }

  set set_team1(team1: string) {
    this.team1 = team1;
  }

  set set_team2(team2: string) {
    this.team2 = team2;
  }

  set setDate(date: Date) {
    this.date = date;
  }
}

const arr: Array<Game> = [];

const game = new Game("Real Madrid" , "Barcelona" , new Date('12-03-2022'));
arr.push(game);
const game1 = new Game("Chelsea" , "Manchester United" , new Date('12-03-2022'));
arr.push(game1);
const game2 = new Game("Valencia" , "Liverpool" , new Date('12-03-2022'));
arr.push(game2);
const game3 = new Game("Machester City" , "Barcelona" , new Date('12-03-2022'));
arr.push(game3);


function filter_by_date(){
    
}
