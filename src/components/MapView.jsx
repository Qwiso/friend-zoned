//#region imports
import React, { Component } from 'react'
import { Map, Marker, GoogleApiWrapper, InfoWindow } from 'google-maps-react'
import axios from 'axios'
import querystring from 'querystring'
import { getMarkerSVGByName } from './MarkerIcons'
import { testing } from '../MapStyles'

import { MarkerEditor } from './MarkerEditor'
import { HelpWindow } from './HelpWindow'
import { MapToolbar } from './MapToolbar'
import { Sidebar } from './Sidebar'
import { QMarker } from '../models/QMarker'
//#endregion

class MapView extends Component {
    state = {
        mapStyle: testing,
        markerEditorVisible: false,
        mapToolbarVisible: true,
        currentMarkerIconName: 'map-pin',
        currentMarkerSVG: getMarkerSVGByName('map-pin'),
        userMarkers: [],
        otherMarkers: [],
        activeMarker: null,
        placeMarker: false
    }

    componentWillMount() {
        if (this.props.match.params.id) {
            let url = 'http://localhost:3001/' + this.props.match.params.id
            if (this.props.match.params.others) {
                url += '/with/' + this.props.match.params.others
            }
            axios.get(url).then(res => {
                if (res.data.otherMarkers.length > 0) {
                    // console.log(res.data.otherMarkers)
                    // console.log('other markers available')
                    let otherMarkers = []
                    res.data.otherMarkers.forEach(data => {
                        let markers = JSON.parse(data.markers)
                        markers.forEach(marker => {
                            otherMarkers.push(marker)
                        })
                    })
                    this.setState({
                        otherMarkers: otherMarkers
                    })
                }
                console.log(res.data)
                this.setState({
                    userMarkers: JSON.parse(res.data.userMarkers.markers) || []
                })
            })
        }
    }

    //#region toggle events
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
            activeMarker: this.state.userMarkers[a.index],
            markerEditorVisible: true
        })
    }

    onOtherMarkerClick = (a, b, e) => {
        let iw = new InfoWindow({

        })
        console.log(iw)
    }

    onMapClicked = (a, b, e) => {
        if (this.state.placeMarker) {
            let newMarker = new QMarker({
                index: this.state.userMarkers.length,
                name: "new marker",
                description: "description",
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
                activeMarker: null,
                markerEditorVisible: false
            })
        }
    }

    toolbarIconClicked = (e) => {
        this.setState({
            markerEditorVisible: false,
            activeMarker: null,
            placeMarker: true,
            currentMarkerIconName: e.currentTarget.dataset.iconName,
            currentMarkerSVG: getMarkerSVGByName(e.currentTarget.dataset.iconName),
        })
    }

    saveMap = () => {
        let data = JSON.stringify(this.state.userMarkers)
        axios.post('http://localhost:3001', querystring.stringify({markers: data})).then((res) => {
            window.location.href = "http://localhost:3000/" + res.data
        })
    }

    // TODO get this logic working from within the MarkerEditor component
    //#region markerEditorEvents
    onMarkerNameChange = (e) => {
        let marker = this.state.activeMarker
        marker.name = e.currentTarget.value
        this.setState({
            activeMarker: marker
        })
    }

    onMarkerDescriptionChange = (e) => {
        let marker = this.state.activeMarker
        marker.description = e.currentTarget.value
        this.setState({
            activeMarker: marker
        })
    }

    onMarkerFillColorChange = (e) => {
        let marker = this.state.activeMarker
        marker.iconSVG.fillColor = e.currentTarget.value
        marker.shouldRender = true
        this.setState({
            activeMarker: marker
        })
    }

    onMarkerFillOpacityChange = (e) => {
        let marker = this.state.activeMarker
        marker.iconSVG.fillOpacity = parseFloat( e.currentTarget.value )
        let newUserMarkers = this.state.userMarkers
        marker.shouldRender = true
        this.setState({
            userMarkers: newUserMarkers,
            activeMarker: newUserMarkers[marker.index]
        })
    }

    onMarkerStrokeColorChange = (e) => {
        let marker = this.state.activeMarker
        marker.iconSVG.strokeColor = e.currentTarget.value
        marker.shouldRender = true
        this.setState({
            activeMarker: marker
        })
    }

    onMarkerStrokeWeightChange = (e) => {
        let marker = this.state.activeMarker
        marker.iconSVG.strokeWeight = parseInt( e.currentTarget.value )
        marker.shouldRender = true
        this.setState({
            activeMarker: marker
        })
    }
    //#endregion
    
    render() {
        let userMarkers = this.state.userMarkers.map((marker, index) => {
            let thing = <Marker
                key={index}
                index={index}
                name={marker.name}
                position={marker.position}
                icon={marker.iconSVG}
                animation={marker.shouldRender ? null : window.google.maps.Animation.DROP}
                onClick={this.onMarkerClick}
                draggable={true}
                shouldRender={marker.shouldRender}
            />
            marker.shouldRender = false
            return thing
        })

        let otherMarkers = this.state.otherMarkers.map((marker, index) => {
            let thing = <Marker
                key={index}
                index={index}
                name={marker.name}
                position={marker.position}
                icon={marker.iconSVG}
                onClick={this.onOtherMarkerClick}
            />
            marker.shouldRender = false
            return thing
        })

        return (
            <div>
                <Map
                    style={{transition: "0.5s", marginBottom: 46, marginRight: this.state.mapToolbarVisible ? 150 : 0}}
                    styles={this.state.mapStyle}
                    onClick={this.onMapClicked}
                    google={this.props.google}
                    zoom={10}
                    initialCenter={{
                        lat: 33.83008972168741,
                        lng: -84.35267661111448
                    }}>

                    {userMarkers}
                    {otherMarkers}
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
                    <MarkerEditor
                        activeMarker={this.state.activeMarker}
                        onNameChange={this.onMarkerNameChange}
                        onDescriptionChange={this.onMarkerDescriptionChange}
                        onFillColorChange={this.onMarkerFillColorChange}
                        onFillOpacityChange={this.onMarkerFillOpacityChange}
                        onStrokeColorChange={this.onMarkerStrokeColorChange}
                        onStrokeWeightChange={this.onMarkerStrokeWeightChange}
                    />
                </Sidebar>
                
                <Sidebar visible={this.state.mapToolbarVisible} side="right">
                    <MapToolbar onIconClick={this.toolbarIconClicked} onMapSave={this.saveMap} placeMarker={this.state.placeMarker} />
                </Sidebar>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCYHkj8sSYIxtHm_guGKtkxqJTRTPF4luE',
    LoadingContainer: () => <div></div>
})(MapView)
