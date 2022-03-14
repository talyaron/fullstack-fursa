import USERS from "../schemes/users";
const express = require('express');
const router = express.Router();


router.post("/add-user", async (req, res)=>{
    try {
        const {name,password,email, Phonenumber,Birthday,
        site,subject}  = req.body;
    
        
        if (!name || !password || !email || !Phonenumber || !Birthday ||
            !site || !subject  ) throw new Error("MISSING PARAMS");
        
    
        const USERDB = new USERS({
            name,password,email, Phonenumber,Birthday,
            site,subject
        });
    
        console.log(name,password,email, Phonenumber,Birthday,
            site,subject)
        USERDB.save(function (err, USERS) {
            if (err) return console.error(err);
            console.log(USERDB.name + " saved to users collection.");
          });
                
      } catch (error) {
        console.info('ON app.post("/add-user"')
        console.log(req.body);
        console.error(error.message);
        res.send({ error: error.message });
      }
})
module.exports = router;