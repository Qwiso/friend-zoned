import React, { Component } from 'react';

export class SiteNavigation extends Component {
    state = {  }
    
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
            <div>
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
