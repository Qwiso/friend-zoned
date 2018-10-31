import React, { Component } from 'react'
import firebase from 'firebase'

class Login extends Component {
    state = {
        user: null
    }

    componentDidMount() {
        this.setState({
            auth: firebase.auth(),
            provider: new firebase.auth.FacebookAuthProvider().addScope('email'),
            db: this.db = firebase.database()
        })
    }

    loginWithFacebook = () => {
        this.state.auth.signInWithPopup(this.state.provider).then(() => {
            window.location.href = '/'
        }).catch((err) => {
            console.log(err)
        })
    }

    render() { 
        return (
            <div className="mt-3 d-flex justify-content-center">
                <div onClick={this.loginWithFacebook} className="col-4 btn btn-block text-white" style={{backgroundColor: "#3B5998"}}>Login with <i className="fab fa-facebook"></i></div>
            </div>
        )
    }
}
 
export default Login