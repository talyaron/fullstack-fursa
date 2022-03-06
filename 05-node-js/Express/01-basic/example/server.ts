import express from "express";
const app = express();
const port = 3000;

let users = [{ name: "Mohamad", id: 123 }]

app.use(express.static("public"));
app.use(express.json());

app.get("/get-user", (req, res) => {
  console.log("user-request");
  res.status(202).send(users);
});

app.post("/add-user", (req, res) => {
  const { body } = req;
  console.log(body);
  users = [...users, body];
  res.send({message:"user created",users});
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});


