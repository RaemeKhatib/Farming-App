const express = require("express");
const router = express.Router();
// const fieldQueries = require('../db/queries/field');

const summaryQueries = require('../db/queries/summary');
// const harvestingRoutes = require('./harvesting');
// const app = express();


router.get("/:id", (req, res) => {
  let id = req.params.id;
  console.log("WE are hitting summary route ",id);
  summaryQueries.getHarvest(id)
  .then((data) => {
      console.log("Summary Route", data);
      res.json(data);
    });

});


// router.get("/:id", (req, res) => {
  
//   res.json(data);

// });


module.exports = router;