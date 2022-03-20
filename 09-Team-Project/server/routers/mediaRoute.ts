import mediaSchema from "../model/mediaSchema";
const express = require('express');
const router = express.Router();

router.post('/add-media',async (req,res)=>{
    const {src,type}=req.body;
    try{
        const media=new mediaSchema({
            type:type,src:src
        })
        media.save().then("media saved!");
        res.send({ ok: true, media: media });
    }catch (error: any) {
    res.send({ ok: false, error: error.message });
}})
module.exports = router;