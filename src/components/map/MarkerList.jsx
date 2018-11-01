import React, { Component } from 'react'

class MarkerList extends Component {
    render() {
        let markerList = this.props.markers.map((a, b) => {
            return <i style={{cursor: "pointer"}} onClick={this.props.iconClicked} key={a.index} data-index={a.index} className={"fa fa-fw fa-2x fa-" + a.iconName}></i>
        })

        let username = !this.props.user.isAnonymous ? this.props.user.displayName.split(' ')[0] + "'s Markers" : "Log in with Facebook to save markers"

        return (
            <section name={this.props.title} >
                <p className='small text-center'>{username}</p>
                {markerList}
            </section>
        )
    }
}
 
export default MarkerList
