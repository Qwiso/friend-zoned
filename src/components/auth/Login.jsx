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
        this.state.auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(() => {
            this.state.auth.signInWithPopup(this.state.provider).then(({ user, credential, additionalUserInfo }) => {
                let currentUser = firebase.auth().currentUser
                this.state.db.ref('/users/' + currentUser.uid).once('value').then((snapshot) => {
                    if (snapshot.val() === null) {
                        if (user && credential && additionalUserInfo) {
                            this.state.db.ref('users/' + currentUser.uid).set({
                                uid: currentUser.uid,
                                email: additionalUserInfo.profile.email,
                                name: currentUser.displayName,
                                image: currentUser.photoURL,
                                facebook_id: additionalUserInfo.profile.id,
                                facebook_access_token: credential.accessToken,
                                facebook_refresh_token: user.refreshToken
                            })
                        }
                    }
                    // window.location.href = 'http://localhost'
                })
            }).catch((err) => {
                console.log(err)
            })
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