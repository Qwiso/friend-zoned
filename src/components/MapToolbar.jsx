import React, { Component } from 'react'

export class MapToolbar extends Component {
    makeIcons(iconNames) {
        let stack = []

        iconNames.forEach((value, key) => {
            stack.push(<div onClick={this.props.onIconClick} key={key} data-icon-name={value} className="col-6 mt-3 py-3 border"><i className={"fa fa-fw fa-2x fa-" + value}></i></div>)
        })

        return stack
    }

    render() {
        let icons = this.makeIcons(['map-pin','map-marker','flag','thumbtack','beer','coffee','utensils','birthday-cake','graduation-cap','university','home','info','music','plane','bus','car'])

        return (
            <div className="d-flex flex-wrap text-center">
                {icons}
            </div>
        )
    }
}