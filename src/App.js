import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

import MapView from "./components/MapView"
// import { User } from "./components/User"
// import { Explore } from "./components/Explore"

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
    leftSidebarVisible: true
  }

  onToggleLeftSidebar = () => {
    this.setState({
      leftSidebarVisible: !this.state.leftSidebarVisible
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <section name="content">
            <div className="container-fluid p-0">
              <AuthRoute exact path="/" component={MapView} onToggleLeftSidebar={this.onToggleLeftSidebar} />
            {/* <Switch>
              <AuthRoute exact path="/" component={Main} />
              <AuthRoute path="/map" component={MapView} />
              <AuthRoute path="/user" component={User} />
              <AuthRoute path="/explore" component={Explore} />
            </Switch> */}
            </div>
          </section>
          <Sidebar />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
