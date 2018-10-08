import React, { Component } from 'react'

export class Main extends Component {
    state = {
        redirectToReferrer: false
    }

    componentDidMount() {
        console.log(document.cookie)
    }

    render() {
        return (
            <h2>main</h2>
        )
    }
}