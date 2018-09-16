import React, { Component } from 'react';
import {BrowserRouter as 
    Router,Route,Link
  } from "react-router-dom";

const Menulist = ({to,label})=>{
    // console.log(match);
    return(
        <Route
        path={to}
        exact
        children={({match})=>
            <div>
                {match?">":""}
                <Link to={to}>{label}</Link>
            </div>
        } 
        />
    )
}

const Home = ()=><h2>Home</h2>
  
const About = ()=><h2>About</h2>
    
        
    

class Class4 extends Component {
  render() {
    return (
        <Router>
        <div>
            <h1>class4</h1>
            <hr/>
            <Menulist to="/" label="home"/>
            <Menulist to="/about" label="about"/>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
        </div>
      </Router>
    )
  }
}
export default Class4