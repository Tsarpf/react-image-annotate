import React from "react";
import ReactDOM from "react-dom";
import Theme from "./Theme";
import DemoSite from "./DemoSite";
ReactDOM.render(React.createElement(Theme, null, React.createElement(DemoSite, null)), document.getElementById("root"));