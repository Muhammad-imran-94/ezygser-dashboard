import React, { useState } from "react";

import { NavLink } from "react-router-dom";

function Index(props) {
  let { showNav, toggleSiderBar } = props;

  return (
    <>
      <div
        className={
          showNav ? "sidebar is-open h-100 w-100 " : " sidebar  h-100 w-100"
        }
      >
        <div className="sidebar-header border-bottom ">
          <span color="info" style={{ color: "#fff" }} onClick={toggleSiderBar}>
            &times;
          </span>
          <h3 className="pb-2 px-2 pt-3 h2">Ezgyzer</h3>
          <img
            src="https://www.w3schools.com/howto/img_avatar.png"
            class="rounded-circle h-25 w-25 px-2"
            alt="user avatar"
          />
          <p className="px-2 pt-1 pb-1 m-0 text-secondary user-details">
            Admin Name
          </p>
          <p className="px-2 pt-0 pb-1 m-0 text-secondary user-details">
            admin@gmail.com
          </p>
        </div>
        <ul class="list-unstyled pt-1 ">
          <li>
            <div class="dropdown">
              <span>
                <NavLink
                  to="/devices"
                  className="d-flex align-items-center justify-content-between px-2 pt-2"
                >
                  <span>
                    <i class="fa fa-home" aria-hidden="true"></i> Home
                  </span>
                  <i class="fa fa-angle-down" aria-hidden="true"></i>
                </NavLink>
              </span>
              <div className="show">
                <div className="px-4">
                  <NavLink to="/add-device" className="d-flex pt-2 px-1">
                    Add Device
                  </NavLink>
                </div>
                <div className="px-4">
                  <NavLink to="/running-devices" className="d-flex pt-1 px-1">
                    Running Devices
                  </NavLink>
                </div>
                <div className="px-4">
                  <NavLink to="/schedule-devices" className="d-flex pt-1 px-1">
                    Schedule Devices
                  </NavLink>
                </div>
              </div>
            </div>
          </li>
          <li>
            <span>
              <NavLink
                to="/add-user"
                className="d-flex align-items-center  px-2 py-2"
              >
                  <i className="fa fa-user-circle" aria-hidden="true"></i>
                  &nbsp;Add User
              </NavLink>
            </span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Index;
