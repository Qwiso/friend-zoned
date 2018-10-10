import React, { Component } from 'react'
import '../css/sidebar.css'

class Sidebar extends Component {
    state = {
        side: this.props.side || "left"
    }

    makeButton = ({faIcon, text, route}) => {
        return (
            <div className="nav-button">
                <a href={route}>
                    <div className="bg-dark p-2 border-bottom">
                        <div className="d-flex justify-content-center">
                            <i className={"p-2 fa fa-lg " + faIcon}></i>
                        </div>
                        <div className="d-flex justify-content-center">
                            {text}
                        </div>
                    </div>
                </a>
            </div>
        )
    }

    render() { 
        switch (this.state.side) {
            case "left":
            return (
                <section name="leftsidebar">
                    <div style={{width: "150px", left: this.props.visible ? '0px' : '-150px'}} className={"transition-1s bg-dark text-white h-100 d-inline-block position-fixed"}>
                        {this.props.children}
                    </div>
                </section>
            )
            case "right":
            return (
                <section name="rightsidebar">
                    <div style={{width: "150px", right: this.props.visible ? '0px' : '-150px'}} className={"transition-1s bg-dark text-white h-100 d-inline-block position-fixed"}>
                        {this.props.children}
                    </div>
                </section>
            )
            default:
            return null
        }
        
    }
}
 
export default Sidebar