import React, { Component } from 'react';
// import '../../assets/css/App.css';
import 'antd-mobile/dist/antd-mobile.css';
import Home from '../home/Home';
import Detail from '../detail/Detail';
import { BrowserRouter as Router, Route } from 'react-router-dom';
class App extends Component {
  constructor(){
    super();
    this.state={

    }
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home}/>
          <Route path="/detail/:id" component={Detail}/>
        </div>
      </Router>
    );
  }
}

export default App;
