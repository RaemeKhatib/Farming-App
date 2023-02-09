require('dotenv').config();

const express = require("express");
const path = require('path');
const { getUsers } = require('../db/queries/test');
const shippingRoutes = require('../routes/shipping');
const bodyparser = require("body-parser");
const plantingRoutes = require('../routes/planting');
const harvestingRoutes = require('../routes/harvesting');
const packingRoutes = require('../routes/packing');
const summaryRoutes = require ('../routes/summary')


const app = express();
const PORT = process.env.PORT || 8080;

// serve static files from ../build (needed for React)
const cwd = process.cwd();
app.use(bodyparser.json());

// app.use(express.static(cwd + "/public"));


// Do Not make a route for "/" or it will override public

app.use("/planting", plantingRoutes);
app.use("/harvesting", harvestingRoutes);
app.use("/packing", packingRoutes);
app.use("/shipping", shippingRoutes);
app.use("/summary", summaryRoutes)



app.get("/api/status", (req, res) => {
  res.json({ version: "1.01" });
});

// app.use(function(req, res) {
//   res.status(404);
// });

app.get("/test", (req, res) => {
  console.log("I NEVER KNOW WHAT IM DOING DAVID");
  getUsers()

    .then(data => {
      console.log("data", data);
      res.json(data);
    });

});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}!`);
});
