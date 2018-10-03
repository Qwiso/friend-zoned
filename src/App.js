import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

const Content = (props) => {
  return <h3>{props.page} renders here</h3>
}

const clickThrough = {
    pointerEvents: 'none'
}

class App extends Component {
  state = {
    page: "map"
  }

  navBtnClicked = (e) => {
      this.setState({
        page: e.target.dataset.page
      })
  }

  render() {
    return (
      <div>
        <section name="content">
        <div className="container-fluid">
          <Content page={this.state.page} />
        </div>
        </section>
        <section name="nav-bar" className="d-block">
          <div className="container-fluid fixed-bottom bg-secondary">
            <div className="row">
              <div onClick={this.navBtnClicked} data-page="map" className="btn btn-lg col py-2 border-y rounded-0 text-center text-info"><i style={clickThrough} className="fas fa-lg fa-map-marked"></i></div>
              <div onClick={this.navBtnClicked} data-page="user" className="btn btn-lg col py-2 border-y rounded-0 text-center text-white"><i style={clickThrough} className="fas fa-lg fa-users"></i></div>
              <div onClick={this.navBtnClicked} data-page="search" className="btn btn-lg col py-2 border-y rounded-0 text-center text-white"><i style={clickThrough} className="fas fa-lg fa-search"></i></div>
            </div>
          </div>
        </section>
      </div> 
    )
  }
}

export default App;
