const express = require('express');
const router = express.Router();
const Group = require('../Model/groups');


//GET ALL Groups
router.get('/', async(req,res)=>{
    console.log('groups');
    try {
        const _group = await Group.find({});
        res.send({ ok: true, groups: _groups });
    } catch (error: any) {
        res.send({ ok: false, error: error.message });
    }
});


router.post('/',(req,res)=>{
    const { ID,
        Name,
        adminId,
        Members,
    } = req.body;

    try{
        const group = new Group({
            ID:ID,Name:Name,adminId:adminId,Members:Members
        });
        group.save()
        res.send(order);
        } catch(error){
         res.send({ error });
        }
         console.log(req.body);
      });


    //   //DELETE PRODUCT BY ID
    //   router.delete('/:productId', async(req,res)=>{
    //     try {
    //         const removedProduct= await Product.remove({_id: req.params.productId});
    //         res.json(removedProduct);
           
    //     } catch (error: any) {
    //         res.send({ ok: false, error: error.message });
    //     }
    // });
module.exports = router;