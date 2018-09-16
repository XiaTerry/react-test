import React, { Component } from 'react';
import {connect} from 'react-redux';

//返回值必须
const add = (a)=>{
    console.log('action');
    return{
        type:'ADD',
        num:a
    }
}
const pop = ()=>{
    return{
        type:'POP',
        num1:5
    }
}
class Class6 extends Component {
    addHadle(){
        this.props.add(10)
    }
    popHadle(){
        this.props.pop()
    }
  render() {
    return (
      <div>
        <h1>class6</h1>
        <p>{this.props.count}</p>
        <button onClick={this.addHadle.bind(this)}>加一</button>
        <button onClick={this.popHadle.bind(this)}>减一</button>
      </div>
    )
  }
}
const mapStateToProps = (state)=>{
    return{
        count:state.count
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        add:(a)=>dispatch(add(a)),
        pop:()=>dispatch(pop())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Class6) 