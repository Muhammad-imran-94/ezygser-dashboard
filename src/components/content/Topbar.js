import React, { useState } from "react";
import {
  Navbar,
  Button,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { NavLink as RRNavLink } from 'react-router-dom';

const Tbar=({toggleSiderBar})=> {

    const [topbarIsOpen, setTopbarOpen] = useState(true);
  const toggleTopbar = () => setTopbarOpen(!topbarIsOpen);

  return (
    <> 
        <Navbar
      className="shadow-sm p-3 top-navbar position-fixed w-100"
      expand="md"
    >
      <Button color="info" onClick={toggleSiderBar}>
      <i className="fa fa-bars" aria-hidden="true"></i>
      </Button>
      <NavbarToggler onClick={toggleTopbar} className={"white"} />
      <Collapse isOpen={!topbarIsOpen} navbar className="justify-content-md-end">
        <Nav className="ml-auto" navbar >
          <NavItem>
            <NavLink activeClassName="active" tag={RRNavLink} to={"/add-device"}>
              Add Device
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink activeClassName="active" tag={RRNavLink} to={"/schedule-devices"}>
              Schedule Device
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink activeClassName="active" tag={RRNavLink} to={"/page-3"}>
              Settings
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink activeClassName="active" tag={RRNavLink} to={"/page-4"}>
              Sign Out
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>

    </>
  )
}

export default Tbar;