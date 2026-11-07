const express = require("express");
const app = express();
app.use(express.json());

const tips = ["Wake up early", "Eat healthy food"];

app.get("/", (req, res) => {
  res.send(tips);
});

app.post("/", (req, res) => {
  res.send(tips.push(req.body.tips));
  res.send(tips);
});

app.listen("3000", () => {
  console.log("Server is listening on port 3000");
});
