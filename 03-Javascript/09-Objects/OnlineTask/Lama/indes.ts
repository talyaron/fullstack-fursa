enum colors{
    BLUE, GREEN,WHITE
}

interface ALLCOLORS {
    color1: colors;
    color2: colors;
    color3:colors
    printColors();
  }
  
  const allcolors: ALLCOLORS = {
    color1: colors.BLUE,
    color2: colors.GREEN,
    color3: colors.WHITE,
    printColors() {
      try {
       console.log(this.color1);
       console.log(this.color2);
       console.log(this.color3);
      } catch (err) {
        console.error(err);
      }
    },
  };
  
  console.log(colors);
  allcolors.printColors();
