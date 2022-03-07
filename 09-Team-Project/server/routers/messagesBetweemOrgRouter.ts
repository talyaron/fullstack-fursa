import Organizations from "../model/orgModel";
import Users from "../model/userModel";

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
  
  router.get('/get-appointments', async (req, res) => {
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

  module.exports = router;