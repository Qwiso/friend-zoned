import React, { Component } from 'react'
import withAuthorization from './auth/withAuthorization'
import MapView from './map/MapView'

class Main extends Component {
    render() { 
        return <MapView user={this.props.user} />
    }
}

const authCondition = (authUser) => !!authUser
export default withAuthorization(authCondition)(Main)
