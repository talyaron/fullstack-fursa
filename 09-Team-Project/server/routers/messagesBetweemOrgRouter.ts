import Organizations from "../model/orgModel";
import Users from "../model/userModel";
import Sharing from "../model/sharingModel";

export { }
import express from 'express';

const router = express.Router();

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
  
  router.get('/get-Users-byOrgName', async (req, res) => {
    const { orgName } = req.body;
    const users = await getUsers(orgName);
    res.send(users);
  })


  router.post('/add-sharing', (req, res) => {
    try {
      const newsharing = req.body.newsharing;
      console.log(req.body);
      if (!newsharing) throw new Error("No sharing in request");
      const event  = new Sharing({
        from: newsharing.from,
        content:newsharing.content,
        to:newsharing.to,
        chatId: "123",
        date:newsharing.date,
        accident:newsharing.accident,
    });
      event.save();
      res.send({ message: 'Done' });
    } catch (error) {
      res.send({ error });
    }
  });



  module.exports = router;