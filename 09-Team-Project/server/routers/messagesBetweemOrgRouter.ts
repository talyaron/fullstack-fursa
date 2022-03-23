import Organizations from "../model/orgModel";
import Users from "../model/userModel";
import Sharing from "../model/sharingModel";

export { }
import express from 'express';

const router = express.Router();
var CryptoJS = require("crypto-js");
async function getOrganizations(): Promise<any> {
    try {
      const organizations = await Organizations.find({});
      return organizations;
    } catch (err: any) {
      console.error(err)
      return false;
    }
  }
  
  router.get('/get-organizations', async (req, res) => {
    const organizations = await getOrganizations();
    res.send(organizations);
  })


  async function getUsers(orgName:string): Promise<any> {
    try {
      const users = await Users.find({type:'org','org.orgName':orgName});
      return users;
    } catch (err: any) {
      console.error(err)
      return false;
    }
  }
  
  router.post('/get-Users-byOrgName', async (req, res) => {
    const { orgName } = req.body;
    const users = await getUsers(orgName);
    res.send(users);
  })


  router.post('/add-sharing', (req, res) => {
    try {
      //console.log("server")
      const {newSharing} = req.body;
      //console.log(newSharing);
      if (!newSharing) throw new Error("No sharing in request");
      var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(newSharing.content), 'my-secret-key@123').toString();
      const event  = new Sharing({
        from: newSharing.from,
        content:ciphertext,
        to:newSharing.to,
        chatId: "123",
        date:newSharing.date,
        accident:newSharing.accident,
    });
      event.save();
      res.send(event);
    } catch (error) {
      res.send({ error });
    }
  });



  module.exports = router;