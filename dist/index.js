import React from "react";
import ReactDOM from "react-dom";
import Theme from "./Theme";
import DemoSite from "./DemoSite";
import LandingPage from "./LandingPage";
import "./site.css";

var Site = function Site() {
  var path = window.location.pathname.split("/").slice(-1)[0];
  return React.createElement(Theme, null, path === "demo" ? React.createElement(DemoSite, null) : React.createElement(LandingPage, null));
};

ReactDOM.render(React.createElement(Site, null), document.getElementById("root"));