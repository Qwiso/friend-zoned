import React, { Component } from 'react'
import { Map, Marker, InfoWindow, GoogleApiWrapper } from 'google-maps-react'
import { getMarkerSVGByName } from './MarkerIcons'
import { testing } from '../MapStyles'

import { HelpWindow } from './HelpWindow'
import { SiteNavigation } from './SiteNavigation'
import { MapToolbar } from './MapToolbar'
import { Sidebar } from './Sidebar'

class MapView extends Component {
    state = {
        helpWindowVisible: false,
        leftSidebarVisible: true,
        rightSidebarVisible: true,
        currentMarkerSVG: getMarkerSVGByName('map-pin'),
        mapStyle: testing,
        markers: [],
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
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
                markers: [...this.state.markers, {icon: this.state.currentMarkerSVG, lat:e.latLng.lat(), lng:e.latLng.lng()}]
            })
        }
    }

    toolbarIconClicked = (e) => {
        this.setState({
            currentMarkerSVG: getMarkerSVGByName(e.currentTarget.dataset.iconName),
        })
    }

    render() {
        let markerRender = this.state.markers.map((marker, index) => {
            return <Marker draggable={true} name={index} onClick={this.onMarkerClick} key={index} position={marker} animation={window.google.maps.Animation.DROP} icon={marker.icon}/>
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
                        onClose={this.onInfoWindowClose}
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                        <h1>{this.state.selectedPlace.name}</h1>
                    </InfoWindow>
                </Map>
                <section name="actionBar" className="d-block">
                    <div className="container-fluid fixed-bottom bg-dark" style={{height: "46px"}}>
                        <div className="d-flex justify-content-around text-center">
                            {/* <div style={{cursor: "pointer"}} onClick={this.toggleLeftSidebar} onMouseEnter={this.actionButtonMouseEnter} onMouseLeave={this.actionButtonMouseLeave} className="col"><i className="fas fa-lg fa-list p-3 text-white"></i></div> */}
                            <div style={{cursor: "pointer"}} onClick={this.toggleHelpWindow} onMouseEnter={this.actionButtonMouseEnter} onMouseLeave={this.actionButtonMouseLeave} className="col"><i className="fas fa-lg fa-question p-3 text-white"></i></div>
                            <div style={{cursor: "pointer"}} onClick={this.toggleRightSidebar} onMouseEnter={this.actionButtonMouseEnter} onMouseLeave={this.actionButtonMouseLeave} className="col"><i className="fas fa-lg fa-list fa-flip-horizontal p-3 text-white"></i></div>
                        </div>
                    </div>
                </section>
                <HelpWindow visible={this.state.helpWindowVisible} />
                {/* <Sidebar visible={this.state.leftSidebarVisible} side="left">
                    <SiteNavigation />
                </Sidebar> */}
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
