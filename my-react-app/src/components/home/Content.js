import React, { Component } from 'react';
import '../../assets/css/content.css';
import { List } from 'antd-mobile';
import {
    BrowserRouter as Router, 
    Route, 
    Link ,
    Switch
   } from "react-router-dom";


class Content extends Component {
    constructor(props){
        super(props);
        this.state={
            businessList:[],
            
        }
    }
    componentDidMount(){
        console.log(this.props.match)
        // 通过fetch获取百度的错误提示页面
    fetch('http://www.xiechenxi.cn/',{
        method:'GET',
        headers: new Headers({
            'Accept': 'application/json' // 通过头指定，获取的数据类型是JSON
          })
    }) // 返回一个Promise对象
        .then((res)=>{
            return res.json() // res.text()是一个Promise对象
        })
        .then((res)=>{
            console.log(res) // res是最终的结果
            this.setState({
                businessList:res
            })
        })
    }
    render() {
        let nowList = this.state.businessList;
        let newDoms= null;
        newDoms = nowList.map((items,index)=>{
            return(
                
                    <li key={index} onClick={() => {this.props.match.history.push('/detail/'+items.product_id)}}>
                        <div className="left">
                            <img src={items.img} alt=""/>
                        </div>
                        <div className="right">
                            <h2>{items.product_name}</h2>
                            <p>{items.description}</p>
                            
                            <div className="price">
                                <span>￥</span>
                                <span>{items.price}</span>
                                <span> 门市价：{items.discount_price}元 </span>
                                <span>已售{items.num}</span>
                                
                            </div>
                            {/* {items.discount_price} */}
                        </div>
                        
                    </li>
            )
        })
        return (
            // <Router>
            <div>
                <div className="like">
                    <h2>猜你喜欢</h2>
                </div>
                <ul className="listItem">
                    {newDoms}
                </ul>
            </div>
            
        );
    }
}

export default Content;