import React from "react";
import "./App.css";
import "./index";
import ProductTable from "./component/productType";

const Product = [
  { category: "Electronics", price: 300, name: "Mobile Phone" },
  { category: "Electronics", price: 499, name: "TV" },
  { category: "Clothes", price: 50, name: "T shirt" },
  { category: "Clothes", price: 600, name: "Robe" },
];

function App() {
  return (
    <div className="App">
      <h1 className="cltit">THE PRODUCTS ARRAY OF OBJECT</h1>
      <hr />
      <div className="COL">
        <h2>Category</h2>
        <h2>Price</h2>
        <h2>Name</h2>
      </div>
      <div>
        <ProductTable x={Product} />
      </div>
    </div>
  );
}

export default App;
