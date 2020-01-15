import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import HeaderButton, { HeaderButtonContext } from "../HeaderButton";
import BackIcon from "@material-ui/icons/KeyboardArrowLeft";
import NextIcon from "@material-ui/icons/KeyboardArrowRight";
import SettingsIcon from "@material-ui/icons/Settings";
import HelpIcon from "@material-ui/icons/Help";
import FullscreenIcon from "@material-ui/icons/Fullscreen";
import ExitIcon from "@material-ui/icons/ExitToApp";
import HotkeysIcon from "@material-ui/icons/Keyboard";
import styles from "./styles";
var useStyles = makeStyles(styles);
export default (function (_ref) {
  var onHeaderButtonClick = _ref.onHeaderButtonClick,
      title = _ref.title,
      inFullScreen = _ref.inFullScreen,
      multipleImages = _ref.multipleImages;
  var classes = useStyles();
  return React.createElement("div", {
    className: classes.header
  }, React.createElement("div", {
    className: classes.fileInfo
  }, title), React.createElement("div", {
    className: classes.headerActions
  }, React.createElement(HeaderButtonContext.Provider, {
    value: {
      onHeaderButtonClick: onHeaderButtonClick
    }
  }, multipleImages && React.createElement(React.Fragment, null, React.createElement(HeaderButton, {
    name: "Prev",
    Icon: BackIcon
  }), React.createElement(HeaderButton, {
    name: "Next",
    Icon: NextIcon
  })), React.createElement(HeaderButton, {
    name: "Settings",
    Icon: SettingsIcon
  }), inFullScreen ? React.createElement(HeaderButton, {
    name: "Window",
    Icon: FullscreenIcon
  }) : React.createElement(HeaderButton, {
    name: "Fullscreen",
    Icon: FullscreenIcon
  }), React.createElement(HeaderButton, {
    name: "Save",
    Icon: ExitIcon
  }))));
});