import jwt from 'jwt-simple';

export default function loginStatus(req, res, next): void {
    try {
        // console.log(req.cookies);
        const {userInfo} = req.cookies;

        if (userInfo) {
            const JWT_SECRET = process.env.JWT_SECRET;
            const decodedJWT = jwt.decode(userInfo, JWT_SECRET);
            const {userId, type} = decodedJWT;
            if (type && userId){
                req.type = type;
                req.userId = userId;
            }else {
                req.type = 'unknown'
                req.userId = -1;
            }
        }
        next();

    } catch (error) {
        console.error('loginStatus error: ',error.message)
        res.status(401).send({error: error.message});
    }
}