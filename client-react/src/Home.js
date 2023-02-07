import { useEffect, Fragment } from "react"
import axios from "axios";
import { useState } from "react";


export default function Home() {
  const [status, setStatus] = useState([]);

  useEffect(() => {
    axios.get('/shipping')
      .then((res) => {
        console.log('final', res.data)
        setStatus(res.data);
      })
      .catch((err) => {
        setStatus({ error: err.message });
      });
  }, []);

  const shippingItems = status.map(item => {
    return (
      <Fragment key={item.id}>
        <div>{item.buyer_name}</div>
        <div>{item.product_unit_shipped}</div>
        <div>{item.purchase_order_number}</div>
      </ Fragment>
    )
  })

  return (
    <>
      <p>Home</p>
      {shippingItems}
    </>
  )
}



