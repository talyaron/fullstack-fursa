enum test{
    asd = "asd", qwe = "qwe"
};

interface race{
    first: test;
    second: test;
    winner: test | undefined;
    setWinner(winner: test);
}

const firstRace:race= {
    first: test.asd,
    second: test.qwe,
    winner: undefined,
    setWinner(winner){
        try {
            if (winner !== this.first && winner !== this.second)
              throw new Error("winner is not of the class members!");
            this.winner = winner;
          } catch (err) {
            console.error(err);
          }
    }
}

console.log(firstRace);
firstRace.setWinner(test.asd);
console.log(firstRace)