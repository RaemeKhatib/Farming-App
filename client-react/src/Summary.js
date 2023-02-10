import { useParams, useNavigate } from "react-router-dom";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box } from '@mui/material';
import { useState, useEffect } from "react";
import axios from "axios";
import Button from '@mui/material/Button';


export default function Summary(props) {
  const [plantData, setPlantData] = useState([]);
  const [harvestData, setHarvestData] = useState([]);
  const [packData, setPackData] = useState([]);
  const [shipData, setShipData] = useState([]);

  const { plant_id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    Promise.all([
      axios.get(`/summary/planting/${plant_id}`),
      axios.get(`/summary/harvesting/${plant_id}`),
      axios.get(`/summary/packing/${plant_id}`),
      axios.get(`/summary/shipping/${plant_id}`),

    ]).then((res) => {
      console.log("Multiple Promises ", res);
      setPlantData(res[0].data);
      setHarvestData(res[1].data);
      setPackData(res[2].data);
      setShipData(res[3].data);
    });

  }, [plant_id]);

  const handleDelete = (event) => {
    event.preventDefault();
    axios.delete("/summary", {
      data: { summary: plant_id }
    }).then(response => {
      console.log("RESPONSE!!!!", response.data);
      Promise.all([
        axios.get('/planting'),
        axios.get('/harvesting'),
        axios.get('/packing'),
        axios.get('/shipping')
      ]).then((res) => {
        console.log('WHOLE RESPONSE OBJ', res);
        props.setState(prev => ({
          ...prev,
          plantingItems: res[0].data,
          harvestingItems: res[1].data,
          packingItems: res[2].data,
          shippingItems: res[3].data,
          
        })) 
        navigate(`/`);

      }).catch((err) => {
        console.log(err.message);
      });
    });
  };


  return (

    <Box mt={2} >
      <h1>Summary</h1>

      <h3>Plant</h3>

      <Button style={{ backgroundColor: 'pink' }} variant="submit" onClick={handleDelete}>Delete</Button>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 100, maxWidth: 1350, textAlign: "right" }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Field ID</TableCell>
              <TableCell align="right">{plantData.field_id}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Crop Type</TableCell>
              <TableCell align="right">{plantData.crop_type}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Date Fertilized</TableCell>
              <TableCell align="right">{plantData.date_fertilized}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Fertilizer/Persticides Applied</TableCell>
              <TableCell align="right">{plantData.fertilizer_pesticides_applied}</TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>

      <h3>Harvest</h3>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 100, maxWidth: 1350, textAlign: "right" }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">{harvestData.id}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Farm Worker</TableCell>
              <TableCell align="right">{harvestData.farm_worker}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Date of Harvest</TableCell>
              <TableCell align="right">{harvestData.date_harvest}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Tote Id</TableCell>
              <TableCell align="right">{harvestData.tote_id}</TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>

      <h3>Packing</h3>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 100, maxWidth: 1350, textAlign: "right" }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Purchase Order Number</TableCell>
              <TableCell align="right">{shipData.purchase_order_number}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Product Unit</TableCell>
              <TableCell align="right">{shipData.buyer_name}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Ship Date</TableCell>
              <TableCell align="right">{shipData.ship_date}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Ship Amount</TableCell>
              <TableCell align="right">{shipData.ship_amount}</TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
      <div className="login" >

      </div>
    </Box>

  );
}