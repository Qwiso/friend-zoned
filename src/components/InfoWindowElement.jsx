import React, { Component } from 'react'

export class InfoWindowElement extends Component {
    state = this.props.foo

    render() { 
        return (
            <div>
                <h4>{this.state.name}</h4>
            </div>
        )
    }
}