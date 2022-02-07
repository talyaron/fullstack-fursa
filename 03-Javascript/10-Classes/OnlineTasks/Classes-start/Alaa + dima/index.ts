enum country {
    Israle = "Israle",
    Holand="Holand",
    Turkish="Turkish"
}

class travle {
    name : string;
    date : Date;
    From: country;
    To: country;
    price: number;
    middleStation:country | undefined;

    constructor (name:String ,date : Date ,From: country,To: country,price: number){
        this.name = name;
        this.date = date;
        this.To=To;
        this.From=From;
        this.price=price;
        middleStation=undefined;


    }

    setMiddleStation (ms:country){
        try{
        if(ms!==country.Israle && ms!==country.Holand && ms!==country.Turkish){
            throw new Error ("the country is not exisits")
        }
        this.middleStation = ms ;
        }
        catch(err){
            console.error(err);
        }
    }
    set goTo(To:country){
        this.To=To;
    }
    set comeFrom(from1:country){
       this.From=from1;
    }

    get person():string{
        return this.name;

    } 
    get travleDate(): Date {
        return this.date;
    }
    get comeFrom():country{
        return from;
    }
    get goTo():country{
        return to;
    }
    get getPrice():number{
        return price;
    }

}

const arr : Array<travle> = [new travle("dima", new Date ('02-02-2022'),country.Holand,country.Israle,800,country.assda),
new travle("dima", new Date ('02-02-2022'),country.Holand,country.Israle,800,country.asdff),
new travle("dima", new Date ('02-02-2022'),country.Holand,country.Israle,750,country.Turkish),
new travle("dima", new Date ('02-02-2022'),country.Holand,country.Israle,900,country.Turkish),
new travle("dima", new Date ('02-02-2022'),country.Holand,country.Israle,1800,country.Turkish),
new travle("dima", new Date ('02-02-2022'),country.Holand,country.Israle,800,country.Turkish),
new travle("dima", new Date ('02-02-2022'),country.Holand,country.Israle,8000,country.Turkish),
new travle("dima", new Date ('02-02-2022'),country.Holand,country.Israle,1500,country.Turkish)]
