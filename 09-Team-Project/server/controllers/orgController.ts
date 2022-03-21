const bcrypt = require("bcrypt");
import Org from '../model/orgModel';

exports.Login = async (req, res) => {
    console.log('login')
    try {
        const { email, password } = req.body;
        console.log(email, password)
        if (!password || !email) throw ' invalid fields'
        const _user = await Org.findOne({ email: email });
        if (_user) {
            // check user password with hashed password stored in the database
            const validPassword = await bcrypt.compare(password, _user.password);
            if (validPassword) {
                res.send({ ok: true, user: _user })
            }
            else {
                res.send({ ok: false, message: "wrong email or password!" });
            }
        }
        else {
            res.send({ ok: false })
        }
    } catch (error) {
        res.send({ error: error.message });
    }
}

exports.Signup = async (req, res) => {
    try {
        const { email, password, fullName, phone, city, description, Url } = req.body;
        console.log(email, password)
        if (!password || !email) throw ' invalid fields'
        const _user = await Org.findOne({ email: email });
        if (!_user) {
            // if (email && password && fullName && phone && city && description & Url) {
            const _newUser = new Org({
                orgName: fullName,
                email: email,
                password: password,
                phone: phone,
                city: city,
                description: description,
                webUrl: Url,
                accidentType: "",
            })

            // generate salt to hash password
            const salt = await bcrypt.genSalt(10);
            // now we set user password to hashed password
            _newUser.password = await bcrypt.hash(_newUser.password, salt);
            console.log(_newUser.password)

            _newUser.save().then("org saved!");
            res.send({ ok: true, message: "User Added!" });
            // }
        }
        else {
            res.send({ ok: false, message: "User already exists!" })
        }
    } catch (error) {
        res.send({ ok: false, message: error.message });
    }
}