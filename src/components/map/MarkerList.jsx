import React, { Component } from 'react'

class MarkerList extends Component {
    render() {
        let markerList = this.props.markers.map((a, b) => {
            return <i style={{cursor: "pointer"}} onClick={this.props.iconClicked} key={a.index} data-index={a.index} className={"mb-2 fa fa-fw fa-2x fa-" + a.iconName}></i>
        })

        let title = this.props.title
            ? this.props.title
            : !this.props.user.isAnonymous
                ? this.props.user.displayName.split(' ')[0] + "'s Markers"
                : "Log in with Facebook to save markers"

        return (
            <section name={this.props.title} className="p-2" >
                <p className='small text-center mb-2'>{title}</p>
                {markerList}
            </section>
        )
    }
}
 
export default MarkerList
