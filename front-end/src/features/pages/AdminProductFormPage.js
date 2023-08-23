import React from "react";
import ProductForm from "../admin/components/ProductForm";
import Navbar from "../navbar/Navbar";

const AdminProductFormPage = () => {
  return (
    <div>
      <Navbar>
        <ProductForm></ProductForm>
      </Navbar>
    </div>
  );
};

export default AdminProductFormPage;
