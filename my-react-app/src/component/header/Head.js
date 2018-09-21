import React, { Component } from 'react';
let titleStyle = {
    height: 60,
    width:100,
}
class Head extends Component {
    
    render() {
        return (
            <div className="title" style={titleStyle}>头部
               <i className="iconfont icon-caidan"></i>
            </div>
        );
    }
}

export default Head;