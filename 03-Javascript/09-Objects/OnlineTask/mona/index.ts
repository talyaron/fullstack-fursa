enum types{
    "PINE","MULTILAYER"
}
interface Wood{
    type:types;
    length:number;
    width:number;
    thick:number;
    setType(type:types)
}

const orderwood:Wood={
    type:types.PINE,
    length:360,
    width:160,
    thick:52,


    setType(type){
        try{
        if(type!=types.PINE&&type!=types.MULTILAYER)
        throw new console.error("type not exist");
        this.type=type
        }
        catch(err){
            console.error(err);
        }

    }

}