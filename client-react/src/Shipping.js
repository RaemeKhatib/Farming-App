import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React, { useState } from "react";
import axios from 'axios';

export default function Shipping() {
  const [dateShipping, setDateShipping] = useState("");
  const [productUnitShipped, setProductUnitShipped] = useState("");
  const [lotIdentifier, setLotIdentifier] = useState("");
  const [purchaseOrderNumber, setPurchaseOrderNumber] = useState("");
  const [buyerName, setBuyerName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted with value: ", fieldIdentifier); //need to change later due to not being a value in shipping.js
  };

  // const handleUsers= (event) => {
  //   event.preventDefault();
  //   axios.get("/test")
  //   .then(users => {
  //     console.log("Form submitted with value: ", users);
  //   })
    
  // };

  return (
        
    <>
      <Box
        component="form" onSubmit={handleSubmit}
        sx={{
          '& > :not(style)': { m: 1, width: '20ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Date Shipping" variant="outlined" value={dateShipping} onChange={(event) => setDateShipping(event.target.value)} />

        <TextField id="outlined-basic" label="Product Unit Shipped" variant="outlined" value={productUnitShipped} onChange={(event) => setProductUnitShipped(event.target.value)} />

        <TextField id="outlined-basic" label="Lot Idenitfier" variant="outlined" value={lotIdentifier} onChange={(event) => setLotIdentifier(event.target.value)} />

        <TextField id="outlined-basic" label="Purchase Order Number" variant="outlined" value={purchaseOrderNumber} onChange={(event) => setPurchaseOrderNumber(event.target.value)} />

        <TextField id="outlined-basic" label="Buyer Name" variant="outlined" value={buyerName} onChange={(event) => setBuyerName(event.target.value)} />




        <Button style={{ backgroundColor: 'pink' }} variant="submit" onClick={handleSubmit}>Submit</Button>
        
      </Box>

      {/* <Button style={{ backgroundColor: 'blue' }} variant="submit" onClick={handleUsers}>Users</Button>
   */}
    </>
        
  );
}