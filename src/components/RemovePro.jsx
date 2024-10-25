import { useState } from 'react';
import { PRO } from './product';

function RemovePro() {
  const [product, setProduct] = useState(PRO);

  // Remove product
  const removeProduct = (productToRemove) => {
    setProduct(product.filter((prod) => prod !== productToRemove));
  }

  return (
    <div>
      <ul>
        {product.map((item, ind) => (
          <li key={ind}>
            {item}{" "}
            <button onClick={() => removeProduct(item)}>Remove Item</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RemovePro;
