import React, { createContext, useContext } from "react";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import { blue } from "@material-ui/core/colors";
export var SelectedTool = createContext();
export default (function (_ref) {
  var id = _ref.id,
      name = _ref.name,
      icon = _ref.icon,
      selected = _ref.selected,
      togglable = _ref.togglable,
      _ref$alwaysShowing = _ref.alwaysShowing,
      alwaysShowing = _ref$alwaysShowing === void 0 ? false : _ref$alwaysShowing;

  var _useContext = useContext(SelectedTool),
      enabledTools = _useContext.enabledTools,
      selectedTool = _useContext.selectedTool,
      onClickTool = _useContext.onClickTool;

  if (!enabledTools.includes(id) && !alwaysShowing) return null;
  selected = selected || selectedTool === id;
  return React.createElement(Tooltip, {
    placement: "right",
    title: name
  }, React.createElement("div", null, React.createElement(IconButton, {
    disabled: !togglable ? selected : undefined,
    "aria-label": name,
    onClick: function onClick() {
      return onClickTool(id);
    },
    size: "small",
    style: {
      width: 50,
      height: 50,
      margin: 1,
      color: selected ? blue[500] : undefined
    }
  }, icon)));
});