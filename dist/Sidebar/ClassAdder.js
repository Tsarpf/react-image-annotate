import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React from "react";
import SidebarBoxContainer from "../SidebarBoxContainer";
import DescriptionIcon from "@material-ui/icons/Description";
import { makeStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors"; //import Markdown from "react-markdown"
//const useStyles = makeStyles({
//})

var ClassAdder =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ClassAdder, _React$Component);

  function ClassAdder(props) {
    var _this;

    _classCallCheck(this, ClassAdder);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ClassAdder).call(this, props));

    _this.onChange = function (e) {
      _this.setState({
        val: e.target.value
      });
    };

    _this.state = {
      val: ''
    };
    return _this;
  }

  _createClass(ClassAdder, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(SidebarBoxContainer, {
        title: "Add new class",
        icon: React.createElement(DescriptionIcon, {
          style: {
            color: grey[700]
          }
        }),
        expandedByDefault: true
      }, React.createElement("input", {
        type: "text",
        placeholder: "new class name",
        onChange: this.onChange,
        value: this.state.val
      }), React.createElement("button", {
        onClick: function onClick() {
          return _this2.props.onClassAdd(_this2.state.val) || _this2.setState({
            val: ''
          });
        }
      }, "Add new"));
    }
  }]);

  return ClassAdder;
}(React.Component); //export default ({ onClassAdd }) => {
//}


export default ClassAdder;