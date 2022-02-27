import React, { useState } from "react";

import { BrowserRouter as Router } from "react-router-dom";
import SideBar from "../../components/sidebar/Sidebar";
import Content from "../../components/content/Content";

const Index = () => {
  const [sidebarIsOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);

  return (
    <>
      <Router>
        <div className="App wrapper">
          <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
          <Content
            toggleSidebar={toggleSidebar}
            sidebarIsOpen={sidebarIsOpen}
          />
            
        </div>
      </Router>
    </>
  );
};

export default Index;
