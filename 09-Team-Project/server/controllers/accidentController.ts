import accident from '../model/accidentModel';

exports.getAllAccidents = async (req, res) => {
    console.log('getAllAccidents');
    try {
        const _acc = await accident.find({});
        res.send({ ok: true, accidents: _acc });
    } catch (error: any) {
        res.send({ ok: false, error: error.message });
    }
}

exports.getAccidentByID = async (req, res) => {
    console.log('getAccidentByID');
    const { id } = req.body;
    try {
        const _acc = await accident.findOne({ _id: id });
        // const _acc = await accident.findOne({ });
        res.send({ ok: true, accident: _acc });
    } catch (error: any) {
        res.send({ ok: false, error: error.message });
    }
}

exports.getAccidenstByUserName = async (req, res) => {
    console.log('getAccidentByUserName');
    const { userName } = req.body;
    console.log(userName)
    try {
        const _acc = await accident.find({ "user.name": userName });
        // const _acc = await accident.findOne({ });
        res.send({ ok: true, accidents: _acc });
    } catch (error: any) {
        res.send({ ok: false, error: error.message });
    }
}

exports.addNewAccident = async (req, res) => {
    console.log('addNewAccident');
    const { type,
        emergency,
        date,
        address,
        media,
        call,
        description,
        user,
        org
    } = req.body;
    /*
        type: String,
        emergency : Boolean || null,
        date: String,
        address:String,
        media: [MediaSchema],
        call: Object,
        description: String,
        user: UserSchema,
        org:OrgSchema
    */
    try {
        const _acc = await new accident({
            type: "a",
            emergency: true,
            date: new Date(),
            address: "123",
            media: {
                src: "String",
                type: "String"
            },
            call: "123",
            description: "123",
            user: {
                userID: 23132132,
                name: "String",
                email: "String",
                password: "String",
                phone: "String",
                location: "String",
                gender: "String",
            },
            org: {}
        });
        _acc.save().then("accident saved!");
        // const _acc = await accident.findOne({ });
        res.send({ ok: true, accidents: _acc });
    } catch (error: any) {
        res.send({ ok: false, error: error.message });
    }
}