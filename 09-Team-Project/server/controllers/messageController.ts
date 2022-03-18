import Messages from '../model/messageModel'

exports.getAllMessages = async (req, res) => {
    console.log('getAllMessages');
    try {
        const _msg = await Messages.find({});
        res.send({ ok: true, Messages: _msg });
    } catch (error: any) {
        res.send({ ok: false, error: error.message });
    }
}



exports.getMessagesByUserName = async (req, res) => {
    console.log('getMessagesByUserName');
    const { userName } = req.body;
    console.log(userName)
    try {
        //     const _msg = await Messages.find({ "user.name": userName });

        const _msg = await Messages.find(   ///find msges from or to userName

            {
                $or: [{
                    from: userName
                },
                {
                    To: userName
                }]
            }

        );

        res.send({ ok: true, Messages: _msg });
    } catch (error: any) {
        res.send({ ok: false, error: error.message });
    }
}

exports.addNewMessages = async (req, res) => {
    console.log('addNewMessages');

    // chatId: String,
    // from: String,
    // date: Date,
    // type: { type: String, enum: ['video', 'picture', 'message', 'location'] },
    // video: String,
    // picture: String,
    // message: String,
    // location: { lat: String, lng: String },
    // communicationType:{ type: String, enum: ['org', 'user'] }, //user = communication between org-user; org = comm.between org-org
    // accidentId:String,
    // orgId:String


    // const { 
    //     emergency,
    //     date,
    //     address,
    //     media,
    //     call,
    //     description,
    //     user,
    //     org
    // } = req.body;

    try {
        const _msg = await new Messages({
            chatId: 123,
            from: 'org 2',
            To: 'user2',
            date: new Date(),
            type: 'message',
            video: null,
            picture: null,
            message: "hello test org 1",
            location: { lat: '00', lng: '00' },
            communicationType: 'user', //user = communication between org-user; org = comm.between org-org
            accidentId: 1234,
            orgId: 2623
        });
        _msg.save().then("message saved!");
        res.send({ ok: true, Messages: _msg });
    } catch (error: any) {
        res.send({ ok: false, error: error.message });
    }
}