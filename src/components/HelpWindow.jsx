import React, { Component } from 'react'
import '../css/helpwindow.css'

export class HelpWindow extends Component {
    state = {
        visible: this.props.visible
    }

    render() { 
        return (
            <section name="helpwindow">
                <div className="position-absolute container-fluid bg-fade">
                    <div className="row bg-white">

                    </div>
                </div>
            </section>
        )
    }
}