import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

const Content = (props) => {
  return <h3>content renders here</h3>
}

class App extends Component {
  render() {
    return (
      <div>
        <section name="content">
        <div className="container-fluid">
          <Content />
        </div>
        </section>
        <section name="nav-bar">
          <div className="container-fluid fixed-bottom bg-warning">
            <div className="row d-flex justify-content-around">
              <h3 className="btn btn-lg p-3 m-0 text-white"><i className="fas fa-users"></i></h3>
              <h3 className="btn btn-lg p-3 m-0 text-white"><i className="fas fa-map-marked"></i></h3>
              <h3 className="btn btn-lg p-3 m-0 text-white"><i className="fas fa-search"></i></h3>
            </div>
          </div>
        </section>
      </div> 
    )
  }
}

export default App;
