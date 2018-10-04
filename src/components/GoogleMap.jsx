import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

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
                <Helmet>
                    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCYHkj8sSYIxtHm_guGKtkxqJTRTPF4luE&libraries=drawing&callback=initMap" defer></script>
                    <script src="/js/map.js"></script>
                </Helmet>
            </div>
        )
    }
}