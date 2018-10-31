import React, { Component } from 'react'

import withAuthorization from './auth/withAuthorization'

import MapView from './map/MapView'

class MainMap extends Component {
    state = {  }
    render() { 
        return <MapView />
    }
}

const authCondition = (authUser) => !!authUser
export default withAuthorization(authCondition)(MainMap)
