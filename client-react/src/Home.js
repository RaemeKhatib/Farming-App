import { useEffect, Fragment, useState } from "react";
import axios from "axios";


export default function Home({
  plantingItems,
  harvestingItems,
  packingItems,
  shippingItems,
  setState
}) {
  // const [shippingItems, setShippingItems] = useState([]);
  // const [plantingItems, setPlantingItems] = useState([]);
  // const [harvestingItems, setHarvestingItems] = useState([]);
  
  
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

  const packingDisplay = packingItems.map(item => {
    return (
      <Fragment key={item.id}>
        <div>Packing Date: {item.date_pack}</div>
        <div>product Unit: {item.product_unit}</div>
        <div>Product Unit Amount: {item.product_unit_amount}</div>
        <div>Farm Worker: {item.farm_worker}</div>
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

      <p>___________________Pack___________________</p>
      {packingDisplay}

      <p>___________________Ship___________________</p>
      {shippingDisplay}
    </>
  );
}



