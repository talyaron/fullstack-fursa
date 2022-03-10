import jwt from "jwt-simple";

export function loginStatus(req, res, next): void {
  try {
    const { userInfo } = req.cookies;
    
    if (userInfo) {
      const JWT_SECRET = process.env.JWT_SECRET;
      const decodedJWT = jwt.decode(userInfo, JWT_SECRET);
      console.log(decodedJWT);
      const { role, userId } = decodedJWT;
      if (role) {
        req.role = role;
      } else {
        req.role = "public";
      }
      if (userId) {
        req.userId = userId;
      } else {
        req.userId = false;
      }
    }
    next();
  } catch (err) {
    console.error(err.message);
    res.status(401).send({ error: err.message });
  }
}

export function isAdmin(req, res, next) {
  try {
    if (req.role === "admin") {
      next();
    } else {
      res.status(401).send({ error: "Not authorized" });
    }
  } catch (err) {
    res.send({ error: err.message });
  }
}
