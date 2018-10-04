import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

import { GoogleMap } from "./components/GoogleMap"
import { Profile } from "./components/Profile"
import { Explore } from "./components/Explore"

class App extends Component {
  render() {
    return (
      <div>
        <section name="content">
        <div className="container-fluid">
          <Route path="/map" component={GoogleMap} />
          <Route path="/user" component={Profile} />
          <Route path="/explore" component={Explore} />
        </div>
        </section>
        <section name="nav-bar" className="d-block">
          <div className="container-fluid fixed-bottom bg-secondary">
            <div className="row d-flex justify-content-around">
              <Link to="/map"><i className="fas fa-lg fa-map-marked text-white p-3"></i></Link>
              <Link to="/user"><i className="fas fa-lg fa-users text-white p-3"></i></Link>
              <Link to="/explore"><i className="fas fa-lg fa-search text-white p-3"></i></Link>
            </div>
          </div>
        </section>
      </div> 
    )
  }
}

export default App;
