import React, { Component } from 'react'
import '../css/sidebar.css'

class Sidebar extends Component {
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
        return (
            <div style={{width: "150px", left: this.props.visible ? '0px' : '-150px'}} className={"transition-1s bg-dark text-white h-100 d-inline-block position-fixed"}>
                {/* <h3 className="text-center">Controls</h3> */}
                {this.makeButton({
                    faIcon: "fa-map",
                    text: "Map",
                    route: "/"
                })}
                {this.makeButton({
                    faIcon: "fa-user",
                    text: "Profile",
                    route: "/profile"
                })}
            </div>
        )
    }
}
 
export default Sidebar