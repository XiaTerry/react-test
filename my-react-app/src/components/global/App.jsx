import React, { Component } from 'react';
import Head from '../header/Head';
import '../../assets/css/App.css';
import List from '../home/List';
import Active from '../home/Active';
import Content from '../home/Content';
class App extends Component {
  render() {
    return (
      <div className="App">
      {/* 头部导航 */}
        <Head/>
        <List/>
        <Active/>
        <Content/>
      </div>
    );
  }
}

export default App;
