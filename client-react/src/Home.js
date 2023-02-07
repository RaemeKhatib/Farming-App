import { useEffect, Fragment, useState } from "react";
import axios from "axios";


export default function Home() {
  const [shippingItems, setShippingItems] = useState([]);
    const [plantingItems, setPlantingItems] = useState([]);
    const [harvestingItems, setHarvestingItems] = useState([]);
  
  useEffect(() => {
    axios.get('/shipping')
      .then((res) => {
        console.log('shipping', res.data);
        setShippingItems(res.data);
      })
      .catch((err) => {
        setShippingItems({ error: err.message });
      });
    axios.get('/planting')
      .then((res) => {
        console.log('planting', res.data);
        setPlantingItems(res.data);
      })
      .catch((err) => {
        setPlantingItems({ error: err.message });
      });
      axios.get('/harvesting')
      .then((res) => {
        console.log('harvesting', res.data);
        setHarvestingItems(res.data);
      })
      .catch((err) => {
        setHarvestingItems({ error: err.message });
      });

  }, []);

  const shippingDisplay = shippingItems.map(item => {
    return (
      <Fragment key={item.id}>
        <div>Buyer Name= {item.buyer_name}</div>
        <div>Shipping Date= {item.shipping_date}</div>
        <div>Lot Id= {item.lot_id}</div>
        <div>Product Unit Shipped= {item.product_unit_shipped}</div>
        <div>Purchase Order Number= {item.purchase_order_number}</div>
      </ Fragment>
    );
  });

  const harvestingDisplay = harvestingItems.map(item => {
    return (
      <Fragment key={item.id}>
        <div>Farm Worker for Harvest= {item.farmWorkerHarvesting}</div>
        <div>Type of Crop for Harvest= {item.cropType}</div>
        <div>Harvest Field Identifier= {item.fieldIdentifierHarvest}</div>
        <div>Date of Harvest= {item.dateHarvest}</div>
        <div>Tote Id= {item.toteIdentifier}</div>
      </ Fragment>
    );
  });

  const plantingDisplay = plantingItems.map(item => {
    return (
      <Fragment key={item.id}>
        <div>Field Identifier= {item.field_identifier}</div>
        <div>Date Fertilizer= {item.date_fertilizer}</div>
        <div>F or P Applied= {item.fertilizer_pesticides_applied}</div>
        <div>Farm Worker Id= {item.farm_worker_identifier}</div>
        <div>Crop Type= {item.crop_type_planting}</div>
      </ Fragment>
    );
  });

  return (
    <>
      <p>___________________Home___________________</p>



      <p>___________________PLANTING___________________</p>
      {plantingDisplay}

      <p>___________________Harvesting___________________</p>
      {harvestingDisplay}

      <p>___________________SHIPPING___________________</p>
      {shippingDisplay}
    </>
  );
}



