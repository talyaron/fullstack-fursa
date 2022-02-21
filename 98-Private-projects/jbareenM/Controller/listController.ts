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