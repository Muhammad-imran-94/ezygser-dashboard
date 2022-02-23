import React from "react";
import classNames from "classnames";
import Devices from '../Devices';
import NewDevice from '../../pages/AddDevice'
import AddUser from '../../pages/AddUser'
import RunningDevices from "../RunningDevices"


import { Container } from "reactstrap";
import { Switch, Route } from "react-router-dom";
import Topbar from "./Topbar";

const Content = ({ sidebarIsOpen, toggleSidebar }) => (
  <Container
    fluid
    className={classNames("content position-relative overflow-auto", { "is-open": sidebarIsOpen })}
  >
    <Topbar toggleSidebar={toggleSidebar} />
    <Switch>
      <Route exact path="/devices" component={Devices} />
      <Route exact path="/add-device" component={NewDevice} />
      <Route exact path="/running-devices" component={RunningDevices} />
      <Route exact path="/Ware-house" component={() => "Ware-house"} />
      <Route exact path="/schedule-page" component={() => "schedule-page"} />
      <Route exact path="/add-user" component={AddUser} />
      {/* <Route exact path="/Home-3" component={() => "Home-3"} />
      <Route exact path="/Page-1" component={() => "Page-1"} />
      <Route exact path="/Page-2" component={() => "Page-2"} />
      <Route exact path="/page-1" component={() => "page-1"} />
      <Route exact path="/page-2" component={() => "page-2"} />
      <Route exact path="/page-3" component={() => "page-3"} />
      <Route exact path="/page-4" component={() => "page-4"} /> */}
    </Switch>
  </Container>
);

export default Content;
