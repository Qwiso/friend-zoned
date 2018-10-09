import React, { Component } from 'react'

export class GoogleMap extends Component {
    state = {
        
    }

    componentDidMount() {
        this.setState({
            map_height: window.innerHeight - 45
        })
    }

    render() { 
        return (
            <div className="row">
                <div id="map" style={{width: "100vw", height: this.state.map_height}}></div>
            </div>
        )
    }
}