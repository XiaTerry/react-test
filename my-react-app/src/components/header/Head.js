import React, { Component } from 'react';
import '../../assets/css/head.css'
import { NavBar, Icon,SearchBar} from 'antd-mobile';
import { withRouter } from 'react-router-dom';
class Head extends Component {
      constructor(props){
        super(props);
        this.state=({
          middle:<SearchBar placeholder="输入搜索内容" maxLength={8}  />,
          leftContent:"哈尔滨",
          address:""
        })
      }
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
     
      componentDidMount(){
        console.log(this.props.match.params.id);
        let id = this.props.match.params.id;
        if(this.props.match.url.includes('/detail')){
          this.setState({
            leftContent:<Icon type="left" />,
            middle:"团购详情"
          })
        }else{
          
        }
      }
    render() {
        return (
            <div>
            <NavBar
              mode="dark"
              leftContent={this.state.leftContent}
              onLeftClick={()=>this.props.history.goBack()}
              rightContent={[
                <Icon key="1" type="ellipsis" />,
              ]}
            > {this.state.middle}</NavBar> 
          
          </div>
        
        );
    }
}
export default  withRouter(Head);