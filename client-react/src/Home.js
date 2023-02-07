import { useEffect, Fragment, useState } from "react";
import axios from "axios";


export default function Home({
  plantingItems,
  harvestingItems,
  shippingItems,
  setState
}) {
  // const [shippingItems, setShippingItems] = useState([]);
  // const [plantingItems, setPlantingItems] = useState([]);
  // const [harvestingItems, setHarvestingItems] = useState([]);
  
  useEffect(() => {
    axios.get('/planting')
      .then((res) => {
        console.log('planting', res.data);
        setState(prev => ({...prev, plantingItems: res.data}))
        // setPlantingItems(res.data);
      })
      .catch((err) => {
        console.log(err.message)
        // setPlantingItems({ error: err.message });
      });
      axios.get('/harvesting')
      .then((res) => {
        console.log('harvesting', res.data);
        setState(prev => ({...prev, harvestingItems: res.data}))
        // setHarvestingItems(res.data);
      })
      .catch((err) => {
        console.log(err.message)
        // setHarvestingItems({ error: err.message });
      });
      axios.get('/shipping')
      .then((res) => {
        console.log('shipping', res.data);
        setState(prev => ({...prev, shippingItems: res.data})) // just update shippingItems and leave plantingItems, harvestingItems, the same
        // setShippingItems(res.data);
      })
      .catch((err) => {
        console.log(err.message)
        // setShippingItems({ error: err.message });
      });
  }, []);

  const plantingDisplay = plantingItems.map(item => {
    return (
      <Fragment key={item.id}>
        <div>Field Id: {item.field_id}</div>
        <div>Crop Type: {item.crop_type}</div>
        <div>Date Fertilized: {item.date_fertilized}</div>
        <div>Fertilizers/Pesticides Applied: {item.fertilizer_pesticides_applied}</div>
      </ Fragment>
    );
  });

  const harvestingDisplay = harvestingItems.map(item => {
    return (
      <Fragment key={item.id}>
        <div>Crop Type: {item.crop_type}</div>
        <div>Farm Worker: {item.farm_worker}</div>
        <div>Date Harvest: {item.date_harvest}</div>
        <div>Tote Id: {item.tote_id}</div>
      </ Fragment>
    );
  });

  const shippingDisplay = shippingItems.map(item => {
    return (
      <Fragment key={item.id}>
        <div>Purchase Order Number: {item.purchase_order_number}</div>
        <div>Buyer Name: {item.buyer_name}</div>
        <div>Ship Date: {item.ship_date}</div>
        <div>Ship Amount: {item.ship_amount}</div>
      </ Fragment>
    );
  });


  return (
    <>
      <p>___________________Home___________________</p>



      <p>___________________Plant___________________</p>
      {plantingDisplay}

      <p>___________________Harvest___________________</p>
      {harvestingDisplay}

      <p>___________________Ship___________________</p>
      {shippingDisplay}
    </>
  );
}



