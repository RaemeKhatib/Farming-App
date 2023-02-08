import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';


export default function Planting(props) {
  
  const [field_id, setFieldId] = useState("");
  const [crop_type, setCropType] = useState("");
  const [date_fertilized, setDateFertilized] = useState("");
  const [fertilizer_pesticides_applied, setFertilizerPesticideApplied] = useState("");

  const [listOfPlants, setListOfPlants] = useState([]);

  useEffect(() => {
    console.log('props', props);
    axios.get('/planting')
      .then((res) => {
        setListOfPlants(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("/planting", {
      planting: {
        field_id, crop_type, date_fertilized, fertilizer_pesticides_applied
      }
    }).then(response => {
      console.log("Krista was HERE!!!!");
      props.addItemToState("plantingItems", response.data);
      setListOfPlants((prev) => [...prev, response.data] );
  
    });
  }


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
        <TextField id="outlined-basic" label="Field Identifier" variant="outlined" value={field_id} onChange={(event) => setFieldId(event.target.value)} />

        <TextField id="outlined-basic" label="Crop Type" variant="outlined" value={crop_type} onChange={(event) => setCropType(event.target.value)} />

        <TextField id="outlined-basic" label="Date Fertilized" variant="outlined" value={date_fertilized} onChange={(event) => setDateFertilized(event.target.value)} />

        <TextField id="outlined-basic" label="Fertilizer Pesticides Applied" variant="outlined" value={fertilizer_pesticides_applied} onChange={(event) => setFertilizerPesticideApplied(event.target.value)} />

        <Button style={{ backgroundColor: 'pink' }} variant="submit" onClick={handleSubmit}>Submit</Button>

      </Box>


      <Box mt={4}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Field ID</TableCell>
                <TableCell align="right">Crop Type</TableCell>
                <TableCell align="right">Date Fertilized</TableCell>
                <TableCell align="right">Type of Fertilizer</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {listOfPlants.map((row) => (
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
                  <TableCell align="right">{row.crop_type}</TableCell>
                  <TableCell align="right">{row.date_fertilized}</TableCell>
                  <TableCell align="right">{row.fertilizer_pesticides_applied}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    
    </>

  );
};