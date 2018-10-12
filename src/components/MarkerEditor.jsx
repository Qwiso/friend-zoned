import React, { Component } from 'react'

export class MarkerEditor extends Component {

    onNameChange = this.props.onNameChange
    onDescriptionChange = this.props.onDescriptionChange
    onFillColorChange = this.props.onFillColorChange
    onFillOpacityChange = this.props.onFillOpacityChange
    onStrokeColorChange = this.props.onStrokeColorChange
    onStrokeWeightChange = this.props.onStrokeWeightChange

    render() {
        if (!this.props.activeMarker) return <div></div>
        let marker = this.props.activeMarker
        return (
            <div className="row">
                <div className="col m-2">
                    <h3>{marker.name}</h3>
                    <p>{marker.description}</p>

                    <input className="form-control" type="color" name="fillColor" value={marker.iconSVG.fillColor} onChange={(e) => this.onFillColorChange(e)} />
                    <input className="form-control" type="range" name="fillOpacity" value={marker.iconSVG.fillOpacity} min="0" max="1" step="0.01" onChange={(e) => this.onFillOpacityChange(e)} />

                    <input className="form-control" type="color" name="strokeColor" value={marker.iconSVG.strokeColor} onChange={(e) => this.onStrokeColorChange(e)} />
                    <input className="form-control" type="range" name="strokeWeight" value={marker.iconSVG.strokeWeight} min="0" max="5" step="1" onChange={(e) => this.onStrokeWeightChange(e)} />
                </div>
            </div>
        )
    }
}