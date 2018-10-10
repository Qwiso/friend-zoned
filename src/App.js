import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

import MapView from "./components/MapView"
import { User } from "./components/User"
import { Explore } from "./components/Explore"

const checkAuth = () => {
  return true
}

const AuthRoute = ({ component, ...rest }) => (
  <Route {...rest} render={props => (
    checkAuth() ?
    // <Component {...props} /> :
    renderMergedProps(component, props, rest) :
    <Redirect to={{pathname: '/login'}} />
  )} />
)

const renderMergedProps = (component, ...rest) => {
  const finalProps = Object.assign({}, ...rest);
  return (
    React.createElement(component, finalProps)
  );
}

class App extends Component {
  state = {
    sidebarVisible: false
  }

  toggleSidebar = () => {
    this.setState({
      sidebarVisible: !this.state.sidebarVisible
    })
  }

  render() {
    let sidebarVisible = this.state.sidebarVisible
    return (
      <BrowserRouter>
        <div>
          <section name="content">
            <div className="container-fluid p-0">
              <Switch>
                <AuthRoute exact path="/" component={MapView} />
                <AuthRoute path="/user" component={User} />
                <AuthRoute path="/explore" component={Explore} />
              </Switch>
            </div>
          </section>
          <section name="actionBar" className="d-block">
            <div className="container-fluid fixed-bottom bg-dark" style={{height: "46px"}}>
              <div className="row d-flex justify-content-around text-center">
                <div onClick={this.toggleSidebar} activeclass="bg-info" className="col"><i className="fas fa-lg fa-bars p-3 text-white"></i></div>
                <div activeclass="bg-info" className="col"><i className="fas fa-lg fa-question p-3 text-white"></i></div>
                <div activeclass="bg-info" className="col"><i className="fas fa-lg fa-question p-3 text-white"></i></div>
              </div>
            </div>
          </section>
          <Sidebar visible={sidebarVisible} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
