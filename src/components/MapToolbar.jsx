import React, { Component } from 'react'

export class MapToolbar extends Component {

    state = { }

    componentWillMount() {
        this.setState({
            availableIcons: this.makeIcons(['map-pin','map-marker','flag','thumbtack','beer','coffee','utensils','birthday-cake','graduation-cap','university','home','info','music','plane','bus','car'])
        })
    }

    makeIcons(iconNames) {
        let stack = []

        iconNames.forEach((value, key) => {
            let className = key === 0 ? "text-info col-6 mt-3 py-3 border" : "text-white col-6 mt-3 py-3 border"
            stack.push(<div onClick={this.markerIconClicked} key={key} data-icon-name={value} className={className}><i className={"fa fa-fw fa-2x fa-" + value}></i></div>)
        })

        return stack
    }

    markerIconClicked = (e) => {
        this.setState({
            selectedIcon: e.currentTarget
        })
        this.props.onIconClick(e)

        let oldIcon = window.document.querySelector('#markerIcons div:not(.text-white)')
        if (oldIcon)
        {
            oldIcon.classList.remove('text-info')
            oldIcon.classList.add('text-white')
        }
        e.currentTarget.classList.remove('text-white')
        e.currentTarget.classList.add('text-info')
    }

    render() {
        return (
            <div>
                <p className="pt-2 mb-0 text-center">Marker</p>
                <div id="markerIcons" className="d-flex flex-wrap text-center">
                    {this.state.availableIcons}
                </div>
                <div className="mt-3 btn btn-info btn-block">Save Map</div>
            </div>
        )
    }
}