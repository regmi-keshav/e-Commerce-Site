import React from "react";
import Navbar from "../navbar/Navbar";
import ProductDetails from "../product/components/ProductDetails";
import Footer from "../common/Footer";

const ProductDetailPage = () => {
  return (
    <>
      <Navbar>
        <ProductDetails></ProductDetails>
      </Navbar>
      <Footer></Footer>
    </>
  );
};

export default ProductDetailPage;
