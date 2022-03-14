const express = require('express');
const router = express.Router();
import accidentSchema from '../model/accidentModel';

router.get('/get-accidents', async (req, res)=>{
    try{
    const { location  } = req.body;
    
    if (!location) throw new Error("No location in body");
    }catch(error){
        console.log("error!!!")
    }
})

module.exports = router;