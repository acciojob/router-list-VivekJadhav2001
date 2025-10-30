import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function ItemList() {
  const items = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Item List</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {items.map((item) => (
          <li key={item.id} style={{ margin: "10px" }}>
            <Link to={`/items/${item.id}`} style={{ textDecoration: "none" }}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList