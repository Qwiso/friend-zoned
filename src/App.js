import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

const Content = (props) => {
  return <h3>{props.page} renders here</h3>
}

class App extends Component {
  state = {
    page: "main"
  }

  navBtnClicked = (e) => {
    console.log(e)
    if (!this.state.page === e) {
      this.setState({
        page: e
      })
    }
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
              <div onClick={this.navBtnClicked('main')} className="btn btn-lg col py-2 border-y rounded-0 text-center text-info"><i className="fas fa-lg fa-map-marked"></i></div>
              <div onClick={this.navBtnClicked('map')} className="btn btn-lg col py-2 border-y rounded-0 text-center text-white"><i className="fas fa-lg fa-users"></i></div>
              <div onClick={this.navBtnClicked('search')} className="btn btn-lg col py-2 border-y rounded-0 text-center text-white"><i className="fas fa-lg fa-search"></i></div>
            </div>
          </div>
        </section>
      </div> 
    )
  }
}

export default App;
