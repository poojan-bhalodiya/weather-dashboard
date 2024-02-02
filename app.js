const express = require("express");
const weatherController = require("./controllers/weatherController");
const app = express();
const port = process.env.PORT || 8000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/weather", weatherController);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
