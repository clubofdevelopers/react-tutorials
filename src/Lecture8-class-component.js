import React, { Component } from "react";

export default class ClassComponent extends Component {
    render() {
        function InsideComponent() {
            return (
                <h1>This is InsideComponent</h1>
            )
        }
        return (
            <>
                <h1>Hello I'm class Component</h1>
                <InsideComponent />
                {InsideComponent()}
            </>
        )
    }
}