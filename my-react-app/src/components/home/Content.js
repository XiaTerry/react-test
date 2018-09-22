import React, { Component } from 'react';
import '../../assets/css/content.css';
import { List } from 'antd-mobile';

const Item = List.Item;
const Brief = Item.Brief;

class Content extends Component {
    constructor(props){
        super(props);
        this.state={
            businessList:[],
            disabled: false,
        }
    }
    componentDidMount(){
        // 通过fetch获取百度的错误提示页面
    fetch('http://www.xiechenxi.cn/',{
        method:'GET'
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
        newDoms = nowList.map((items)=>{
            return(
                    <li>
                        <div className="left">
                            <img src={items.img} alt=""/>
                        </div>
                        <div className="right">
                            <h2>{items.product_name}</h2>
                            <p>{items.description}</p>
                            
                            <div className="price">
                                <span>￥</span>
                                <span>{items.price}</span>
                                <span>已售{items.num}</span>
                            </div>
                            {/* {items.discount_price} */}
                        </div>
                        
                    </li>
            )
        })
        return (
            <div>
                <div className="like">
                    <h2>猜你喜欢</h2>
                </div>
                <ul className="listItem">{newDoms}</ul>
            </div>
           
        );
    }
}

export default Content;