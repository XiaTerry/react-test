import React, { Component } from 'react'
import {BrowserRouter as 
    Router,Route,Link,Prompt
} from "react-router-dom";

class Form extends React.Component {
    constructor(props){
        super(props);
        this.state={
            isBlocking:true,
        };
        this.change = this.change.bind(this);
        this.submit = this.submit.bind(this);
    }
    submit(e){
        e.target.reset();
        e.preventDefault();
    }
    change(e){
        console.log(e.target.value.length)
        this.setState({
            isBlocking:e.target.value.length>0
        })
    }
    render() {
        return(
            <div>
                <form action="" onSubmit={this.submit}>
                <Prompt when={this.state.isBlocking}
                 message={location=>`你确定要离开当前页面至${location.pathname}`}/>
                    <p>
                        <input type="text" onChange={this.change}/>
                    </p>
                    <p><button>提交</button></p>
                </form>
            </div>
        )
    }
}
const One = ()=>{
    return <div>
        <h2>one</h2>
    </div>
}
const Two = ()=>{
    return <div>
        <h2>two</h2>
    </div>
}
class Class5 extends Component {
  render() {
    return (
    <Router>
        <div>
            <h1>class5</h1>
            <ul>
                <li><Link to="/class5/one">one</Link></li>
                <li><Link to="/class5/two">two</Link></li>
                <li> <Link to="/class5/there">there</Link></li>
            </ul>
            <Route path="/class5/one" component={One}/>
            <Route path="/class5/two" component={Two} />
            <Route path="/class5/there" component={Form} />
        </div>
    </Router>
    )
  }
}
export default Class5