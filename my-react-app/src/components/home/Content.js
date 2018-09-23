import React, { Component } from 'react';
import '../../assets/css/content.css';  
import { List} from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;
class Content extends Component {
    constructor(props){
        super(props);
        this.state={
            businessList:[],
        }
    }
    componentDidMount(){
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
            let id = items.product_id;
            return(
                    <div>
                        <List  className="my-list" >
                        <Item
                            arrow="horizontal"
                            thumb={items.img}
                            multipleLine
                            arrow
                            onClick={() => {this.props.history.push(`/detail/${id}`)}}
                        >
                        <div className="name">
                            <p>{items.product_name}</p>
                            <p>{items.description}</p>
                            <div className="price">
                                <span>￥{items.price}</span>
                                <span> 门市价：{items.discount_price}元</span>
                                <span>已售{items.num}</span>
                            </div>
                            
                        </div>
                       
                        </Item>
                    </List>
                </div>
                    
            )
        })
        return (
            <div>
                <div className="like">
                    <h2>猜你喜欢</h2>
                </div>
                {newDoms}
               
            </div>
        );
    }
}

export default Content;