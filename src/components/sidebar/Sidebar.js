import React from "react";
import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { NavLink as RRNavLink } from 'react-router-dom';

import SubMenu from "./SubMenu";

const SideBar = ({ isOpen, toggle }) => (
  <div className={classNames("sidebar", { "is-open": isOpen })}>
    <div className="sidebar-header border-bottom ">
      <span color="info" onClick={toggle} style={{ color: "#fff" }}>
        &times;
      </span>
      <h3 className="pb-2 px-2">Ezgyzer</h3>
      <img src="https://www.w3schools.com/howto/img_avatar.png" class="rounded-circle h-25 w-25 px-2" alt="user avatar"/>
      <p className="px-2 pt-1 pb-1 m-0 text-secondary user-details">Admin Name</p >
      <p className="px-2 pt-0 pb-1 m-0 text-secondary user-details">admin@gmail.com</p>
    </div>
    <div className="side-menu">
      <Nav vertical  className="list-unstyled pb-3 pt-3">
          <span className="px-2 text-secondary user-details">Dashboard</span>
        <SubMenu title="Devices" to="/devices"   tag={RRNavLink}  items={submenus[0]} />
        <NavItem>
          <NavLink tag={Link} activeclassname="active" to={"/schedule-page"} >
            {/* <FontAwesomeIcon icon={faBriefcase} className="mr-2" /> */}
            Schedule Page
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} activeclassname="active" to={"/add-user"} >
            {/* <FontAwesomeIcon icon={faBriefcase} className="mr-2" /> */}
            Add User
          </NavLink>
        </NavItem>
        
      </Nav>
    </div>
  </div>
);

const submenus = [
  [
    {
      title: "Add new Device",
      target: "add-device",
    },
    {
      title: "Warehouse",
      target: "Ware-house",
    },
    {
      title: "Running Devices",
      target: "running-devices",
    }
  ],
];

export default SideBar;
