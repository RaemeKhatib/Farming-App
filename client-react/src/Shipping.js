import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import React, { useState, useEffect } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

export default function Shipping(props) {
  const { plant_id } = useParams();
  const navigate = useNavigate();
  const [purchase_order_number, setPurchaseOrderNumber] = useState("");
  const [buyer_name, setBuyerName] = useState("");
  const [ship_date, setShipDate] = useState("");
  const [ship_amount, setShipAmount] = useState("");
  const [value, setValue] = useState();

  const [listOfShips, setListOfShips] = useState([]);

  useEffect(() => {
    console.log('props', props);
    axios.get('/shipping')
      .then((res) => {
        setListOfShips(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDateChange = (newValue) => {
    setValue(newValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post("/shipping", {
      shipping: {
        plant_id,
        purchase_order_number,
        buyer_name,
        ship_date,
        ship_amount
      }
    }).then(response => {
      console.log("John was NOT HERE!!!!");
      props.addItemToState("shippingItems", response.data);
      setListOfShips((prev) => [...prev, response.data]);
      navigate(`/summary/${plant_id}`);
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
                <h2>Shipping</h2>


        <TextField id="outlined-basic" label="Purchase Order Number" variant="outlined" value={purchase_order_number} onChange={(event) => setPurchaseOrderNumber(event.target.value)} />

        <TextField id="outlined-basic" label="Buyer Name" variant="outlined" value={buyer_name} onChange={(event) => setBuyerName(event.target.value)} />

        <TextField id="outlined-basic" label="Ship Date" variant="outlined" value={ship_date} onChange={(event) => setShipDate(event.target.value)} />

        <TextField id="outlined-basic" label="Ship Amount" variant="outlined" value={ship_amount} onChange={(event) => setShipAmount(event.target.value)} />

        <Button style={{ backgroundColor: 'transparent',borderRadius: '20px', border: '2px solid purple', color: 'purple', textAlign: 'right' }} variant="submit" onClick={handleSubmit}>Submit</Button>

      </Box>
      {/* <img src="https://media.tenor.com/uLwqbmH1FNsAAAAM/cow-tongue-farm-animals.gif" alt="Organic Farms" /> */}



      <div className="login" >

      </div>
    </>
  );
}
