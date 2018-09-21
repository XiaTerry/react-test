import React, { Component } from 'react';
import Head from './component/header/Head';
import '@/App.css';
import '../public/font/iconfont.css';


class App extends Component {
  render() {
    return (
      // 头部导航条部分
      <div className="App">
        <Head></Head>
      </div>
    );
  }
}

export default App;
