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
import { Link } from "react-router-dom";

const Topbar = ({ toggleSidebar }) => {
  const [topbarIsOpen, setTopbarOpen] = useState(true);
  const toggleTopbar = () => setTopbarOpen(!topbarIsOpen);

  return (
    <Navbar
      className=" shadow-sm p-3 top-navbar "
      expand="md"
    >
      <Button color="info" onClick={toggleSidebar}>
        <span>-</span>
      </Button>
      <NavbarToggler onClick={toggleTopbar} className={"white"}/>
      <Collapse isOpen={!topbarIsOpen} navbar className="justify-content-md-end">
        <Nav className="ml-auto" navbar >
          <NavItem>
            <NavLink tag={Link} to={"/de"}>
              Add Device
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to={"/schedule-page"}>
              Schedule Device
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to={"/page-3"}>
              Settings
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to={"/page-4"}>
              Sign Out
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Topbar;
