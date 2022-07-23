import { Link, Outlet } from "react-router-dom";
import React from "react";
export default function Navigation() {
  return (
    <React.Fragment>
      <div className="navigation">
        <div>
            <Link className="logo-link" to='/'>LOGO</Link>
        </div>
        <div>Logo</div>
        <div className ="links-container">
            <Link className ="nav-link" to ='/shop'>SHOP</Link>
        </div>
        <div> This is Navigation Bar</div>
        <Outlet />
      </div>
    </React.Fragment>
  );
}
