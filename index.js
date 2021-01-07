const { urlencoded } = require("express");
const express = require("express");
const app = express();

app.use(express.json());
app.use(urlencoded({ extended: false }));
app.use(express.static('client/build'))

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/data", (req, res) => {
  const user = { name: "sandeep", age: 24 };
  res.json(user);
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Listening at port 3000");
});
