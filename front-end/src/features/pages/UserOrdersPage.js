import React from "react";
import Navbar from "../navbar/Navbar";
import UserOrders from "../user/components/UserOrders";

const UserOrdersPage = () => {
  return (
    <div>
      <Navbar>
        <h1 className="pt-5 mx-auto text-2xl">My Orders</h1>
        <UserOrders></UserOrders>
      </Navbar>
    </div>
  );
};

export default UserOrdersPage;
