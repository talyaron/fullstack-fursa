//declare function require(name:string);

const express = require("express");
const app = express();
const port = 3001;

//routes for data

//static files

//app.use(express.static("client/build"));

//data

app.get("/get-all-users", (req: any, res: any) => {
  const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Mary" },
  ];

  res.send(users);
});

app.get("/", (req: any, res: any) => {
  //console.log(req);
  res.send("Hello World! How are guys?");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
