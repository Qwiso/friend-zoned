import React, { Component } from 'react'

export class MarkerEditor extends Component {

    // TODO figure out why this 
    // shouldComponentUpdate() {
    //     if (this.props.marker) return true
    //     return false
    // }

    onFillColorChange = () => {}
    onFillOpacityChange = () => {}
    onStrokeColorChange = () => {}
    onStrokeWeightChange = () => {}

    render() {
        console.log(this.state)
        return <div></div>

        return (
            <div className="row">
                <div className="col m-2">
                    <h3>{this.state.name}</h3>
                    <p>{this.state.description}</p>
                    <input type="color" />

                    <input className="form-control" type="color" name="fillColor" value={this.state.icon.fillColor} onChange={this.onFillColorChange} />
                    <input className="form-control" type="range" name="fillOpacity" value={this.state.icon.fillOpacity} min="0" max="1" step="0.01" onChange={this.onFillOpacityChange} />

                    <input className="form-control" type="color" name="strokeColor" value={this.state.icon.strokeColor} onChange={this.onStrokeColorChange} />
                    <input className="form-control" type="range" name="strokeWeight" value={this.state.icon.strokeWeight} min="0" max="5" step="1" onChange={this.onStrokeWeightChange} />
                </div>
            </div>
        )
    }
}