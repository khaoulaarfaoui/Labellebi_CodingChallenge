const express = require("express");
const fs = require("fs");
const app = express();
//this line is required to parse the request body
app.use(express.json());
app.get("/", (req, res) => {
  const output = { value: "hello world!" };
  res.send(output);
});

/* Read - GET method */
app.get("/livraison/list", (req, res) => {
  let rawdata = fs.readFileSync("livraison.json");
  let livraison = JSON.parse(rawdata);
  res.send(livraison);
});
//configure the server port
app.listen(3000, () => {
  console.log("Server runs on port 3000");
});
