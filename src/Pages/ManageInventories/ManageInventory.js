import React from "react";
import Footer from "../../Shared/Footer/Footer";
import AddInventories from "../AddInventories/AddInventories";
import MyItems from "../MyItems/MyItems";
import Navbar from "../../Shared/Navbar/Navbar";

const ManageInventory = () => {
  return (
    <div>
      <MyItems></MyItems>
      <AddInventories></AddInventories>
    </div>
  );
};

export default ManageInventory;
