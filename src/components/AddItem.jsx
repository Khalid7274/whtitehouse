import { useState } from 'react';
import { PRO } from './product';

function ManageItems() {
  const [items, setItems] = useState(PRO);
  const [newItem, setNewItem] = useState("");

  // Add product
  const addProduct = () => {
    if (newItem) {
      setItems([...items, newItem]);
      setNewItem("");
    }
  };

  // Remove product
  const removeProduct = (productToRemove) => {
    setItems(items.filter((item) => item !== productToRemove));
  };

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}{" "}
            <button onClick={() => removeProduct(item)}>Delete❌</button>
          </li>
        ))}
      </ul>
      <input 
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Enter item"
      />
      <button onClick={addProduct}>Add Product</button>
    </div>
  );
}

export default ManageItems;
