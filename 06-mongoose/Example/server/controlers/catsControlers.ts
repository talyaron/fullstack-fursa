import Cats from '../model/schema/catsModel'

export async function getKitens(): Promise<any> {
    try {
      const nameRegEx = new RegExp("hu", "i");
      const kittens = await Cats.find({});
      console.log(kittens);
      return kittens;
    } catch (err: any) {
      console.error(err);
      return false;
    }
  }

 export async function aggragateCatsLives() {
    const filter = { extraLife: true };
    let docs = await Cats.aggregate([
      { $match: filter },
      {
        $group: {
          _id: "$extraLife",
          numberOfCats: { $sum: 1 },
          count: { $sum: "$lifes" },
          avg: { $avg: "$lifes" },
        },
      },
    ]);
    console.log("----");
    console.log(docs);
  }