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
                meetingAdmin: {email: _user.email},
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
    console.log("get lists!");
    const { email, pass } = req.body;

    try {
        const _user = await user.findOne({ email: email });
        if (!_user) {
            res.send({ ok: false, message: "login failed doesn't exists!" });
        } else {
            const hashPassword = crypto.createHash('sha256').update(pass).digest('base64');
            if (hashPassword === _user.password) {
                const curretUser = { email: _user.email };
                res.send({ ok: true, user: curretUser, message: "login successfully!" });
            }
            else {
                res.send({ ok: false, message: "wrong email or password!" });
            }
        }
    } catch (err) {
        res.send({ ok: false, message: "Error!" });
    }
}