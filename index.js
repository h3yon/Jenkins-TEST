const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || "localhost";

app.get("/", (req, res) => {
  res.send("hello world, 13v");
});

app.listen(PORT, HOST, () => {
  console.log(`Server Listening on ${HOST}:${PORT}`);
  // instance 16 version, jenkins 14 version test
});

module.exports = app;
