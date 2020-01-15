import React from "react";
import SidebarBoxContainer from "../SidebarBoxContainer";
import { makeStyles } from "@material-ui/core/styles";
import StyleIcon from "@material-ui/icons/Style";
import { grey } from "@material-ui/core/colors";
import Select from "react-select";
var useStyles = makeStyles({});
export default (function (_ref) {
  var currentImage = _ref.currentImage,
      _ref$imageClsList = _ref.imageClsList,
      imageClsList = _ref$imageClsList === void 0 ? [] : _ref$imageClsList,
      _ref$imageTagList = _ref.imageTagList,
      imageTagList = _ref$imageTagList === void 0 ? [] : _ref$imageTagList,
      onChangeImage = _ref.onChangeImage;
  var _currentImage$tags = currentImage.tags,
      tags = _currentImage$tags === void 0 ? [] : _currentImage$tags,
      _currentImage$cls = currentImage.cls,
      cls = _currentImage$cls === void 0 ? null : _currentImage$cls;
  return React.createElement(SidebarBoxContainer, {
    title: "Image Tags",
    expandedByDefault: true,
    noScroll: true,
    icon: React.createElement(StyleIcon, {
      style: {
        color: grey[700]
      }
    })
  }, imageClsList.length > 0 && React.createElement("div", {
    style: {
      padding: 8
    }
  }, React.createElement(Select, {
    placeholder: "Image Classification",
    onChange: function onChange(o) {
      return onChangeImage({
        cls: o.value
      });
    },
    value: cls ? {
      value: cls,
      label: cls
    } : cls,
    options: imageClsList.map(function (c) {
      return {
        value: c,
        label: c
      };
    })
  })), imageTagList.length > 0 && React.createElement("div", {
    style: {
      padding: 8,
      paddingTop: 0
    }
  }, React.createElement(Select, {
    isMulti: true,
    placeholder: "Image Tags",
    onChange: function onChange(o) {
      return onChangeImage({
        tags: o.map(function (a) {
          return a.value;
        })
      });
    },
    value: tags.map(function (r) {
      return {
        value: r,
        label: r
      };
    }),
    options: imageTagList.map(function (c) {
      return {
        value: c,
        label: c
      };
    })
  })));
});