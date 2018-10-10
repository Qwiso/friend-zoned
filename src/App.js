import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

import MapView from "./components/MapView"
// import { User } from "./components/User"
// import { Explore } from "./components/Explore"

const checkAuth = () => {
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
            <div className="container-fluid p-0">
              <AuthRoute exact path="/" component={MapView} />
            {/* <Switch>
              <AuthRoute exact path="/" component={Main} />
              <AuthRoute path="/map" component={MapView} />
              <AuthRoute path="/user" component={User} />
              <AuthRoute path="/explore" component={Explore} />
            </Switch> */}
            </div>
          </section>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
