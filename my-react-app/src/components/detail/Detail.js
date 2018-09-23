import React, { Component } from 'react';
import '../../assets/css/detail.css';
import Head from '../header/Head';
import { Button,Flex, WingBlank , WhiteSpace} from 'antd-mobile';

class Detail extends Component {
    constructor(){
        super();
        this.state={
            row:{}
        }
    }
    componentDidMount(){
        console.log(this.props.match.params.id);
        let id = this.props.match.params.id;
        console.log(id);
        fetch(`http://www.xiechenxi.cn/welcome/detail/${id}`,{
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
        <Head/>
       
        <div className="img">
            <img src={this.state.row.img} alt=""/>
            <div className="desc">
            <WingBlank><h1 className="title">{this.state.row.business_name}</h1>
                <span>{this.state.row.description}</span></WingBlank>
            </div>
            
        </div>
         <WhiteSpace/>
        <WingBlank>
        <Flex>
            <Flex.Item className="price">
                <span>{this.state.row.price}</span>
                <span>元</span>
                <span>门市价:{this.state.row.discount_price}元</span>
            </Flex.Item> 
            <Flex.Item>
            <Button style={{backgroundColor:"#ff9900",color:"#fff",fontSize:"0.4rem"}}>立即抢购</Button>
            </Flex.Item>
        </Flex>
        
        <WhiteSpace/>
        <div className="groupitem">
            <ul className="agree">
                <li>
                    {/* <img src={require(`../../assets/img/sold.png`)} alt=""/> */}
                   <span>支持随时退款</span>
                </li>
                <li>
                    {/* <img src={require(`../../assets/img/right.png`)} alt=""/> */}
                    <span>支持过期自动退</span> 
                </li>
                <li>
                    {/* <img src={require(`../../assets/img/sold.png`)} alt=""/> */}
                    <span>已售2220</span>
                </li>
            </ul>
        
        </div>
        

        <div className="group-title">
            商家信息
        </div>
        <Flex>
            <Flex.Item>
            <h4>{this.state.row.business_name}</h4>
                <h5>{this.state.row.business_address}</h5></Flex.Item>
            <Flex.Item>
                <img src={require(`../../assets/img/phone.png`)} alt=""/>
            </Flex.Item>
        </Flex>
        <div>
            
            <div></div>
        </div>
        
        <p>商家电话：{this.state.row.business_tel}</p>
        </WingBlank>
      </div>
    )
  }
}
export default Detail;