import React, { Component } from 'react'
import { Map, Marker, InfoWindow, GoogleApiWrapper } from 'google-maps-react'
import { getMarkerIconByName } from './MarkerIcons'
import { testing } from '../MapStyles'

class MapView extends Component {
    state = {
        currentMarkerIcon: null,
        markerIcons: getMarkerIconByName(['map-pin','glasses']),
        mapStyle: testing,
        markers: [],
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
    }

    onInfoWindowClose = () => {
        this.setState({
            activeMarker: null,
            showingInfoWindow: false
        })
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
            return <Marker draggable={true} name={index} onClick={this.onMarkerClick} key={index} position={marker} animation={window.google.maps.Animation.DROP} icon={this.state.markerIcons[0]}/>
        })

        return (
            <Map
                style={{marginBottom: 46}}
                styles={this.state.mapStyle}
                onClick={this.onMapClicked}
                google={this.props.google}
                zoom={10}
                initialCenter={{
                    lat: 33.83008972168741,
                    lng: -84.35267661111448
                }}>

                {markerRender}

                <InfoWindow
                    onClose={this.onInfoWindowClose}
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
