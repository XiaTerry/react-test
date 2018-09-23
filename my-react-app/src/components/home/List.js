import React, { Component } from 'react';
import '../../assets/css/list.css'
import { Carousel,WhiteSpace,WingBlank} from 'antd-mobile';

class List extends Component {
    state = {
        data: [
            {
              val:"1",
              items:[
                {
                  img:'meishi',
                  title:"美食"
                },
                {
                  img:'dianying',
                  title:"电影"
                },
                {
                  img:'jiudian',
                  title:"酒店"
                },
                {
                  img:'yule',
                  title:"娱乐"
                },
                {
                  img:'waimai',
                  title:"外卖"
                },
                {
                  img:'ktv',
                  title:"ktv"
                },
                {
                  img:'zhoubianyou',
                  title:"周边游"
                },
                {
                  img:'liren',
                  title:"丽人"
                },
                {
                  img:'xiaochi',
                  title:"小吃"
                },
                {
                  img:'jipiao',
                  title:"机票"
                }
              ]
            },{
              val:"2",
              items:[
                {
                  img:'meishi',
                  title:"美食"
                },
                {
                  img:'dianying',
                  title:"电影"
                },
                {
                  img:'jiudian',
                  title:"酒店"
                },
                {
                  img:'yule',
                  title:"娱乐"
                },
                {
                  img:'waimai',
                  title:"外卖"
                },
                {
                  img:'ktv',
                  title:"ktv"
                },
                {
                  img:'zhoubianyou',
                  title:"周边游"
                },
                {
                  img:'liren',
                  title:"丽人"
                },
                {
                    img:'xiaochi',
                    title:"小吃"
                },
                {
                    img:'jipiao',
                    title:"机票"
                }
              ]
            }
          ],
      imgHeight: 176,
    }
    componentDidMount() {
      
    }
    render() {
      return (
        
          <Carousel
            autoplay={false}
            infinite
          >
            {this.state.data.map(val => (
              <div
                key={val.val}
                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
              >
                <WhiteSpace size="lg" />
                <WingBlank size='sm'>
                <div className="list"
                  style={{ width: '100%', verticalAlign: 'top' ,background:'',height:'179px'}}
                  onLoad={() => {
                    window.dispatchEvent(new Event('resize'));
                    this.setState({ imgHeight: 'auto' });
                  }}
                >
                <ul>
                    {val.items.map((item,index)=>(
                        <li className="icon" key={index}>
                        <div>
                            <a href="">
                                <img src={require(`./../../assets/img/${item.img}.png`)}alt=""/>
                             </a>
                        </div>
                            <span>
                                {item.title}
                            </span>
                        </li>
                    ))}
                </ul>
                </div>
                </WingBlank>
              </div>
            ))}
          </Carousel>

      );
    }
  }
  

export default List;