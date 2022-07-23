import { Link, Outlet } from "react-router-dom";
import React from "react";
import { ReactComponent as Crwn } from "../../assets/crown.svg";
// import {Fragment} from 'react'  this also works
import './navigation.styles.scss'
export default function Navigation() {
  return (
    <React.Fragment>
      <div className="navigation">
        <div>
          <Link className="logo-container" to="/">
            <Crwn className="logo" />
          </Link>
        </div>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
        </div>
       
      </div>
      <Outlet />
    </React.Fragment>
  );
}
