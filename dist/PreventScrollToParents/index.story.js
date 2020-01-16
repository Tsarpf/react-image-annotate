import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import RemoveScrollOnChildren from "./";
storiesOf("RemoveScrollOnChildren", module).add("Basic", function () {
  return React.createElement("div", {
    style: {
      width: "100vh",
      textAlign: "center",
      height: "200vh"
    }
  }, React.createElement(RemoveScrollOnChildren, null, React.createElement("div", {
    style: {
      display: "inline-block",
      width: 100,
      height: 100,
      backgroundColor: "red"
    }
  })));
});