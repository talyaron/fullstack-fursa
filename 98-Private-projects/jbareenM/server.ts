const express = require("express");
const app = express();
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const userRouter = require("./Routes/userRoutes");

app.use(express.static("ibring/build"));
app.use(express.json());

mongoose.connect("mongodb+srv://jbareenM:IBring-Web-App@cluster0.sqzq0.mongodb.net/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("connected to DB!");
});

app.use("/user", userRouter);

app.get("/", (req, res) => {
    res.send("hello world!");
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server running on port ${port} 🔥`));