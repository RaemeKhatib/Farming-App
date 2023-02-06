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
    console.log("Form submitted with values:", {
      dateShipping, productUnitShipped, lotIdentifier, purchaseOrderNumber, buyerName
    });
  };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  
  //   const query = `
  //     INSERT INTO harvest (
  //       date_shipping,
  //       product_unit_shipped,
  //       lot_identifier,
  //       purchase_order_number,
  //       buyer_name
  //     ) VALUES ($1, $2, $3, $4, $5)
  //   `;
  
  //   const values = [
  //     dateShipping,
  //     productUnitShipped,
  //     lotIdentifier,
  //     purchaseOrderNumber,
  //     buyerName
  //   ];
  
  //   try {
  //     const response = await axios.post('/api/query', {
  //       query,
  //       values
  //     });
  
  //     console.log('Data inserted successfully');
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  

  return (
    <>
      <Box
        component="form"
        onSubmit={handleSubmit}
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
      <img src="https://media.tenor.com/Y4HFduCpxiwAAAAd/goat-goat-lick.gif" alt="Organic Farms"/>



    </>
  );
}
