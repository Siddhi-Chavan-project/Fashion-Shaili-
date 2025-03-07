import React from "react";
import "../../styles/UserMenu.css";
import "../../styles/AdminDashboard.css";
import { NavLink } from "react-router-dom";
const UserMenu = () => {
  return (
    <div>
      <div className="users">
      <div className="text-center dashboard-menu">
        <div className="list-group">
          <h4>Dashboard</h4>
          <NavLink
            to="/dashboard/user/profile"
            className="list-group-item list-group-item-action"
          >
            Profile
          </NavLink>
          <NavLink
            to="/dashboard/user/orders"
            className="list-group-item list-group-item-action"
          >
            Orders
          </NavLink>
        </div>
      </div>
    </div></div>
  );
};

export default UserMenu;