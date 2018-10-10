import React, { Component } from 'react'
import { Map, Marker, InfoWindow, GoogleApiWrapper } from 'google-maps-react'
import { faMapPin } from '@fortawesome/free-solid-svg-icons'
import { testing } from '../MapStyles'

const foo = faMapPin
const icon = {
    path: foo.icon[4],
    scale: 0.075,
    strokeColor: '#000',
    strokeWeight: 1,
    fillColor: '#fff',
    fillOpacity: 0.66,
    anchor: { x: foo.icon[0]/2, y: foo.icon[1] }
}

class MapView extends Component {
    state = {
        mapStyle: testing,
        markers: [],
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
    }

    onMarkerClick = (a, b, e) => {
        // a: icon, name, position
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
            <div>
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
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                        <h1>{this.state.selectedPlace.name}</h1>
                    </InfoWindow>
                </Map>
                <section name="actionBar" className="d-block">
                    <div className="container-fluid fixed-bottom bg-dark" style={{height: "46px"}}>
                        <div className="row d-flex justify-content-around text-center">
                            <div onClick={this.toggleLeftSidebar} activeclass="bg-info" className="col"><i className="fas fa-lg fa-map-marked p-3 text-white"></i></div>
                            <div onClick={this.toggleMarkerPlacement} activeclass="bg-info" className="col"><i className="fas fa-lg fa-users p-3 text-white"></i></div>
                            <div onClick={this.toggleRightSidebar} activeclass="bg-info" className="col"><i className="fas fa-lg fa-search p-3 text-white"></i></div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}


export default GoogleApiWrapper({
    apiKey: 'AIzaSyCYHkj8sSYIxtHm_guGKtkxqJTRTPF4luE'
})(MapView)
