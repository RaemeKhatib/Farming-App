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
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <DesktopDatePicker
            label="Ship Date"
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
      <img src="https://media.tenor.com/uLwqbmH1FNsAAAAM/cow-tongue-farm-animals.gif" alt="Organic Farms" />


      <Box mt={4}>
        <TableContainer component={Paper}>
          <Button variant='contained' color='info'>
            History of Orders
          </Button>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Field ID</TableCell>
                <TableCell align="right">Purchase Order Number</TableCell>
                <TableCell align="right">Buyer Name</TableCell>
                <TableCell align="right">Date Shipped</TableCell>
                <TableCell align="right">Amount Shipped</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {listOfShips.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.field_id}
                  </TableCell>
                  <TableCell align="right">{row.purchase_order_number}</TableCell>
                  <TableCell align="right">{row.buyer_name}</TableCell>
                  <TableCell align="right">{row.ship_date}</TableCell>
                  <TableCell align="right">{row.ship_amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

    </>
  );
}
