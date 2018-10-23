import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import firebase from 'firebase'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

import MapView from './components/map/MapView'
import Login from './components/auth/Login'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID
}
firebase.initializeApp(firebaseConfig)

// const checkAuth = () => {
//   if (!this.state.user) return false
//   return true
// }

// const AuthRoute = ({ component, ...rest }) => (
//   <Route {...rest} render={props => (
//     checkAuth()
//     ? renderMergedProps(component, props, rest)
//     : <Login />
//   )} />
// )

// const renderMergedProps = (component, ...rest) => {
//   const finalProps = Object.assign({}, ...rest)
//   return (
//     React.createElement(component, finalProps)
//   )
// }

class App extends Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({
        user: user
      })
    })
  }

  render() {
    return (
      <BrowserRouter>
          <section name="content">
            <div className="container-fluid p-0">
              <Switch>
                <Route exact path="/" component={MapView} />
                <Route exact path="/map/:id" component={MapView} />
                <Route exact path="/:id/with/:others" component={MapView} />
              </Switch>
            </div>
          </section>
      </BrowserRouter>
    )
  }
}

export default App;
