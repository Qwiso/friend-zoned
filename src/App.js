import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

const Content = (props) => {
  return <h3>some content</h3>
}

class App extends Component {
  render() {
    return (
      <div>
        <section>
        <div class="container-fluid">
          <Content />
        </div>
        </section>
        <section>
          <div class="container-fluid fixed-bottom bg-warning">
            <div class="row d-flex justify-content-around">
            <h3 class="p-3 m-0 text-white border"><i class="fas fa-users"></i></h3>
              <h3 class="p-3 m-0 text-white border"><i class="fas fa-map-marked"></i></h3>
              <h3 class="p-3 m-0 text-white border"><i class="fas fa-search"></i></h3>
            </div>
          </div>
        </section>
      </div> 
    )
  }
}

export default App;
