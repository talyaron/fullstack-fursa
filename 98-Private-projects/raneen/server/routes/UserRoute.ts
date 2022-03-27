const express = require('express');
const router = express.Router();
import Users from '../model/schema/UserSchema';
import jwt from "jwt-simple";

router.post("/add-user", async (req, res)=>{
      try {
        const { name, password, email } = req.body;
        const userEmail = await Users.findOne({ email: email });
        if (!userEmail) {
            const newUser = await new Users({ name : name, email: email, password: password });
            newUser.save();
            res.status(200).send('signup successful');
        }
        else {
            res.send('this email already exists')
            }
        }
     catch (error) {
        res.status(400).send({ error: error.message });
    }
})
    // try {
    //     const {name, password,email } = req.body;
        
        
    //     if (!name) throw new Error("No name in body");
    //     if (!password) throw new Error("No password in body");
    //     // if (!city) throw new Error("No city in body");
    //       if (!email) throw new Error("No city in body");
    //     // res.cookie('mySecretPassword', {id:name});
    //     res.send(name);        

    
    //     const ownerDB = new Users({
    //       name,
    //       password,
    //       email,
    //     });
    
    //     const query = { name:name},
      
    //       options = { upsert: true, new: true, setDefaultsOnInsert: true };
      
    //     const oldItem = await Users.findOneAndUpdate(query,ownerDB,options);
    //     console.log(oldItem);
    //     res.send(oldItem);
    //   } catch (error) {
    //     console.info('ON app.post("/add-user"')
    //     console.log(req.body);
    //     console.error(error.message);
    //     res.send({ error: error.message });
    //   }
.get("/privateInfo", (req, res) => {
    //get cookie
    const { mySecretPassword } = req.cookies;
    const { id } = mySecretPassword;
    //get user from database
    // if exists, responce with user's data

    res.send({ ok: true });
    console.log("private");
  })
  .post('/logIn', async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(email);
        const user_ = await Users.findOne({ email: email });
         console.log(user_.name);

        if (!user_) {
            console.log("not found1")
            res.send({ ok: false })
        }
        else {
            if (user_.password === password) {
                // const JWT_SECRET = process.env.JWT_SECRET;
                // const encodedJWT = jwt.encode(
                //   //  { userId: user_._id, role: "user" },
                //     {  role: "user" },
                //     JWT_SECRET
                // );
                // console.log("found")
                // res.cookie("userLogIn", encodedJWT, {
                //     httpOnly: true,
                //     maxAge: 60 * 60 * 1000,
                // })
                res.status(200).send({ ok: true, user: user_ });
            }
            else {
                console.log("not found2")
                res.send({ ok: false })
            }
        }
    } catch (error) {
        console.log("not found3")
        res.send({ ok: false, error: error.message });
    }
}).post('/get-user', async (req, res) => {
    try {
        const { name } = req.body;
           console.log("kekoooooo");
        const user_ = await Users.findOne({ name : name });
         console.log(user_+"keko");
        if(user_){
            res.status(200).send({ok : true, user : user_})
        }else {
            res.send({ ok: false })
        }
    } catch (error) {
        res.status(400).send({ ok: false, error: error.message });
    }
})



module.exports = router;