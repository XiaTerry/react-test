import React, { Component } from 'react';
import '../../assets/css/detail.css';
class Detail extends Component {
    constructor(){
        super();
        this.state={
            row:{}
        }
    }
    componentDidMount(){
        fetch('http://www.xiechenxi.cn/welcome/detail/1',{
        method:'GET',
    }) // 返回一个Promise对象
        .then((res)=>{
            return res.json() // res.text()是一个Promise对象
        })
        .then((res)=>{
            console.log(res) // res是最终的结果
            this.setState({
                row:res.row
            })
        })
    }
  render() {
    return (
      <div className="detail">
        <p>商家：{this.state.row.business_name}</p>
        <div className="img">
          <img src={this.state.row.img} alt=""/>
        </div>
        <p>商家地址：{this.state.row.business_address}</p>
        <p>商家电话：{this.state.row.business_tel}</p>
      </div>
    )
  }
}
export default Detail;