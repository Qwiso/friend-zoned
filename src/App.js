import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

import { SiteNavigation } from './components/SiteNavigation'
import { MapToolbar } from './components/MapToolbar'
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
  const finalProps = Object.assign({}, ...rest)
  return (
    React.createElement(component, finalProps)
  )
}

class App extends Component {
  state = {
    helpWindowVisible: false,
    leftSidebarVisible: false,
    rightSidebarVisible: false
  }

  toggleLeftSidebar = () => {
    this.setState({
      leftSidebarVisible: !this.state.leftSidebarVisible
    })
  }

  toggleRightSidebar = () => {
    this.setState({
      rightSidebarVisible: !this.state.rightSidebarVisible
    })
  }

  toggleHelpWindow = () => {
    this.setState({
      helpWindowVisible: !this.state.helpWindowVisible
    })
  }

  render() {
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
                <div onClick={this.toggleLeftSidebar} activeclass="bg-info" className="col"><i className="fas fa-lg fa-bars p-3 text-white"></i></div>
                <div onClick={this.toggleHelpWindow} activeclass="bg-info" className="col"><i className="fas fa-lg fa-question p-3 text-white"></i></div>
                <div onClick={this.toggleRightSidebar} activeclass="bg-info" className="col"><i className="fas fa-lg fa-bars p-3 text-white"></i></div>
              </div>
            </div>
          </section>
          <Sidebar visible={this.state.leftSidebarVisible} side="left">
            <SiteNavigation />
          </Sidebar>
          <Sidebar visible={this.state.rightSidebarVisible} side="right">
            <MapToolbar />
          </Sidebar>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
