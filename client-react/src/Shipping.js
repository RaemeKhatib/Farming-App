import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import React, { useState } from "react";
import axios from 'axios';

export default function Shipping() {
  const [dateShipping, setDateShipping] = useState("");
  const [productUnitShipped, setProductUnitShipped] = useState("");
  const [lotIdentifier, setLotIdentifier] = useState("");
  const [purchaseOrderNumber, setPurchaseOrderNumber] = useState("");
  const [buyerName, setBuyerName] = useState("");
  const [value, setValue] = useState();

  const handleDateChange = (newValue) => {
    setValue(newValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post("/shipping", {
      shipping: {
        dateShipping, productUnitShipped, lotIdentifier, purchaseOrderNumber, buyerName
      }
    });
    //   .then(users => {
    //     console.log("Form submitted with value: ", users);
    //   })


    console.log("Form submitted with values:", {
      dateShipping, productUnitShipped, lotIdentifier, purchaseOrderNumber, buyerName
    });
  };




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
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <DesktopDatePicker
            label="Date desktop"
            inputFormat="MM/DD/YYYY"
            value={value}
            onChange={handleDateChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <TextField id="outlined-basic" label="Product Unit Shipped" variant="outlined" value={productUnitShipped} onChange={(event) => setProductUnitShipped(event.target.value)} />
        <TextField id="outlined-basic" label="Lot Idenitfier" variant="outlined" value={lotIdentifier} onChange={(event) => setLotIdentifier(event.target.value)} />
        <TextField id="outlined-basic" label="Purchase Order Number" variant="outlined" value={purchaseOrderNumber} onChange={(event) => setPurchaseOrderNumber(event.target.value)} />
        <TextField id="outlined-basic" label="Buyer Name" variant="outlined" value={buyerName} onChange={(event) => setBuyerName(event.target.value)} />
        <Button style={{ backgroundColor: 'pink' }} variant="submit" onClick={handleSubmit}>Submit</Button>
      </Box>
      <img src="https://media.tenor.com/lWvN7t9VWxwAAAAC/tongue-out.gif" alt="Organic Farms" />



    </>
  );
}
