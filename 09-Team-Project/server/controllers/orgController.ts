import Org from '../model/orgModel';

exports.Login = async (req, res) => {
    console.log('login')
    try {
        const { email, password } = req.body;
        console.log(email, password)
        if (!password || !email) throw ' invalid fields'
        const _user = await Org.findOne({ email: email });
        if (_user) {
            if (_user.password === password) {
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