import jwt from "jwt-simple";

export function isUser(req, res, next) {
    try {
        const {userLogIn} = req.cookies;

        if(userLogIn){
            const JWT_SECRET = process.env.JWT_SECRET;
            const decodedJWT = jwt.decode(userLogIn, JWT_SECRET);
            const { role, userId } = decodedJWT;
            if(role === 'user'){
                req.userId = userId;
                req.role = role;
                next();
            } else{
                res.send({ok: false})
            }
        }
    } catch (err) {
        res.send({ error: err.message });
    }
}