import React, { Component } from 'react';

export class InfoWindowElement extends Component {
    state = {  }
    render() { 

        if (this.props.marker)
        {
            return (
                <h1>{this.props.marker.name}</h1>
            )
        } else {
            return (
                <h1>give me a name</h1>
            )
        }
    }
}