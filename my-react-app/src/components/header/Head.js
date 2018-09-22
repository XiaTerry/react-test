import React, { Component } from 'react';
import '../../assets/css/head.css'
import { NavBar, Icon,SearchBar} from 'antd-mobile';

class Head extends Component {
    state = {
       
      };
      onChange= (value) => {
        this.setState({ value });
        console.log(this.props.children);
      };
      clear = () => {
        this.setState({ value: '' });
      };
      handleClick = () => {
        this.manualFocusInst.focus();
      }
    render() {
        return (
            <div>
            <NavBar
              mode="dark"
              leftContent="哈尔滨"
              rightContent={[
                <Icon key="1" type="ellipsis" />,
              ]}
            > <SearchBar placeholder="输入搜索内容" maxLength={8}  /></NavBar> 
          
          </div>
        
        );
    }
}

export default Head;