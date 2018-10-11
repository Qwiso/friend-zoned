import React, { Component } from 'react'
import '../css/sidebar.css'

export class Sidebar extends Component {
    state = {
        side: this.props.side || "left"
    }

    render() { 
        switch (this.state.side) {
            case "left":
            return (
                <section name="leftsidebar">
                    <div style={{width: "150px", maxWidth: "50%", left: this.props.visible ? '0px' : '-150px'}} className={"transition-1s bg-dark text-white h-100 d-inline-block position-fixed"}>
                        {this.props.children}
                    </div>
                </section>
            )
            case "right":
            return (
                <section name="rightsidebar">
                    <div style={{width: "150px", maxWidth: "50%", right: this.props.visible ? '0px' : '-150px'}} className={"transition-1s bg-dark text-white h-100 d-inline-block position-fixed"}>
                        {this.props.children}
                    </div>
                </section>
            )
            default:
            return null
        }
        
    }
}