import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faHome,
//   faBriefcase,
//   faPaperPlane,
//   faQuestion,
//   faImage,
//   faCopy,
// } from "@fortawesome/free-solid-svg-icons";
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
      <h3>Ezgyzer</h3>
    </div>
    <div className="side-menu">
      <Nav vertical className="list-unstyled pb-3 pt-3">
          <span >Dashboard</span>
        <SubMenu title="Devices" to="/" activeClassName="active" active tag={RRNavLink}  items={submenus[0]} />
        <NavItem>
          <NavLink tag={Link} to={"/schedule-page"}>
            {/* <FontAwesomeIcon icon={faBriefcase} className="mr-2" /> */}
            Schedule Page
          </NavLink>
        </NavItem>
        
      </Nav>
    </div>
  </div>
);

const submenus = [
  [
    {
      title: "Running Devices",
      target: "running-devices",
    },
    {
      title: "Warehouse",
      target: "Ware-house",
    },
  ],
];

export default SideBar;
