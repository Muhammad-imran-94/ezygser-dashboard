// import {
//     Link
//   } from "react-router-dom";
import React, { useState } from "react";
import SideBar from "../sidebar/Sidebar";
import ToBar from "../content/Topbar";
import classNames from "classnames";
import { Container } from "reactstrap";

const Index = (props) => {
  const [showNav, SetShowNav] = useState(true);
  const toggleSiderBar = () => SetShowNav(!showNav);


  console.log(showNav);

  return (
    <>
      <Container
        fluid
        className={classNames(
          "content position-relative overflow-auto",
          { "is-open": showNav }
        )}
      >
        <div className="d-flex layout w-100">
          <SideBar showNav={showNav} toggleSiderBar={toggleSiderBar} />

          <div className="w-100">
            <ToBar toggleSiderBar={toggleSiderBar}/>
            {props.children}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Index;
