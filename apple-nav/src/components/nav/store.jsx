import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import macbookair from "../../assets/macbookair__ej39du0gz4uq_large.svg";
import macbookpro from "../../assets/macbookpro.svg";
import imac from "../../assets/imac.svg";
import ipadpro from "../../assets/ipadpro.svg";
import ipadair from "../../assets/ipadair.svg";
import ipad from "../../assets/ipad_light.svg";
import iphonexs from "../../assets/iphonexs.svg";
import iphonexr from "../../assets/iphonexr__dc5ls4xainsm_large.svg";
import iphone8 from "../../assets/iphone8.svg";

export const navStore = [
  {
    img: <FontAwesomeIcon icon={["fab", "apple"]} />,
    name: "Apple Logo",
    path: "/"
  },
  {
    name: "Mac",
    path: "/macbook"
  },
  {
    name: "iPad",
    path: "/ipad"
  },
  {
    name: "iPhone",
    path: "/iphone"
  },
  {
    img: <FontAwesomeIcon icon="search" />,
    name: "Search",
    path: ""
  },
  {
    img: <FontAwesomeIcon icon="shopping-bag" />,
    name: "Search",
    path: ""
  }
];

export const subStore = [
  {
    name: "MacBook Air",
    img: macbookair,
    new: "New",
    value: "mac",
    path: "macbookair"
  },
  {
    name: "MacBook Pro",
    img: macbookpro,
    new: "New",
    value: "mac",
    path: "macbookpro"
  },
  {
    name: "iMac",
    img: imac,
    new: "",
    value: "mac",
    path: "imac"
  },

  {
    name: "iPad Pro",
    img: ipadpro,
    new: "",
    value: "ipad",
    path: "ipadpro"
  },
  {
    name: "iPad Air",
    img: ipadair,
    new: "New",
    value: "ipad",
    path: "ipadair"
  },
  {
    name: "iPad",
    img: ipad,
    new: "",
    value: "ipad",
    path: "ipad-original"
  },
  {
    name: "iPhone Xs",
    img: iphonexs,
    new: "New",
    value: "iphone",
    path: "iphonexs"
  },
  {
    name: "iPhone Xr",
    img: iphonexr,
    new: "New",
    value: "iphone",
    path: "iphonexr"
  },
  {
    name: "iPhone 8",
    img: iphone8,
    new: "",
    value: "iphone",
    path: "iphone8"
  }
];
