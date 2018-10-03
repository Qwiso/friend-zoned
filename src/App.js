import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div claassName="row">
          <div className="col">
            <div className="text-center bg-secondary">
              <h3>Hello world</h3>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
