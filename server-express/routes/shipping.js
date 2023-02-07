const express = require("express");
const router = express.Router()
const shippingQueries = require('../db/queries/shipping');
const shippingRoutes = require('../routes/shipping')
const app = express();


router.get("/", (req, res) => {
    shippingQueries.getShipping()
  
      .then(data => {
        console.log("data", data);
        res.json(data);
      });
  
  });
  
  router.get("/:id", (req, res) => {
    shippingQueries.getShippingbyId(req.params.id)
  
      .then(data => {
        console.log("data", data);
        res.json(data);
      });
  });

// router.get('/:id', (req, res) => {
//   shippingQueries.getShippingbyId(req.params.id)
//     .then((shipping) => {
//       res.json(shipping);
//     });
// });



// app.get("/shipping", (req, res) => {
  
//   shippingQueries.getShipping()

//     .then(data => {
//       console.log("data", data);
//       res.json(data);
//     });

// });


router.post('/', (req, res) => {
  console.log('yoooo', req.body)
  shippingQueries.createShipping(req.body.shipping)
    .then((shipping) => {
      console.log(shipping);
      res.send("Your Shipping Information has been added.");
    });
});


module.exports = router