import React, { setState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SidebarBoxContainer from "../SidebarBoxContainer";
import HistoryIcon from "@material-ui/icons/History";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import UndoIcon from "@material-ui/icons/Undo";
import moment from "moment";
import { grey } from "@material-ui/core/colors";
var useStyles = makeStyles({
  emptyText: {
    fontSize: 14,
    fontWeight: "bold",
    color: grey[500],
    textAlign: "center",
    padding: 20
  }
});
export default (function (_ref) {
  var history = _ref.history,
      onRestoreHistory = _ref.onRestoreHistory;
  var classes = useStyles();
  return React.createElement(SidebarBoxContainer, {
    title: "History",
    icon: React.createElement(HistoryIcon, {
      style: {
        color: grey[700]
      }
    }),
    expandedByDefault: true
  }, React.createElement(List, null, history.length === 0 && React.createElement("div", {
    className: classes.emptyText
  }, "No History Yet"), history.map(function (_ref2, i) {
    var name = _ref2.name,
        time = _ref2.time;
    return React.createElement(ListItem, {
      button: true,
      dense: true,
      key: i
    }, React.createElement(ListItemText, {
      primary: name,
      secondary: moment(time).format("LT")
    }), i === 0 && React.createElement(ListItemSecondaryAction, {
      onClick: onRestoreHistory
    }, React.createElement(IconButton, null, React.createElement(UndoIcon, null))));
  })));
});