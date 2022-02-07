//create an object with enum
//about a topic you like.
//create some method, with this key word


enum countrys{
    "Moscow", "Paris"
}

interface trips {
  date: Date;
  country_1 : countrys;
  country_2: countrys;
  choose : string | undefined;
  setcountry(choose : countrys);
}

interface Team {
  name: string;
  result?: number;
}
const obj: trips = {
  date: new Date("02-13-2022"),
  country_1: countrys.Moscow,
  country_2: countrys.Paris,
  choose: undefined,
  setcountry(choose) {
    try {
      if (choose !== this.country_1 && choose !== this.country_2)
        throw new Error("NO");
      this.choose = choose;
    } catch (err) {
      console.error(err);
    }
  },
};


