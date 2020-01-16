import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./styles";
import classnames from "classnames";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import TrashIcon from "@material-ui/icons/Delete";
import CheckIcon from "@material-ui/icons/Check";
import UndoIcon from "@material-ui/icons/Undo";
import Select from "react-select";
var useStyles = makeStyles(styles);
export default (function (_ref) {
  var region = _ref.region,
      editing = _ref.editing,
      _ref$allowedClasses = _ref.allowedClasses,
      allowedClasses = _ref$allowedClasses === void 0 ? ["Laptop", "Mouse", "Compuda"] : _ref$allowedClasses,
      _ref$allowedTags = _ref.allowedTags,
      allowedTags = _ref$allowedTags === void 0 ? ["Dog", "Cat", "Woof", "Electronic Device"] : _ref$allowedTags,
      onDelete = _ref.onDelete,
      _onChange = _ref.onChange,
      onClose = _ref.onClose,
      onOpen = _ref.onOpen;
  var classes = useStyles();
  return React.createElement(Paper, {
    onClick: function onClick() {
      return !editing ? onOpen(region) : null;
    },
    className: classnames(classes.regionInfo, {
      highlighted: region.highlighted
    })
  }, !editing ? React.createElement("div", null, region.cls && React.createElement("div", {
    className: "name"
  }, React.createElement("div", {
    className: "circle",
    style: {
      backgroundColor: region.color
    }
  }), region.cls), region.tags && React.createElement("div", {
    className: "tags"
  }, region.tags.map(function (t) {
    return React.createElement("div", {
      key: t,
      className: "tag"
    }, t);
  }))) : React.createElement("div", {
    style: {
      width: 200
    }
  }, React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "row"
    }
  }, React.createElement("div", {
    style: {
      display: "flex",
      backgroundColor: region.color,
      color: "#fff",
      padding: 4,
      paddingLeft: 8,
      paddingRight: 8,
      borderRadius: 4,
      fontWeight: "bold",
      textShadow: "0px 0px 5px rgba(0,0,0,0.4)"
    }
  }, region.type), React.createElement("div", {
    style: {
      flexGrow: 1
    }
  }), React.createElement(IconButton, {
    onClick: function onClick() {
      return onDelete(region);
    },
    tabIndex: -1,
    style: {
      width: 22,
      height: 22
    },
    size: "small",
    variant: "outlined"
  }, React.createElement(TrashIcon, {
    style: {
      marginTop: -8,
      width: 16,
      height: 16
    }
  }))), allowedClasses.length > 0 && React.createElement("div", {
    style: {
      marginTop: 6
    }
  }, React.createElement(Select, {
    placeholder: "Classification",
    onChange: function onChange(o) {
      return _onChange(_objectSpread({}, region, {
        cls: o.value
      }));
    },
    value: region.cls ? {
      label: region.cls,
      value: region.cls
    } : null,
    options: allowedClasses.map(function (c) {
      return {
        value: c,
        label: c
      };
    })
  })), allowedTags.length > 0 && React.createElement("div", {
    style: {
      marginTop: 4
    }
  }, React.createElement(Select, {
    onChange: function onChange(newTags) {
      return _onChange(_objectSpread({}, region, {
        tags: newTags.map(function (t) {
          return t.value;
        })
      }));
    },
    placeholder: "Tags",
    value: (region.tags || []).map(function (c) {
      return {
        label: c,
        value: c
      };
    }),
    isMulti: true,
    options: allowedTags.map(function (c) {
      return {
        value: c,
        label: c
      };
    })
  })), React.createElement("div", {
    style: {
      marginTop: 4,
      display: "flex"
    }
  }, React.createElement("div", {
    style: {
      flexGrow: 1
    }
  }), React.createElement(Button, {
    onClick: function onClick() {
      return onClose(region);
    },
    size: "small",
    variant: "contained",
    color: "primary"
  }, React.createElement(CheckIcon, null)))));
});