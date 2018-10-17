import React, { Component } from 'react'
import '../../css/helpwindow.css'

export class HelpWindow extends Component {
    state = {
        visible: this.props.visible
    }

    render() { 
        return (
            <section name="helpwindow">
                <div style={{backgroundColor: "rgba(0, 0, 0, 0.33)"}} className={this.props.visible ? "transition-1s position-absolute w-100 h-100 d-flex justify-content-center" : "d-none"}>
                    <div className="mx-3 py-2 px-3 col-md-6 h-50 my-auto bg-dark text-white rounded">
                        {this.props.children}
                    </div>
                </div>
            </section>
        )
    }
}