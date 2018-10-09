import React, { Component } from 'react'
import { MapController } from '../js/MapController'

export class GoogleMap extends Component {
    state = {

    }

    componentDidMount() {
        this.setState({
            map_height: window.innerHeight - 45
        })
        new MapController()
        window.addEventListener('map_overlay_drawn', function(e){
            console.log(e)
        })
        window.addEventListener('map_overlay_click', function(e){
            console.log(e)
        })
        window.addEventListener('map_overlay_rightclick', function(e){
            console.log(e)
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