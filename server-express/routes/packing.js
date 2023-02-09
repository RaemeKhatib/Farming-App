const express = require("express");
const router = express.Router()
const packingQueries = require('../db/queries/packing');
const packingRoutes = require('../routes/packing')
const app = express();


router.get("/", (req, res) => {
   packingQueries.getPacking()
      .then(data => {
        console.log("data", data);
        res.json(data);
      });
  
  });
  
  router.get("/:id", (req, res) => {
    packingQueries.getPackingbyId(req.params.id)
  
      .then(data => {
        console.log("data", data);
        res.json(data);
      });
  });


  router.post('/', (req, res) => {
    console.log('yoooo', req.body)
    packingQueries.createPacking(req.body.packing)
      .then((packing) => {
        console.log(packing);
        res.send(packing);
      }).catch((err) => {
        res.status(500)
       res.send({ error: err.message });
      });
  });
  
  module.exports = router