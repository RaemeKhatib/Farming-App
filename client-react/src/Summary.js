import { useParams, useNavigate  } from "react-router-dom";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box } from '@mui/material';
import { useState, useEffect } from "react";
import axios from "axios";
import Button from '@mui/material/Button';


export default function Summary() {
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
      navigate(`/`);
    });
  };


  return (

    <Box mt={2} >
      <h1>Summary</h1>

      <h3>Plant</h3>

      <Button style={{ backgroundColor: 'pink' }} variant="submit" onClick={handleDelete}>Delete</Button>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Field ID</TableCell>
              <TableCell>{plantData.field_id}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Crop Type</TableCell>
              <TableCell>{plantData.crop_type}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Date Fertilized</TableCell>
              <TableCell>{plantData.date_fertilized}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Fertilizer/Persticides Applied</TableCell>
              <TableCell>{plantData.fertilizer_pesticides_applied}</TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>

      <h3>Harvest</h3>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>{harvestData.id}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Farm Worker</TableCell>
              <TableCell>{harvestData.farm_worker}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Date of Harvest</TableCell>
              <TableCell>{harvestData.date_harvest}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Tote Id</TableCell>
              <TableCell>{harvestData.tote_id}</TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>

      <h3>Packing</h3>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Packing Date</TableCell>
              <TableCell>{packData.date_pack}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Packaging Unit</TableCell>
              <TableCell>{packData.product_unit}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Packing Unit Quantity</TableCell>
              <TableCell>{packData.product_unit_amount}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Farm Worker</TableCell>
              <TableCell>{packData.farm_worker}</TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>


      <h3>Shipping</h3>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Purchase Order Number</TableCell>
              <TableCell>{shipData.purchase_order_number}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Product Unit</TableCell>
              <TableCell>{shipData.buyer_name}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Ship Date</TableCell>
              <TableCell>{shipData.ship_date}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Ship Amount</TableCell>
              <TableCell>{shipData.ship_amount}</TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>

    </Box>

  );
}