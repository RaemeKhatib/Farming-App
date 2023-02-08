import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React, { useState, useEffect } from "react";
import axios from 'axios';
import Planting from 'Planting';
import { areDayPropsEqual } from '@mui/x-date-pickers/internals';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { MenuItem,Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

export default function Harvesting(props) {
  const [farm_worker, setFarmWorker] = useState("");
  const [date_harvest, setDateHarvest] = useState("");
  const [tote_id, setToteId] = useState("");
  const [plant_id, setPlantId] = useState("");
  //need a button to generate a harvest code here on page

  const [listOfHarvests, setListOfHarvests] = useState([]);

  useEffect(() => {
    console.log('props', props);
    axios.get('/harvesting')
      .then((res) => {
        setListOfHarvests(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("/harvesting", {
      harvesting: {
        plant_id, farm_worker, date_harvest, tote_id
      }

    }).then(response => {
      console.log("Raeme was HERE!!!!");
      props.addItemToState("harvestingItems", response.data);
      setListOfHarvests((prev) => [...prev, response.data]);
    });
  };



  const cropDisplay = props.plantingItems.map(item => {
    return (
      <MenuItem key={item.id}
        value={item.id}>
        {item.field_id} {item.crop_type}
      </ MenuItem>
    );
  });

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

        <FormControl fullWidth>
          <InputLabel id="plant">Crop</InputLabel>
          <Select
            labelId="plant"
            id="plant-select"
            value={plant_id}
            label="Plant"
            onChange={(event) => setPlantId(event.target.value)}
          >
            {cropDisplay}
          </Select>
        </FormControl>

        <TextField id="outlined-basic" label="Farm Worker" variant="outlined" value={farm_worker} onChange={(event) => setFarmWorker(event.target.value)} />

        <TextField id="outlined-basic" label="Date Harvest" variant="outlined" value={date_harvest} onChange={(event) => setDateHarvest(event.target.value)} />

        <TextField id="outlined-basic" label="Tote Identifier" variant="outlined" value={tote_id} onChange={(event) => setToteId(event.target.value)} />


        <Button style={{ backgroundColor: 'pink' }} variant="submit" onClick={handleSubmit}>Submit</Button>

      </Box>

      <Box mt={4}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Field ID</TableCell>
                <TableCell align="right">Farm Worker</TableCell>
                <TableCell align="right">Date of Harvest</TableCell>
                <TableCell align="right">Tote ID</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {listOfHarvests.map((row) => (
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
                  <TableCell align="right">{row.farm_worker}</TableCell>
                  <TableCell align="right">{row.date_harvest}</TableCell>
                  <TableCell align="right">{row.tote_id}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

    </>

  );
}