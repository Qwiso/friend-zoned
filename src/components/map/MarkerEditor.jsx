import React, { Component } from 'react'

export class MarkerEditor extends Component {

    onNameChange = this.props.onNameChange
    onDescriptionChange = this.props.onDescriptionChange
    onFillColorChange = this.props.onFillColorChange
    onFillOpacityChange = this.props.onFillOpacityChange
    onStrokeColorChange = this.props.onStrokeColorChange
    onStrokeWeightChange = this.props.onStrokeWeightChange

    render() {
        if (!this.props.activeMarker) return null
        let marker = this.props.activeMarker
        return (
            <div className="row">
                <div className="col m-2">
                    <input className="form-control mb-2" type="text" name="markerName" placeholder="Marker Name" value={marker.name} onChange={(e) => this.onNameChange(e)} />
                    <input className="form-control mb-2" type="text" name="markerDescription" placeholder="Description" value={marker.description} onChange={(e) => this.onDescriptionChange(e)} />

                    <input className="form-control mb-2" type="color" name="markerFillColor" value={marker.iconSVG.fillColor} onChange={(e) => this.onFillColorChange(e)} />
                    <input className="form-control mb-2" type="range" name="markerFillOpacity" value={marker.iconSVG.fillOpacity} min="0" max="1" step="0.01" onChange={(e) => this.onFillOpacityChange(e)} />

                    <input className="form-control mb-2" type="color" name="markerStrokeColor" value={marker.iconSVG.strokeColor} onChange={(e) => this.onStrokeColorChange(e)} />
                    <input className="form-control mb-2" type="range" name="markerStrokeWeight" value={marker.iconSVG.strokeWeight} min="0" max="5" step="1" onChange={(e) => this.onStrokeWeightChange(e)} />

                    <button className="btn btn-danger form-control mb-2" type="button" name="markerDelete" onClick={(e) => this.props.onMarkerDelete(e)}>Delete Marker</button>
                </div>
            </div>
        )
    }
}