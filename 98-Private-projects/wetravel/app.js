const express = require("express");
const app = express();

app.use(express.static("public"));
app.get("/", (req, res) => {
  res.send("Hello World How are you!");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
