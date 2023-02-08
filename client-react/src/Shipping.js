import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import React, { useState } from "react";
import axios from 'axios';

export default function Shipping() {
  const [purchase_order_number, setPurchaseOrderNumber] = useState("");
  const [buyer_name, setBuyerName] = useState("");
  const [ship_date, setShipDate] = useState("");
  const [ship_amount, setShipAmount] = useState("");
  const [value, setValue] = useState();

  const handleDateChange = (newValue) => {
    setValue(newValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post("/shipping", {
      shipping: {
        purchase_order_number,
        buyer_name,
        ship_date,
        ship_amount
      }
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
        <TextField id="outlined-basic" label="Purchase Order Number" variant="outlined" value={purchase_order_number} onChange={(event) => setPurchaseOrderNumber(event.target.value)} /> 

        <TextField id="outlined-basic" label="Buyer Name" variant="outlined" value={buyer_name} onChange={(event) => setBuyerName(event.target.value)} />

        <TextField id="outlined-basic" label="Ship Date" variant="outlined" value={ship_date} onChange={(event) => setShipDate(event.target.value)} />

        <TextField id="outlined-basic" label="Ship Amount" variant="outlined" value={ship_amount} onChange={(event) => setShipAmount(event.target.value)} />

        <Button style={{ backgroundColor: 'pink' }} variant="submit" onClick={handleSubmit}>Submit</Button>

      </Box>
      <img src="https://thumbs.gfycat.com/CheapThunderousIndianglassfish.webp" alt="Organic Farms" />

    </>
  );
}
