import React, { Component } from 'react'
import {BrowserRouter as 
  Router,Route,Link,Switch,Redirect,Prompt
} from "react-router-dom";

const Home = ()=>
{
  return <div><p>我是home</p></div>
}


const About = ({match})=>{
  return <div><p>我是about{match.params.id}</p></div> 
  
}
const MenuLink = ({to,lable})=>{
  return(
    <Route
      path={to}
      children={({match})=>{
        return(
          <div>
            <Link to={to}>{lable}这是自定义链接</Link>
          </div>
        )
      }}
    />
  )
}
class Class1 extends Component {
  constructor(props){
    super(props);
    this.state={
      isBlocking:true
    }
  }
  render() {
    return (
      <Router>
      <div>
          <p>我是class1</p>
          <Link to="/class1/home">Home|&nbsp;</Link>
          <Link to="/class1/about/123">About|&nbsp;</Link>
          <Link to="/">重定向到home|&nbsp;</Link>
          <MenuLink to="/class1/about/123" lable="menulink"/>
          <Prompt when={this.state.isBlocking} message={location=>`你确定要离开当前页面至${location.pathname}`}/>
          <Switch>
          <Route exact path="/class1/home" render={()=><h1>我是里面的</h1>}/>
          <Route path="/class1/home" component={Home}/>
          <Route path="/class1/about/:id" component={About}/>>
          <Route render={()=>(<Redirect to="/class1/home"/>)}/>
          </Switch>
      </div>
      </Router>
    )
  }
}
export default Class1