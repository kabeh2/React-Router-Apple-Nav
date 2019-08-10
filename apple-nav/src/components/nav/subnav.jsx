import React from "react";
import { NavLink } from "react-router-dom";
import { subStore } from "./store";

const SubNav = props => {
  const items = subStore.map(item => {
    // if item.value = props.value of link
    // map through object and render
    if (item.value === props.value) {
      return (
        <NavLink
          to={`/${item.path}`}
          key={`${item.value}-${item.path}`}
          className="subnav-item"
        >
          <React.Fragment>
            <div className="subnav-img">
              <img
                src={`${item.img}`}
                alt={`${item.name}`}
                className="subnav-img--item"
              />
            </div>
            <div className="subnav-title-container">
              <p className="subnav-title">{item.name}</p>
            </div>
            <p className="subnav-new">{item.new}</p>
          </React.Fragment>
        </NavLink>
      );
    } else {
      return null;
    }
  });
  return <div className="subnav">{items}</div>;
};

export default SubNav;
