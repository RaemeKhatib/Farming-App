import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React, { useState, useEffect } from "react";
import { MenuItem, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { useParams, useNavigate} from "react-router-dom";
import axios from 'axios';

export default function packing(props) {
  const { plant_id } = useParams();
  const navigate = useNavigate();
  const [date_pack, setDatePack] = useState("");
  const [product_unit, setProductUnit] = useState("");
  const [product_unit_amount, setProductUnitAmount] = useState("");
  const [farm_worker, setFarmWorker] = useState("");


  const [listOfPacks, setListOfPacks] = useState([]);
  useEffect(() => {
    console.log('props', props);
    axios.get('/packing')
      .then((res) => {
        setListOfPacks(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("/packing", {
      packing: {
        plant_id, date_pack, product_unit, product_unit_amount, farm_worker
      }
    }).then(response => {
      console.log("Jordan was HERE!!!!");
      props.addItemToState("packingItems", response.data);
      setListOfPacks((prev) => [...prev, response.data]);
      navigate(`/summary/${plant_id}`);
    });
  };

  // const cropDisplay = props.plantingItems.map(item => {
  //   return (
  //     <MenuItem key={item.id}
  //       value={item.id}>
  //       {item.field_id} {item.crop_type}
  //     </ MenuItem>
  //   );
  // });

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
        <h2>Packing</h2>

        {/* <FormControl fullWidth>
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
        </FormControl> */}

        <TextField id="outlined-basic" label="Packing Date" variant="outlined" value={date_pack} onChange={(event) => setDatePack(event.target.value)} />

        <TextField id="outlined-basic" label="Product Unit" variant="outlined" value={product_unit} onChange={(event) => setProductUnit(event.target.value)} />

        <TextField id="outlined-basic" label="Product Unit Amount" variant="outlined" value={product_unit_amount} onChange={(event) => setProductUnitAmount(event.target.value)} />

        <TextField id="outlined-basic" label="Farm Worker" variant="outlined" value={farm_worker} onChange={(event) => setFarmWorker(event.target.value)} />

        <Button style={{ 
  backgroundColor: 'transparent', 
  border: '2px solid green', 
  color: 'green', 
  fontFamily: '"Permanent Marker", cursive', 
  borderRadius: '20px', 
}} variant="submit" onClick={handleSubmit}>
  Submit
</Button>

      </Box>

      <div className="login" >

      </div>


      {/* <Box mt={4}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Field ID</TableCell>
                <TableCell align="right">Packing Date</TableCell>
                <TableCell align="right">Product Unit</TableCell>
                <TableCell align="right">Product Unit Amount</TableCell>
                <TableCell align="right">Farm Worker</TableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              {listOfPacks.map((row) => (

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
                  <TableCell align="right">{row.date_pack}</TableCell>
                  <TableCell align="right">{row.product_unit}</TableCell>
                  <TableCell align="right">{row.product_unit_amount}</TableCell>
                  <TableCell align="right">{row.farm_worker}</TableCell>

                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box> */}
    </>

  );
}