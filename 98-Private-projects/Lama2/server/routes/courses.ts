const express = require('express');
const router = express.Router();
import Courses from '../model/schema/coursesModel';


// router.get('/get-all-courses',async (req:any, res:any)=>{
//     const courses = await getCourses();
//     res.send({courses:courses});
//   })
  
  
// router.post("/add-new-course", async (req, res) => {
//     try {
//       const { name, cost, participants,lessons,hours } = req.body;
//       if (!name || !cost || !participants || !lessons || !hours) throw new Error("No data");
//       console.log(name);
//       const newCourse = new Course({
//         name: name,
//         cost: cost,
//         participants: participants,
//         lessons:lessons,
//         hours:hours,
//       });
//       await newCourse.save().then((res) => {
//         console.log(res);
//       });
//       res.send({ val: "OK" });
//     } catch (err) {
//       res.send({ error: err.message });
//     }
//   });

  
module.exports = router;