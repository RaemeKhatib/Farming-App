import { useParams } from "react-router-dom";
import { MenuItem,Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box } from '@mui/material';
import { useState, useEffect } from "react";
import axios from "axios";


export default function Summary() {
  const [harvest,setHarvest] = useState("")
  const { plant_id } = useParams();
  console.log(plant_id);

  useEffect(() => {

    axios.get('/summary')
      .then((res) => {
        setHarvest(res.data);
        console.log("!!!!!!!!!! RES.DAATA", res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (

    <Box mt={4} >
      <h3>HARVEST</h3>
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
          
              <TableRow
                key={harvest.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {harvest.id}
                </TableCell>
                <TableCell component="th" scope="row">
                  {harvest.field_id}
                </TableCell>
                <TableCell align="right">{harvest.farm_worker}</TableCell>
                <TableCell align="right">{harvest.date_harvest}</TableCell>
                <TableCell align="right">{harvest.tote_id}</TableCell>
              </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>


  );




}