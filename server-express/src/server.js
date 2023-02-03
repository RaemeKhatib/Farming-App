require('dotenv').config();
const express = require("express");
const path = require('path');
const morgan = require('morgan')


const app = express();
const PORT = process.env.PORT || 8080;

// serve static files from ../build (needed for React)
const cwd = process.cwd();
// const public = path.join(cwd, '..', 'public');
console.log("public dir: ", cwd + "/public");
app.use(express.static(cwd + "/public"));
app.use(morgan("dev"))


// Do Not make a route for "/" or it will override public

app.get("/api/status", (req, res) => {
  res.json({version: "1.01"});
});

app.use(function(req, res) {
  res.status(404);
});


app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}!`);
});