import React, { Component } from 'react'
import List from './List';
import Active from './Active';
import Content from './Content';
import Head from '../../components/header/Head';

class Home extends Component {
  render() {
    return (
      <div>
        <Head/>
        <List/>
        <Active/>
        <Content history={this.props.history}/>
      </div>
    )
  }
}
export default Home;