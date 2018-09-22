import React, { Component } from 'react';
import '../../assets/css/active.css';
class Active extends Component {
    constructor(props){
        super(props);
        this.state={
           
        }
    }
    render() {
        const list = this.state.imgList;
       
        return (
            <ul className="ulList">
                <li>
                    
                    <div className="act"><h3>我们约会吧</h3><h4>恋人家人好朋友</h4><a href=""><img src={require(`./../../assets/img/activity1.png`)} alt=""/></a></div></li>
                <li>
                    
                    <div className="act"><h3>低价超值</h3><h4>十元惠生活</h4><a href=""><img src={require(`./../../assets/img/activity2.jpg`)} alt=""/></a></div></li>
                <li>
                    
                    <div className="act"><h3>工作简餐</h3><h4>实惠方便选择多</h4><a href=""><img src={require(`./../../assets/img/activity3.png`)} alt=""/></a></div></li>
            </ul>
        );
    }
}

export default Active;