import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

import { HelpWindow } from './components/HelpWindow'
import { SiteNavigation } from './components/SiteNavigation'
import { MapToolbar } from './components/MapToolbar'
import MapView from "./components/MapView"
import { User } from "./components/User"

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
    helpWindowVisible: true,
    leftSidebarVisible: true,
    rightSidebarVisible: true
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

  actionButtonMouseEnter = (a) => {
    a.currentTarget.classList.add("bg-info")
  }

  actionButtonMouseLeave = (a) => {
    a.currentTarget.classList.remove("bg-info")
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <section name="content">
            <div className="container-fluid p-0">
              <Switch>
                <AuthRoute exact path="/" component={MapView} />
                <AuthRoute path="/profile" component={User} />
              </Switch>
            </div>
          </section>
          <section name="actionBar" className="d-block">
            <div className="container-fluid fixed-bottom bg-dark" style={{height: "46px"}}>
              <div className="row d-flex justify-content-around text-center">
                <div style={{cursor: "pointer"}} onClick={this.toggleLeftSidebar} onMouseEnter={this.actionButtonMouseEnter} onMouseLeave={this.actionButtonMouseLeave} className="col"><i className="fas fa-lg fa-list p-3 text-white"></i></div>
                <div style={{cursor: "pointer"}} onClick={this.toggleHelpWindow} onMouseEnter={this.actionButtonMouseEnter} onMouseLeave={this.actionButtonMouseLeave} className="col"><i className="fas fa-lg fa-question p-3 text-white"></i></div>
                <div style={{cursor: "pointer"}} onClick={this.toggleRightSidebar} onMouseEnter={this.actionButtonMouseEnter} onMouseLeave={this.actionButtonMouseLeave} className="col"><i className="fas fa-lg fa-list fa-flip-horizontal p-3 text-white"></i></div>
              </div>
            </div>
          </section>
          <HelpWindow visible={this.state.helpWindowVisible} />
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
