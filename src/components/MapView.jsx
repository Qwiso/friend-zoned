import React, { Component } from 'react'
import { Map, Marker, InfoWindow, GoogleApiWrapper } from 'google-maps-react'
import { getMarkerSVGByName } from './MarkerIcons'
import { testing } from '../MapStyles'

import { MarkerEditor } from './MarkerEditor'
import { HelpWindow } from './HelpWindow'
// import { SiteNavigation } from './SiteNavigation'
import { MapToolbar } from './MapToolbar'
import { Sidebar } from './Sidebar'
import { QMarker } from '../models/QMarker';

class MapView extends Component {
    state = {
        helpWindowVisible: false,
        leftSidebarVisible: true,
        markerEditorVisible: false,
        currentMarkerIconName: 'map-pin',
        currentMarkerSVG: getMarkerSVGByName('map-pin'),
        mapStyle: testing,
        markers: [],
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: null
    }

    toggleLeftSidebar = () => {
        this.setState({
            leftSidebarVisible: !this.state.leftSidebarVisible
        })
    }

    toggleRightSidebar = () => {
        this.setState({
            rightSidebarVisible: !this.state.rightSidebarVisible
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

    onInfoWindowClose = () => {
        this.setState({
            selectedPlace: null,
            activeMarker: null,
            showingInfoWindow: false
        })
    }

    onMarkerClick = (a, b, e) => {
        this.setState({
            selectedPlace: a,
            activeMarker: b,
            showingInfoWindow: true,
            markerEditorVisible: true
        })
    }

    onMapClicked = (a, b, e) => {
        if (this.state.showingInfoWindow || this.state.markerEditorVisible) {
            this.setState({
                showingInfoWindow: false,
                markerEditorVisible: false,
                selectedPlace: null,
                activeMarker: null
            })
        } else {
            let newMarker = new QMarker({
                name: "new marker",
                description: "",
                position: {
                    lat: e.latLng.lat(),
                    lng: e.latLng.lng()
                },
                markerIconName: this.state.currentMarkerIconName,
                markerSVG: this.state.currentMarkerSVG
            })
            this.setState({
                selectedPlace: null,
                markers: [...this.state.markers, newMarker]
            })
        }
    }

    toolbarIconClicked = (e) => {
        this.setState({
            currentMarkerIconName: e.currentTarget.dataset.iconName,
            currentMarkerSVG: getMarkerSVGByName(e.currentTarget.dataset.iconName),
        })
    }

    render() {
        let markerRender = this.state.markers.map((marker, index) => {
            return <Marker
                key={index}
                name={index}
                position={marker.position}
                icon={marker.markerSVG}
                draggable={true}
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

                    {/* <InfoWindow  onClose={this.onInfoWindowClose} marker={this.state.activeMarker} visible={this.state.showingInfoWindow}>
                        <InfoWindowElement foo={this.state.selectedPlace} />
                    </InfoWindow> */}
                </Map>
                <section name="actionBar" className="d-block">
                    <div className="container-fluid p-0 fixed-bottom bg-dark" style={{height: "46px"}}>
                        <div className="d-flex justify-content-around text-center">
                            {/* <div style={{cursor: "pointer"}} onClick={this.toggleLeftSidebar} onMouseEnter={this.actionButtonMouseEnter} onMouseLeave={this.actionButtonMouseLeave} className="col"><i className="fas fa-lg fa-list p-3 text-white"></i></div> */}
                            <div style={{cursor: "pointer"}} onClick={this.toggleHelpWindow} onMouseEnter={this.actionButtonMouseEnter} onMouseLeave={this.actionButtonMouseLeave} className="col"><i className="fas fa-lg fa-question p-3 text-white"></i></div>
                            <div style={{cursor: "pointer"}} onClick={this.toggleRightSidebar} onMouseEnter={this.actionButtonMouseEnter} onMouseLeave={this.actionButtonMouseLeave} className="col"><i className="fas fa-lg fa-list fa-flip-horizontal p-3 text-white"></i></div>
                        </div>
                    </div>
                </section>
                <HelpWindow visible={this.state.helpWindowVisible} />
                <Sidebar visible={this.state.markerEditorVisible} side="left" size={"300px"}>
                    <MarkerEditor marker={this.state.selectedPlace} />
                </Sidebar>
                <Sidebar visible={this.state.rightSidebarVisible} side="right">
                    <MapToolbar onIconClick={this.toolbarIconClicked} />
                </Sidebar>
            </div>
        )
    }
}


export default GoogleApiWrapper({
    apiKey: 'AIzaSyCYHkj8sSYIxtHm_guGKtkxqJTRTPF4luE'
})(MapView)
