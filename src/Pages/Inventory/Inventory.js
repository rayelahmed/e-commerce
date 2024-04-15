import React from "react";
import { NavLink } from "react-router-dom";

import "./Inventory.css";
import Legacy from "../Legacy/Legacy";

const Inventory = () => {
  return (
    <div>
      <Legacy />
      <div className="manage-inv">
        <NavLink
          id="button-nav-link"
          exact="true"
          to="/manageinventories"
          className={(navData) => (navData.isActive ? "active-style" : "none")}
        >
          MANAGE INVENTORIES
        </NavLink>
      </div>
    </div>
  );
};

export default Inventory;
