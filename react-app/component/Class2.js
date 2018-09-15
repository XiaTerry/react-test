import React, { Component } from 'react'
import {BrowserRouter as 
  Router,Prompt
} from "react-router-dom";

class Class2 extends Component {
  
  
  render() {
    return (
      <Router>
      <div>
        <h1>class2编程式导航</h1>
        <button onClick={()=>this.goMovie()}>点击通过js 跳转到电影详情页面</button>
        
      </div>
      </Router>
    )
  }
  goMovie =()=>{
    this.props.history.push('/movie/in_theaters/3')
  }
}
export default Class2