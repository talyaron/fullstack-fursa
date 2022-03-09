import Users from "../model/userModel";

exports.Login = async (req, res) => {
  console.log("Login");
  const { email, password } = req.body;
  console.log(email, password);
  try {
    const user = await Users.findOne({ email: email });
    console.log(user.email);
    if (user != undefined) {
      if (user.password === password) res.send({ ok: true });
      else {
        res.send({ ok: false, error: "wrong email or password" });
      }
    } else {
      res.send({ ok: false, error: "user not found" });
    }
  } catch (error: any) {
    res.send({ ok: false, error: error.message });
  }
};
