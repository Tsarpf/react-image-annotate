import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Survey from "material-survey/components/Survey";
import { useSettings } from "../SettingsProvider";
export default (function (_ref) {
  var open = _ref.open,
      onClose = _ref.onClose;
  var settings = useSettings();
  return React.createElement(Dialog, {
    open: open,
    onClose: onClose
  }, React.createElement(DialogTitle, null, "Settings"), React.createElement(DialogContent, {
    style: {
      minWidth: 400
    }
  }, React.createElement(Survey, {
    variant: "flat",
    noActions: true,
    defaultAnswers: settings,
    onQuestionChange: function onQuestionChange(q, a, answers) {
      return settings.changeSetting(q, a);
    },
    form: {
      questions: [{
        type: "boolean",
        title: "Show Crosshairs",
        name: "showCrosshairs"
      }]
    }
  })), React.createElement(DialogActions, null, React.createElement(Button, {
    onClick: onClose
  }, "Close")));
});