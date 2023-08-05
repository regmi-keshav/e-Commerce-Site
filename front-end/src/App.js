import React from "react";
import Counter from "./features/counter/Counter";
import ProductList from "./features/ProductList/ProductList";
import "./App.css";
import Navbar from "./features/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ProductList />
    </div>
  );
}

export default App;
