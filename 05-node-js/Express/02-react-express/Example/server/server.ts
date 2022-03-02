const express = require("express");
const app = express();
const port = 4000; // default port to listen

// define a route handler for the default home page
app.use(express.static("../client/build"));
app.use(express.json());

const uid = function(){
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

interface User{
    name:string;
    id:string;
}
const users = [{ name: "Lama", id: '12345' }];

app.get("/get-users", (req, res) => {
  try {
    res.status(200).send({ users });
  } catch (error) {
    console.info(error);
    res.send({ error });
  }
});

app.post("/add-user", (req, res) => {
  try {
    const { user } = req.body;
    if (!user) throw new Error("No user in request");

    const userObj = {
        name:user,
        id:uid()
    }
    users.push(userObj);
    console.log(users)
    res.send({ ok: true });
  } catch (error) {
    res.send({ error: error.message });
  }
});



// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});



