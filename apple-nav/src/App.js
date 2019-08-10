import React from "react";
import { Switch, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faSearch, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import NavBar from "./components/nav/navbar";
import Mac from "./components/pages/mac";
import Ipad from "./components/pages/ipad";
import iPhone from "./components/pages/iphone";
import "./App.css";
import SubNav from "./components/nav/subnav";
import MacBookPro from "./components/pages/mac/macbookpro";
import MacBookAir from "./components/pages/mac/macbookair";
import IMac from "./components/pages/mac/imac";
import IPadPro from "./components/pages/ipad/ipadpro";
import IPadAir from "./components/pages/ipad/ipadair";
import IPadOG from "./components/pages/ipad/ipadOriginal";
import IphoneXs from "./components/pages/iphone/iphonexs";
import IPhoneXr from "./components/pages/iphone/iphonexr";
import IPhone8 from "./components/pages/iphone/iphone8";

library.add(fab, faSearch, faShoppingBag);

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="subnav-route">
        <Switch>
          <Route
            path="/macbook"
            render={props => {
              return <SubNav {...props} value="mac" />;
            }}
          />
          <Route
            path="/ipad"
            render={props => {
              return <SubNav {...props} value="ipad" />;
            }}
          />
          <Route
            path="/iphone"
            render={props => {
              return <SubNav {...props} value="iphone" />;
            }}
          />
        </Switch>
      </div>
      <div className="page-content">
        <Switch>
          <Route path="/macbookpro" component={MacBookPro} />
          <Route path="/macbookair" component={MacBookAir} />
          <Route path="/imac" component={IMac} />
          <Route path="/ipadpro" component={IPadPro} />
          <Route path="/ipadair" component={IPadAir} />
          <Route path="/ipad-original" component={IPadOG} />
          <Route path="/iphonexs" component={IphoneXs} />
          <Route path="/iphonexr" component={IPhoneXr} />
          <Route path="/iphone8" component={IPhone8} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
