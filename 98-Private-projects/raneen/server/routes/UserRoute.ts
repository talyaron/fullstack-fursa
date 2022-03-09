const express = require('express');
const router = express.Router();
import Users from '../model/schema/UserSchema';

router.post("/add-user", async (req, res)=>{
    try {
        const {name, password,city } = req.body;
        
        
        if (!name) throw new Error("No name in body");
        if (!password) throw new Error("No password in body");
        if (!city) throw new Error("No city in body");
        res.cookie("mySecretPassword", {id:name});
        

    
        const ownerDB = new Users({
          name,
          password,
          city,
        });
    
        const query = { name:name},
      
          options = { upsert: true, new: true, setDefaultsOnInsert: true };
      
        const oldItem = await Users.findOneAndUpdate(query,ownerDB,options);
        console.log(oldItem);
        res.send(oldItem);
      } catch (error) {
        console.info('ON app.post("/add-user"')
        console.log(req.body);
        console.error(error.message);
        res.send({ error: error.message });
      }
}).get("/privateInfo", (req, res) => {
    //get cookie
    const { mySecretPassword } = req.cookies;
    const { id } = mySecretPassword;
    //get user from database
    // if exists, responce with user's data

    res.send({ ok: true });
    console.log("private");
  });



module.exports = router;