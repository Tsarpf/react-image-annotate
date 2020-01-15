import React from "react";
import Annotator from "./Annotator";
import Theme from "./Theme";
export default (function (props) {
  return React.createElement(Theme, null, React.createElement(Annotator, props));
});
