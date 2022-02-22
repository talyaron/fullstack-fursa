export { }
const user = require("../Schema/user");
const list = require("../Schema/list");
const crypto = require('crypto');

exports.addNewMeeting = async (req, res) => {
    console.log("addNewMeeting!");
    const { email, allUsers, bringItems, details } = req.body;

    try {
        const _user = await user.findOne({ email: email });
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
            res.send({ ok: true, message: "list saved successfully!" });
        }
    } catch (err) {
        res.send({ ok: false, message: "Error!" });
    }
}

exports.getListByUser = async (req, res) => {
    console.log("getListByUser!");
    const { email } = req.body;

    try {
        const _user = await user.findOne({ email: email });
        if (!_user) {
            res.send({ ok: false, message: "user doesn't exists!" });
        } else {
            list.find({}, function (err, allLists) {
                let listMap = [];
                allLists.forEach(function (_list) {
                    if (_list.meetingAdmin.email !== email) {
                        const whoIsThereFound = _list.whoIsThere.filter(element => {
                            if (element.email === email)
                                return element;
                        });
                        if (JSON.stringify(whoIsThereFound) !== JSON.stringify([])) {
                            listMap.push(_list);
                        }
                    } else {
                        listMap.push(_list);
                    }
                });
                res.send({ ok: true, lists: listMap });
            });
        }
    } catch (err) {
        res.send({ ok: false, message: "Error!" });
    }
}

exports.getListByID = async (req, res) => {
    console.log("getListByID!");
    const { id } = req.body;

    try {
        const _list = await list.findOne({ _id: id });
        if (!_list) {
            res.send({ ok: false, message: "list doesn't exists!" });
        } else {
            res.send({ ok: true, list: _list, message: "fetch successfully!" });
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
        if(newListUpdate){
            res.send({ ok: true, list: newListUpdate });
        }else{
            res.send({ ok: false });
        }
    } catch (error) {
        
    }
}