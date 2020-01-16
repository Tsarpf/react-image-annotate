import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useReducer } from "react";
import MainLayout from "../MainLayout";
import SettingsProvider from "../SettingsProvider";
import reducer from "./reducer";
export default (function (_ref) {
  var images = _ref.images,
      allowedArea = _ref.allowedArea,
      _ref$selectedImage = _ref.selectedImage,
      selectedImage = _ref$selectedImage === void 0 ? images.length > 0 ? images[0].src : undefined : _ref$selectedImage,
      showPointDistances = _ref.showPointDistances,
      pointDistancePrecision = _ref.pointDistancePrecision,
      _ref$showTags = _ref.showTags,
      showTags = _ref$showTags === void 0 ? true : _ref$showTags,
      _ref$enabledTools = _ref.enabledTools,
      enabledTools = _ref$enabledTools === void 0 ? ["select", "create-point", "create-box", "create-polygon"] : _ref$enabledTools,
      _ref$regionTagList = _ref.regionTagList,
      regionTagList = _ref$regionTagList === void 0 ? [] : _ref$regionTagList,
      _ref$regionClsList = _ref.regionClsList,
      regionClsList = _ref$regionClsList === void 0 ? [] : _ref$regionClsList,
      _ref$imageTagList = _ref.imageTagList,
      imageTagList = _ref$imageTagList === void 0 ? [] : _ref$imageTagList,
      _ref$imageClsList = _ref.imageClsList,
      imageClsList = _ref$imageClsList === void 0 ? [] : _ref$imageClsList,
      taskDescription = _ref.taskDescription,
      onExit = _ref.onExit;

  var _useReducer = useReducer(reducer, {
    showTags: showTags,
    allowedArea: allowedArea,
    selectedImage: selectedImage,
    showPointDistances: showPointDistances,
    pointDistancePrecision: pointDistancePrecision,
    selectedTool: "select",
    mode: null,
    taskDescription: taskDescription,
    images: images,
    labelImages: imageClsList.length > 0 || imageTagList.length > 0,
    regionClsList: regionClsList,
    regionTagList: regionTagList,
    imageClsList: imageClsList,
    imageTagList: imageTagList,
    enabledTools: enabledTools,
    history: []
  }),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      state = _useReducer2[0],
      dispatchToReducer = _useReducer2[1];

  var dispatch = function dispatch(action) {
    if (action.type === "HEADER_BUTTON_CLICKED" && (action.buttonName === "Exit" || action.buttonName === "Done" || action.buttonName === "Save" || action.buttonName === "Complete")) {
      onExit(_objectSpread({}, state, {
        history: undefined
      }));
    } else {
      dispatchToReducer(action);
    }
  };

  return React.createElement(SettingsProvider, null, React.createElement(MainLayout, {
    debug: true,
    state: state,
    dispatch: dispatch
  }));
});