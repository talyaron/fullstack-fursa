import jwt from "jwt-simple";
import Users from "../model/schema/userModel";



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

