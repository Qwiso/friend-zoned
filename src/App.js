import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import firebase from 'firebase'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

import withAuthentication from './components/auth/withAuthentication'

import MainMap from './components/MainMap'
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

const Logout = () => {
  firebase.auth().signOut()
  return <Redirect to='/login' />
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <section name="content">
            <div className="container-fluid p-0">
              <Switch>
                <Route exact path="/" component={MainMap} />
                <Route exact path="/map/:id" component={MainMap} />
                <Route exact path="/:id/with/:others" component={MainMap} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/logout" component={Logout} />
              </Switch>
            </div>
          </section>
      </BrowserRouter>
    )
  }
}

export default withAuthentication(App)
