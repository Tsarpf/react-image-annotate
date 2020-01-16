import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TaskDescription from "../TaskDescriptionSidebarBox";
import ImageSelector from "../ImageSelectorSidebarBox";
import RegionSelector from "../RegionSelectorSidebarBox";
import History from "../HistorySidebarBox";
import DebugBox from "../DebugSidebarBox";
import TagsSidebarBox from "../TagsSidebarBox";
import ClassAdder from './ClassAdder';
var useStyles = makeStyles({});
export default (function (_ref) {
  var debug = _ref.debug,
      taskDescription = _ref.taskDescription,
      images = _ref.images,
      regions = _ref.regions,
      history = _ref.history,
      labelImages = _ref.labelImages,
      currentImage = _ref.currentImage,
      imageClsList = _ref.imageClsList,
      imageTagList = _ref.imageTagList,
      onClassAdd = _ref.onClassAdd,
      onChangeImage = _ref.onChangeImage,
      onSelectRegion = _ref.onSelectRegion,
      onSelectImage = _ref.onSelectImage,
      onChangeRegion = _ref.onChangeRegion,
      onDeleteRegion = _ref.onDeleteRegion,
      _onRestoreHistory = _ref.onRestoreHistory;
  var classes = useStyles();
  return React.createElement("div", null, debug && React.createElement(DebugBox, {
    state: debug,
    lastAction: debug.lastAction
  }), React.createElement(TaskDescription, {
    description: taskDescription
  }), React.createElement(ClassAdder, {
    onClassAdd: onClassAdd
  }), labelImages && React.createElement(TagsSidebarBox, {
    currentImage: currentImage,
    imageClsList: imageClsList,
    imageTagList: imageTagList,
    onChangeImage: onChangeImage,
    expandedByDefault: true
  }), React.createElement(ImageSelector, {
    onSelect: onSelectImage,
    images: images
  }), React.createElement(RegionSelector, {
    regions: regions,
    onSelectRegion: onSelectRegion,
    onChangeRegion: onChangeRegion,
    onDeleteRegion: onDeleteRegion
  }), React.createElement(History, {
    history: history,
    onRestoreHistory: function onRestoreHistory() {
      return _onRestoreHistory();
    }
  }));
});