import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";

import "./../styles/App.css";

const data = [
  {
    id: 1,
    title: "Item 1",
    desc: "Description for Item 1",
  },
  {
    id: 2,
    title: "Item 2",
    desc: "Description for Item 2",
  },
  {
    id: 3,
    title: "Item 3",
    desc: "Description for Item 3",
  },
];

const ItemList = () => {
  return (
    <div>
      <h1>Item List</h1>

      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <Link to={`/items/${item.id}`}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ItemDetail = () => {
  const { id } = useParams();

  const item = data.find(
    (item) => item.id === Number(id)
  );

  if (!item) {
    return <h1>Item Not Found</h1>;
  }

  return (
    <div>
      <h1>{item.title}</h1>
      <p>{item.desc}</p>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ItemList />} />
        <Route path="/items/:id" element={<ItemDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
