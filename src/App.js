import React, { Component } from 'react'
import { Route, NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

import { GoogleMap } from "./components/GoogleMap"
import { Profile } from "./components/Profile"
import { Explore } from "./components/Explore"

const style = {
  height: "46px"
}

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
        <section name="navbar" className="d-block">
          <div className="container-fluid fixed-bottom bg-dark" style={style}>
            <div className="row d-flex justify-content-around text-center">
              <NavLink to="/map" activeClassName="bg-info" className="col"><i className="fas fa-lg fa-map-marked p-3 text-white"></i></NavLink>
              <NavLink to="/user" activeClassName="bg-info" className="col"><i className="fas fa-lg fa-users p-3 text-white"></i></NavLink>
              <NavLink to="/explore" activeClassName="bg-info" className="col"><i className="fas fa-lg fa-search p-3 text-white"></i></NavLink>
            </div>
          </div>
        </section>
      </div> 
    )
  }
}

export default App;
