import React from 'react'

function ItemDetails({ match }) {
  const { id } = match.params;
  const items = [
    { id: "1", name: "Item 1", description: "Description for Item 1" },
    { id: "2", name: "Item 2", description: "Description for Item 2" },
    { id: "3", name: "Item 3", description: "Description for Item 3" },
  ];

  const item = items.find((i) => i.id === id);

  return (
    <div style={{ textAlign: "center" }}>
      {item ? (
        <>
          <h1>{item.name}</h1>
          <p>{item.description}</p>
        </>
      ) : (
        <h1>Item not found</h1>
      )}
      <a href="/">Back to List</a>
    </div>
  );
}

export default ItemDetails