import React from "react";
import { NavLink } from "react-router-dom";
import { subStore } from "./store";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const SubNav = props => {
  const items = subStore.map(item => {
    // if item.value = props.value of link
    // map through object and render
    if (item.value === props.value) {
      return (
        <CSSTransition
          key={`${item.value}-${item.path}`}
          timeout={400}
          classNames="item"
        >
          <NavLink to={`/${item.path}`} className="subnav-item">
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
        </CSSTransition>
      );
    } else {
      return null;
    }
  });
  return (
    <div>
      <TransitionGroup className="subnav">{items}</TransitionGroup>
    </div>
  );
};

export default SubNav;
