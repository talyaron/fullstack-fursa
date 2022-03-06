const express = require('express');
const router = express.Router();
import Owners from '../model/schema/ownerModel';

router.post("/add-owner", async (req, res)=>{
    try {
        const { id, name } = req.body;
    
        
        if (!id) throw new Error("No id in body");
        if (!name) throw new Error("No name in body");
    
        const ownerDB = new Owners({
          name,
          id,
        });
    
        const query = { id: id },
      
          options = { upsert: true, new: true, setDefaultsOnInsert: true };
      
        const oldItem = await Owners.findOneAndUpdate(query,ownerDB,options);
        console.log(oldItem);
        res.send(oldItem);
      } catch (error) {
        console.info('ON app.post("/add-owner"')
        console.log(req.body);
        console.error(error.message);
        res.send({ error: error.message });
      }
})
router.get('/get-users', async (req, res)=>{
    
})

module.exports = router;