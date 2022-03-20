export { }
const user = require("../Schema/user");
const list = require("../Schema/list");
const crypto = require('crypto');
const jwt = require('jwt-simple');

exports.addNewMeeting = async (req, res) => {
    console.log("addNewMeeting!");
    const { email, allUsers, bringItems, details } = req.body;

    try {
        // const { userInfo } = req.cookies;
        // const decoded = jwt.decode(userInfo, process.env.JWT_SECRET);
        // const _user = await user.findOne({ _id: decoded.value.id });
        const _user = await user.findOne({ _id: req.userID });
        if (!_user) {
            res.send({ ok: false, message: "user doesn't exists!" });
        } else {
            const listToAdd = new list({
                meetingAdmin: { email: _user.email },
                whoIsThere: allUsers,
                bringItems: bringItems,
                meetingDetails: details
            });
            listToAdd.save().then(() => {
                console.log("list saved");
            });
            res.send({ ok: true, id: listToAdd._id, message: "list saved successfully!" });
        }
    } catch (err) {
        res.send({ ok: false, message: "Error!" });
    }
}

exports.getListByUser = async (req, res) => {
    console.log("getListByUser!");
    const { email } = req.body;

    try {
        // const { userInfo } = req.cookies;
        // const decoded = jwt.decode(userInfo, process.env.JWT_SECRET);
        const _user = await user.findOne({ _id: req.userID });
        if (!_user) {
            res.send({ ok: false, message: "user doesn't exists!" });
        } else {
            const foundLists = await list.find({
                $or: [
                    { "meetingAdmin.email": email },
                    { whoIsThere: { $elemMatch: { email: email } } }
                ]
            })
            res.send({ ok: true, lists: foundLists });
        }
    } catch (err) {
        res.send({ ok: false, message: "Error!" });
    }
}

exports.getListByID = async (req, res) => {
    console.log("getListByID!");
    const { id } = req.body;

    try {
        // const { userInfo } = req.cookies;
        // const decoded = jwt.decode(userInfo, process.env.JWT_SECRET);
        const _user = await user.findOne({ _id: req.userID });
        if (!_user) {
            res.send({ ok: false, message: "user doesn't exists!" });
        } else {

            const _list = await list.findOne({ _id: id });
            if (!_list) {
                res.send({ ok: false, message: "list doesn't exists!" });
            } else {
                res.send({ ok: true, list: _list, message: "fetch successfully!" });
            }
        }
    } catch (err) {
        res.send({ ok: false, message: "Error!" });
    }
}

/**
 *     "updatedList": {
        "items": "asd",
        "userName": {
            "email": "jbareen@jbareen"
        }
    }
 */

exports.updateListByID = async (req, res) => {
    console.log("updateListByID!");
    const { id, updatedList } = req.body;
    console.log({ id: id, updatedList: updatedList })

    try {
        let newListUpdate = await list.findOneAndUpdate(
            { _id: id, "bringItems.userName.email": updatedList.userName.email },
            { $push: { "bringItems.$.items": updatedList.items } }
        )
        if (!newListUpdate) {
            newListUpdate = await list.findOneAndUpdate(
                { _id: id },
                { $push: { bringItems: updatedList } }
            )
        }
        if (newListUpdate) {
            res.send({ ok: true, list: newListUpdate });
        } else {
            res.send({ ok: false });
        }
    } catch (error) {

    }
}

exports.updateFrindList = async (req, res) => {
    console.log("updateFrindList!");
    const { id, updatedList } = req.body;
    console.log({ id: id._id, updatedList: updatedList })

    try {
        let newListUpdate = await list.findOneAndUpdate(
            { _id: id._id },
            { $push: { whoIsThere: updatedList } }
        )
        if (newListUpdate) {
            res.send({ ok: true, list: newListUpdate });
        } else {
            res.send({ ok: false });
        }
    } catch (error) {

    }
}


/**
 * In database document looks like this:
 * "postImg" : { "$binary" : "/9j/4AAQS.blaBla.long.binary.string.."}
 * 
 * Then on client:
 * <img src={`data:image/png;base64,${props.postImgBase64}`} alt="a"/>
 * 
 * The image seems to be fetched as a node.js Buffer type, which is then encoded as an array of bytes and sent to client.
 *  You need base64 string on the client.
 * The easiest way to get there would be to convert buffer to base64 string on your backend, and then send that to client. Eg.
 * 
    const post = await getPostImgFromDatabase();
    res.send({
    ...post
    postImgBase64: Buffer.from(post.postImg).toString('base64')
    });
 * 
 */
exports.testImageInsert = async (req, res) => {
    console.log('get items')
    const url = req.body;
    try {
        let newListUpdate = await list.findOneAndUpdate(
            {},
            { "meetingDetails.imgURL": url }
        )
        res.status(200).send(newListUpdate);
    } catch (error) {
        res.status(404).send({ message: error.message });
    }
}


exports.getListByUserUpComing = async (req, res) => {
    console.log("getListByUserUpComing!");
    const { email } = req.body;

    try {
        // const { userInfo } = req.cookies;
        // const decoded = jwt.decode(userInfo, process.env.JWT_SECRET);
        // const _user = await user.findOne({ _id: req.userID });
        const _user = await user.findOne({ email: email });
        if (!_user) {
            res.send({ ok: false, message: "user doesn't exists!" });
        } else {
            const newDate = new Date();
            const foundLists = await list.find({
                $and: [{
                    $or: [
                        { "meetingAdmin.email": email },
                        { whoIsThere: { $elemMatch: { email: email } } }
                    ], "meetingDetails.date": {
                        $gte: newDate
                    }
                }]
            })
            res.send({ ok: true, lists: foundLists });
        }
    } catch (err) {
        res.send({ ok: false, message: "Error!" });
    }
}


exports.getListByUserPrevious = async (req, res) => {
    console.log("getListByUserUpComing!");
    const { email } = req.body;

    try {
        // const { userInfo } = req.cookies;
        // const decoded = jwt.decode(userInfo, process.env.JWT_SECRET);
        // const _user = await user.findOne({ _id: req.userID });
        const _user = await user.findOne({ email: email });
        if (!_user) {
            res.send({ ok: false, message: "user doesn't exists!" });
        } else {
            const newDate = new Date();
            const foundLists = await list.find({
                $and: [{
                    $or: [
                        { "meetingAdmin.email": email },
                        { whoIsThere: { $elemMatch: { email: email } } }
                    ], "meetingDetails.date": {
                        $lt: newDate
                    }
                }]
            })
            res.send({ ok: true, lists: foundLists });
        }
    } catch (err) {
        res.send({ ok: false, message: "Error!" });
    }
}