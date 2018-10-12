import React, { Component } from 'react'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'
import { getMarkerSVGByName } from './MarkerIcons'
import { testing } from '../MapStyles'

import { MarkerEditor } from './MarkerEditor'
import { HelpWindow } from './HelpWindow'
import { MapToolbar } from './MapToolbar'
import { Sidebar } from './Sidebar'
import { QMarker } from '../models/QMarker'

class MapView extends Component {
    state = {
        mapStyle: testing,
        markerEditorVisible: false,
        mapToolbarVisible: true,
        currentMarkerIconName: 'map-pin',
        currentMarkerSVG: getMarkerSVGByName('map-pin'),
        userMarkers: [],
        activeMarker: null,
        placeMarker: false
    }

    //#region
    toggleMapToolbar = () => {
        this.setState({
            mapToolbarVisible: !this.state.mapToolbarVisible
        })
    }

    toggleHelpWindow = () => {
        this.setState({
            helpWindowVisible: !this.state.helpWindowVisible
        })
    }

    actionButtonMouseEnter = (a) => {
        a.currentTarget.classList.add("bg-info")
    }

    actionButtonMouseLeave = (a) => {
        a.currentTarget.classList.remove("bg-info")
    }
    //#endregion

    onMarkerClick = (a, b, e) => {
        this.setState({
            activeMarker: a
        })
    }

    onMapClicked = (a, b, e) => {
        if (this.state.placeMarker) {
            let newMarker = new QMarker({
                name: "new marker",
                description: "",
                position: {
                    lat: e.latLng.lat(),
                    lng: e.latLng.lng()
                },
                iconName: this.state.currentMarkerIconName,
                iconSVG: this.state.currentMarkerSVG
            })
            this.setState({
                placeMarker: false,
                userMarkers: [...this.state.userMarkers, newMarker]
            })
        } else {
            this.setState({
                activeMarker: null
            })
        }
    }

    toolbarIconClicked = (e) => {
        this.setState({
            placeMarker: true,
            currentMarkerIconName: e.currentTarget.dataset.iconName,
            currentMarkerSVG: getMarkerSVGByName(e.currentTarget.dataset.iconName),
        })
    }

    render() {
        let markerRender = this.state.userMarkers.map((marker, index) => {
            return <Marker
                key={index}
                name={index}
                position={marker.position}
                icon={marker.iconSVG}
                animation={window.google.maps.Animation.DROP}
                onClick={this.onMarkerClick}
            />
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
                </Map>

                <section name="actionBar" className="d-block">
                    <div className="container-fluid p-0 fixed-bottom bg-dark" style={{height: "46px"}}>
                        <div className="d-flex justify-content-around text-center">
                            {/* <div style={{cursor: "pointer"}} onClick={this.toggleLeftSidebar} onMouseEnter={this.actionButtonMouseEnter} onMouseLeave={this.actionButtonMouseLeave} className="col"><i className="fas fa-lg fa-list p-3 text-white"></i></div> */}
                            <div style={{cursor: "pointer"}} onClick={this.toggleHelpWindow} onMouseEnter={this.actionButtonMouseEnter} onMouseLeave={this.actionButtonMouseLeave} className="col"><i className="fas fa-lg fa-question p-3 text-white"></i></div>
                            <div style={{cursor: "pointer"}} onClick={this.toggleMapToolbar} onMouseEnter={this.actionButtonMouseEnter} onMouseLeave={this.actionButtonMouseLeave} className="col"><i className="fas fa-lg fa-list fa-flip-horizontal p-3 text-white"></i></div>
                        </div>
                    </div>
                </section>

                <HelpWindow visible={this.state.helpWindowVisible} />

                <Sidebar visible={this.state.markerEditorVisible} side="left" size={"300px"}>
                    <MarkerEditor marker={this.state.selectedMarker} />
                </Sidebar>
                
                <Sidebar visible={this.state.mapToolbarVisible} side="right">
                    <MapToolbar onIconClick={this.toolbarIconClicked} placeMarker={this.state.placeMarker} />
                </Sidebar>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCYHkj8sSYIxtHm_guGKtkxqJTRTPF4luE'
})(MapView)
