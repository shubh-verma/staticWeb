const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Mai Server se aa raha hun!" });
});

// app.get("/", (req, res) => {
//   res.send("Mai Server hun!");
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
