export { }
const user = require("../Schema/user");
const crypto = require('crypto');

exports.Login = async (req, res) => {
    console.log("login!");
    const { email, pass } = req.body;

    try {
        const _user = await user.findOne({ email: email });
        if (!_user) {
            res.send({ ok: false, message: "login failed doesn't exists!" });
        } else {
            const hashPassword = crypto.createHash('sha256').update(pass).digest('base64');
            if (hashPassword === _user.password) {
                res.send({ ok: true, message: "login successfully!" });
            }
            else {
                res.send({ ok: false, message: "wrong email or password!" });
            }
        }
    } catch (err) {
        res.send({ ok: false, message: "Error!" });
    }
}

exports.SignUp = async (req, res) => {
    console.log("signup!");
    const { email, pass } = req.body;

    try {
        const _user = await user.findOne({ email: email });
        if (!_user) {
            const hashPassword = crypto.createHash('sha256').update(pass).digest('base64');
            const userToAdd = new user({
                email: email.toLowerCase(),
                password: hashPassword
            });
            userToAdd.save().then(() => {
                console.log("user saved");
            });

            res.send({ ok: true, message: "signUp successfully!" });
        } else {
            res.send({ ok: false, message: "signUp failed user already exists!" });
        }
    } catch (err) {
        res.send({ ok: false, message: "Error!" });
    }
}