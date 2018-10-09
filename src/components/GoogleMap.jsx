import React, { Component } from 'react'
import { Map, Marker, InfoWindow, GoogleApiWrapper } from 'google-maps-react'
import { faMapPin } from '@fortawesome/free-solid-svg-icons'
const foo = faMapPin
const icon = {
    path: foo.icon[4],
    scale: 0.075,
    strokeColor: '#000',
    strokeWeight: 1,
    fillColor: '#111',
    fillOpacity: 0.5,
    anchor: { x: foo.icon[0]/2, y: foo.icon[1] }
}

class MapView extends Component {
    state = {
        markers: [],
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
    }

    onMarkerClick = (a, b, e) => {
        this.setState({
            selectedPlace: a,
            activeMarker: b,
            showingInfoWindow: true
        })
    }

    onMapClicked = (a, b, e) => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        } else {
            this.setState({
                markers: [...this.state.markers, {lat:e.latLng.lat(), lng:e.latLng.lng()}]
            })
        }
    }

    render() {
                
        let markerRender = this.state.markers.map((marker, index) => {
            return <Marker draggable={true} name={index} onClick={this.onMarkerClick} key={index} position={marker} animation={window.google.maps.Animation.DROP} icon={icon}/>
        })

        return (
            <Map
                onClick={this.onMapClicked}
                google={this.props.google} 
                zoom={8}
                initialCenter={{
                    lat: 33.83008972168741,
                    lng: -84.35267661111448 
                }}>

                {markerRender}

                <InfoWindow 
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}>
                    <h1>{this.state.selectedPlace.name}</h1>
                </InfoWindow>
            </Map>
        )
    }
}


export default GoogleApiWrapper({
    apiKey: 'AIzaSyCYHkj8sSYIxtHm_guGKtkxqJTRTPF4luE'
})(MapView)
