import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Class1 from './component/Class1';
import Class2 from './component/Class2';
import Class3 from './component/Class3';
import Class4 from './component/Class4';
import Class5 from './component/Class5';
import Class6 from './component/Class6';
import {BrowserRouter as Router,Route,Link,Switch} from "react-router-dom";
import {Provider} from 'react-redux';//使用redux
import store from './store';

const No = ()=>{
  return <div>
    <h1>404</h1>
    <p>不好意识哦,走丢啦！</p>
  </div>
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-route">
          <ul>
            <li><Link to="/class1">class1</Link></li>
            <li><Link to="/class2">class2</Link></li>
            <li><Link to="/class3">class3</Link></li>
            <li><Link to="/class4">class4</Link></li>
            <li><Link to="/class5">class5</Link></li>
            <li><Link to="/class6">class6</Link></li>
            <li><Link to="/class7">class7</Link></li>
          </ul>
          <div className="App-content">
          <Switch>   
              <Route path="/class1" component={Class1}></Route>
              <Route path="/class2" component={Class2}></Route>
              <Route exact path="/class3" component={Class3}></Route>
              <Route path="/class4" component={Class4}/>
              <Route path="/class5" component={Class5}/>
              <Route path="/class6" component={Class6}/>
              <Route component={No} />
          </Switch> 
          </div>
          
        </div>    
      </div>
      </Router>
      </Provider>
    );
  }
}

export default App;
