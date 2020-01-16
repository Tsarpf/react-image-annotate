import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { useState } from "react";
import { RemoveScroll } from "react-remove-scroll";
import { styled } from "@material-ui/core/styles";
var Container = styled("div")({
  "& > div": {
    width: "100%",
    height: "100%"
  }
});
export default (function (_ref) {
  var children = _ref.children,
      otherProps = _objectWithoutProperties(_ref, ["children"]);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      mouseOver = _useState2[0],
      changeMouseOver = _useState2[1];

  return React.createElement(Container, Object.assign({}, otherProps, {
    onMouseEnter: function onMouseEnter(e) {
      return changeMouseOver(true);
    },
    onMouseLeave: function onMouseLeave(e) {
      return changeMouseOver(false);
    }
  }), React.createElement(RemoveScroll, {
    enabled: mouseOver,
    removeScrollBar: false
  }, children));
});