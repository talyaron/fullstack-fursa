const express = require('express');
const router = express.Router();
import { isAdmin, loginStatus } from '../controllers/signInController';
import Courses from '../model/schema/coursesModel';

async function getCourses():Promise<any> {
    try{
     
    const courses = await Courses.find({});
    console.log(courses);
    return courses;
    } catch(err:any){
      console.error(err)
      return false;
    }
  }

router.get('/get-all-courses',async (req:any, res:any)=>{
    const courses = await getCourses();
    res.send({courses:courses});
  })
  
  router.use(loginStatus)
  router.post("/add-new-course",isAdmin, async (req, res) => {
    try {
      const { name, cost, participants,lessons,hours } = req.body;
      if (!name || !cost || !participants || !lessons || !hours) throw new Error("No data");
    
      const newCourse = new Courses({
        name: name,
        cost: cost,
        participants: participants,
        lessons:lessons,
        hours:hours,
      });
      await newCourse.save().then((res) => {
        console.log(res);
      });
      res.send({ val: "OK" });
    } catch (err) {
      res.send({ error: err.message });
    }
  });

  
module.exports = router;