const express = require('express');
const router = express.Router();
const Users = require('../Model/users');


//GET ALL USERS
router.get('/', async(req,res)=>{
    console.log('getAllUsers');
    try {
        const _users = await Users.find({});
        res.send({ ok: true, users: _users });
    } catch (error: any) {
        res.send({ ok: false, error: error.message });
    }
});


router.post('/',(req,res)=>{
    const { id,
        fullName,
        address,
        city,
        Email,
        phone,
        password,
        groups,
        orders

    } = req.body;

    try{
        const user = new User({
            id:id,fullName:fullName,address:address,city:city,Email:Email,phone:phone,password:password,groups:groups,orders:orders
        });
        user.save()
        res.send(user);
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