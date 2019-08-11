import React from "react";
import { NavLink } from "react-router-dom";
import { navStore } from "./store";
import "./navbar.scss";

const NavBar = () => {
  const activeStyle = {
    opacity: "0.65"
  };

  const navLink = navStore.map((link, index) => {
    return (
      <NavLink
        exact
        activeStyle={activeStyle}
        to={`${link.path}`}
        key={`${index}-${link.name}`}
      >
        {!link.img ? link.name : link.img}
      </NavLink>
    );
  });

  return (
    <div className="navbar">
      <div className="navbar_content">{navLink}</div>
    </div>
  );
};

export default NavBar;
