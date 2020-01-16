// @flow

import React from "react"
import SidebarBoxContainer from "../SidebarBoxContainer"
import DescriptionIcon from "@material-ui/icons/Description"
import { makeStyles } from "@material-ui/core/styles"
import { grey } from "@material-ui/core/colors"
//import Markdown from "react-markdown"
//const useStyles = makeStyles({
//})


class ClassAdder extends React.Component {
    constructor(props) {
        super(props)
        this.state = {val: ''}
    }

    onChange = (e) => {
        this.setState({val: e.target.value})
    }
    render() {
        return (
            <SidebarBoxContainer
                title="Add new class"
                icon={<DescriptionIcon style={{ color: grey[700] }} />}
                expandedByDefault
            >
                <input type="text"
                       placeholder="new class name"
                       onChange={this.onChange}
                       value={this.state.val}/>
                <button onClick={() => this.props.onClassAdd(this.state.val) || this.setState({val: ''})}>
                    Add new
                </button>
            </SidebarBoxContainer>
        )

    }
}
//export default ({ onClassAdd }) => {
//}

export default ClassAdder
