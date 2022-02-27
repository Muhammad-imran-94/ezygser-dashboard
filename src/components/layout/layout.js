
import React, { useState } from "react";
import SideBar from "../sidebar/Sidebar";
import TopBar from "../content/Topbar";
import classNames from "classnames";
import { Container } from "reactstrap";


const Index = (props) => {
  const [showNav, SetShowNav] = useState(true);
  console.log("show nav status",showNav);

  return (
    <>
      <Container
        fluid
        className={classNames(
          "content d-flex overflow-auto ",
          { "is-open": showNav }
        )}
      >
        <div className={showNav ? " left-side sidebar is-open ": " left-close  " }>
          <SideBar showNav={showNav} SetShowNav={SetShowNav} />
          </div>
          <div className=" w-100 position-relative" >
            <TopBar SetShowNav={SetShowNav} showNav={showNav}/>
            {props.children}
          </div>
        
      </Container>
    </>
  );
};

export default Index;
