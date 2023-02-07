import { useEffect, Fragment, useState } from "react";
import axios from "axios";



export default function Home() {
  const [shippingItems, setShippingItems] = useState([]);
  const [plantingItems, setPlantingItems] = useState([]);

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
      <p>Home</p>

      <p>SHIPPING</p>
      {shippingDisplay}

      <p>PLANTING</p>
      {plantingDisplay}
    </>
  );
}



