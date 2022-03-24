import Users from "../model/userModel";
import jwt from "jwt-simple";

exports.Login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Users.findOne({ email: email });
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

export async function isUser(req, res, next) {
  try {
    const { user } = req.cookies;
    if (user) {
      const JWT_SECRET = process.env.JWT_SECRET;
      const decodedJWT = jwt.decode(user, JWT_SECRET);
      const { role, userId } = decodedJWT;
      if (!userId || !role) throw "invalid fields"
      const result = await Users.find({ "_id": userId });
      if (result.length > 0) {
        if (role === result[0].type) {
          req.userId = userId;
          req.role = role;
          next();
        } else {
          res.status(401).send({ error: "Not authorized" });
        }
      } else res.status(401).send({ error: "Not authorized" });
    }
    else res.status(401).send({ error: "Not authorized" });
  } catch (err) {
    res.send({ error: err.message });
  }
}
