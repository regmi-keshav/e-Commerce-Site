import React from "react";
import Navbar from "../navbar/Navbar";
import ProductList from "../ProductList/ProductList";

const Home = () => {
  return (
    <div>
      <Navbar>
        <ProductList></ProductList>
      </Navbar>
    </div>
  );
};

export default Home;
