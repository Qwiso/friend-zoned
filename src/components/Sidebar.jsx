import React, { Component } from 'react'
import '../css/navbar.css'

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
            <div className={this.props.visible ? "bg-dark text-white w-25 h-100 d-inline-block position-fixed" : "d-none"}>
                <h2 className="text-center">Controls</h2>
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