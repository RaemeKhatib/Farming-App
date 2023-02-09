const express = require("express");
const router = express.Router();
// const fieldQueries = require('../db/queries/field');

const summaryQueries = require('../db/queries/summary');
// const harvestingRoutes = require('./harvesting');
// const app = express();



router.get("/planting/:id", (req, res) => {
  let id = req.params.id;
  console.log("WE are hitting summary route for PLANTING",id);
  summaryQueries.getPlanting(id)
  .then((data) => {
      console.log("Summary PLANTING Route", data);
      res.json(data);
    });

});

router.get("/harvesting/:id", (req, res) => {
  let id = req.params.id;
  console.log("WE are hitting summary route ",id);
  summaryQueries.getHarvest(id)
  .then((data) => {
      console.log("Summary Route", data);
      res.json(data);
    });

});

router.get("/packing/:id", (req, res) => {
  let id = req.params.id;
  console.log("WE are hitting summary route for packing",id);
  summaryQueries.getPacking(id)
  .then((data) => {
      console.log("Summary Packing Route", data);
      res.json(data);
    });

});


router.get("/shipping/:id", (req, res) => {
  let id = req.params.id;
  console.log("WE are hitting summary route for SHIPPING",id);
  summaryQueries.getShipping(id)
  .then((data) => {
      console.log("Summary SHIPPING Route", data);
      res.json(data);
    });

});





module.exports = router;