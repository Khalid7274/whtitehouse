import { useState } from "react";

export default function ItemPrice(){

    const [item, setItem]=useState([
        {
            name: 'Mouse',
            price: 20.36
        },
        {
            name: 'Keyboard',
            price: 20.36
        },
        {
            name: 'Mouse',
            price: 20.36
        }, {
            name: 'Mouse',
            price: 20.36
        },
    ]);
    const totalPrice = item.reduce((acc, prod) => acc + prod.price, 0).toFixed(2);

  return (
    <div className="add-pro">
      <h1>PRODUCT PRICE</h1>
      <ul>
        {item.map((prod, ind) => (
          <li key={ind}>
            {prod.name} - ${prod.price.toFixed(2)}
          </li>
        ))}
      </ul>
      <p>Total: ${totalPrice}</p>
    </div>
  );
}