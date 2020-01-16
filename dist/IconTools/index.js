import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsAlt, faMousePointer, faExpandArrowsAlt, faTag, faPaintBrush, faCrosshairs, faDrawPolygon, faVectorSquare, faHandPaper, faSearch } from "@fortawesome/free-solid-svg-icons";
import SmallToolButton, { SelectedTool } from "../SmallToolButton";
import { makeStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";
var useStyles = makeStyles({
  iconTools: {
    display: "flex",
    padding: 4,
    flexDirection: "column",
    zIndex: 9,
    boxShadow: "0px 0px 5px rgba(0,0,0,0.1)",
    borderRight: "1px solid ".concat(grey[300]),
    backgroundColor: grey[100]
  }
});
export default (function (_ref) {
  var showTags = _ref.showTags,
      selectedTool = _ref.selectedTool,
      onClickTool = _ref.onClickTool,
      _ref$enabledTools = _ref.enabledTools,
      enabledTools = _ref$enabledTools === void 0 ? ["select", "create-point", "create-box", "create-polygon"] : _ref$enabledTools;
  var classes = useStyles();
  return React.createElement("div", {
    className: classes.iconTools
  }, React.createElement(SelectedTool.Provider, {
    value: {
      enabledTools: enabledTools,
      selectedTool: selectedTool,
      onClickTool: onClickTool
    }
  }, React.createElement(SmallToolButton, {
    id: "select",
    name: "Select Region",
    icon: React.createElement(FontAwesomeIcon, {
      size: "xs",
      fixedWidth: true,
      icon: faMousePointer
    })
  }), React.createElement(SmallToolButton, {
    alwaysShowing: true,
    id: "pan",
    name: "Drag/Pan",
    icon: React.createElement(FontAwesomeIcon, {
      size: "xs",
      fixedWidth: true,
      icon: faHandPaper
    })
  }), React.createElement(SmallToolButton, {
    alwaysShowing: true,
    id: "zoom",
    name: "Zoom In/Out",
    icon: React.createElement(FontAwesomeIcon, {
      size: "xs",
      fixedWidth: true,
      icon: faSearch
    })
  }), React.createElement(SmallToolButton, {
    alwaysShowing: true,
    togglable: true,
    id: "show-tags",
    selected: showTags,
    name: "Show Tags",
    icon: React.createElement(FontAwesomeIcon, {
      size: "xs",
      fixedWidth: true,
      icon: faTag
    })
  }), React.createElement(SmallToolButton, {
    id: "create-point",
    name: "Add Point",
    icon: React.createElement(FontAwesomeIcon, {
      size: "xs",
      fixedWidth: true,
      icon: faCrosshairs
    })
  }), React.createElement(SmallToolButton, {
    id: "create-box",
    name: "Add Bounding Box",
    icon: React.createElement(FontAwesomeIcon, {
      size: "xs",
      fixedWidth: true,
      icon: faVectorSquare
    })
  }), React.createElement(SmallToolButton, {
    id: "create-polygon",
    name: "Add Polygon",
    icon: React.createElement(FontAwesomeIcon, {
      size: "xs",
      fixedWidth: true,
      icon: faDrawPolygon
    })
  })));
});