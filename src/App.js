import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Redirect, NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

import { Main } from "./components/Main"
import MapView from "./components/GoogleMap"
import { User } from "./components/User"
import { Explore } from "./components/Explore"

const checkAuth = () => {
  // TODO ping server to check or refresh user stuff
  return true
}

const AuthRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    checkAuth() ?
    <Component {...props} /> :
    <Redirect to={{pathname: '/login'}} />
  )} />
)

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <section name="content">
            <div className="container-fluid">
            <Switch>
              <AuthRoute exact path="/" component={Main} />
              <AuthRoute path="/map" component={MapView} />
              <AuthRoute path="/user" component={User} />
              <AuthRoute path="/explore" component={Explore} />
            </Switch>
            </div>
          </section>
          <section name="navbar" className="d-block">
            <div className="container-fluid fixed-bottom bg-dark" style={{height: "46px"}}>
              <div className="row d-flex justify-content-around text-center">
                <NavLink to="/map" activeClassName="bg-info" className="col"><i className="fas fa-lg fa-map-marked p-3 text-white"></i></NavLink>
                <NavLink to="/user" activeClassName="bg-info" className="col"><i className="fas fa-lg fa-users p-3 text-white"></i></NavLink>
                <NavLink to="/explore" activeClassName="bg-info" className="col"><i className="fas fa-lg fa-search p-3 text-white"></i></NavLink>
              </div>
            </div>
          </section>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
