import React, { Component } from 'react'
import {BrowserRouter as 
  Router,Route,Link,Switch,Redirect,Prompt
} from "react-router-dom";

const Home = ()=>{
    return <div>
       <h2>home</h2>
    </div>
};

const About = ()=>{
    return <div>
        <h2>about</h2>
    </div>
};

const Topics = ({match})=>{
    
    return <div>
        <h2>topics</h2>
        <hr/>
        <ul>
            <li>
                <Link to={`${match.url}/rendering`}>Rendering-with-react</Link>
            </li>
            <li>
                <Link to={`${match.url}/components`}>components</Link>
            </li>
            <li>
                <Link to={`${match.url}/state`}>propsV.state</Link>
            </li>
        </ul>
        <Route path={`${match.url}/:id`} component={Topic} />
        <Route exact path={match.url} render={()=><h3>pelase select a topic</h3>} />
    </div>
}
const Topic = ({match})=>{
    return <div>
        <h3>{match.params.id}</h3>
    </div>
}
class Class3 extends Component {
  render() {
    return (
      <Router>
      <div>
          <ul>
              <li><Link to="/class3/home">Home</Link></li>
              <li><Link to="/class3/about">About</Link></li>
              <li><Link to="/class3/topics">Topics</Link></li>
          </ul>
          <hr/>
          <Switch>
          <Route exact path="/class3/home" component={Home}></Route>
          <Route path="/class3/about" component={About}></Route>
          <Route path="/class3/topics" component={Topics}></Route>
          </Switch>
      </div>
      </Router>
    )
  }
}
export default Class3