export { }
const user = require("../Schema/user");
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const jwt = require('jwt-simple');

require('dotenv').config();

export function checkStatus(req, res, next) {
    try {
        const { userInfo } = req.cookies;
        const decoded = jwt.decode(userInfo, process.env.JWT_SECRET);
        if (decoded.value) {
            req.userID = decoded.value.id;
            req.userEmail = decoded.value.email;
        }
        next();
    } catch (error) {
        res.send({ error: error.message });
    }
}

exports.LogOut = async (req, res) => {
    try {
        res.clearCookie("userInfo");
        res.send({ ok: true, message: "logout succesfully!" });
    } catch (error) {
        res.send({ ok: false, message: "logout failed!" });
    }
}

exports.Login = async (req, res) => {
    console.log("login!");
    const { email, pass } = req.body;

    try {
        const _user = await user.findOne({ email: email.toLowerCase() });
        if (!_user) {
            res.send({ ok: false, message: "login failed doesn't exists!" });
        } else {
            const hashPassword = crypto.createHash('sha256').update(pass).digest('base64');
            if (hashPassword === _user.password) {
                const curretUser = { email: _user.email };
                const payload = { value: { email: email, id: _user._id }, status: "logged" };
                const secret = process.env.JWT_SECRET;

                const token = jwt.encode(payload, secret);

                res.cookie('userInfo', token);
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

            const payload = { value: { email: email, id: userToAdd._id }, status: "logged" };
            const secret = process.env.JWT_SECRET;

            const token = jwt.encode(payload, secret);

            res.cookie('userInfo', token);
            res.send({ ok: true, message: "signUp successfully!" });
        } else {
            res.send({ ok: false, message: "signUp failed user already exists!" });
        }
    } catch (err) {
        res.send({ ok: false, message: "Error!" });
    }
}

exports.getAllUsers = async (req, res) => {
    console.log("get all users!");

    try {
        user.find({}, function (err, users) {
            var userMap = [];
            users.forEach(function (_user) {
                userMap.push({
                    email: _user.email
                })
            });
            res.send({ ok: true, users: userMap });
        });
    } catch (err) {
        res.send({ ok: false, message: "Error!" });
    }
}

exports.sendInvitation = async (req, res) => {
    console.log("send invitation!");
    const { meetingAdmin, friendList, id } = req.body;
    console.log(meetingAdmin, friendList);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASS
        }
    });

    friendList.forEach(_user => {
        const mailOptions = {
            from: meetingAdmin.email,
            to: _user.email,
            subject: `${meetingAdmin.email} send you invitation for IBring`,
            text: `Choose stuff to bring\n http://localhost:3000/List/${id}`
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log("email not found!");
                // res.send({ok: false});
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    })
    res.send({ ok: true });
}