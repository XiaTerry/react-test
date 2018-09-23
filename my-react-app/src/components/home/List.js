import React, { Component } from 'react';
import '../../assets/css/list.css'
import { Carousel,WhiteSpace,WingBlank} from 'antd-mobile';

class List extends Component {
    state = {
      data: ['1', '2'],
      imgHeight: 176,
    }
    componentDidMount() {
      // simulate img loading
      setTimeout(() => {
        this.setState({
          data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn'],
        });
      }, 100);
    }
    render() {
      return (
        
          <Carousel
            autoplay={false}
            infinite
            beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
            afterChange={index => console.log('slide to', index)}
          >
            {this.state.data.map(val => (
              <div
                key={val}
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
                    <li className="icon">
                    <div>
                        <a href="">
                        <img
                            src={require(`./../../assets/img/meishi.png`)}
                            alt=""
                        />
                         </a>
                    </div>
                            <span>
                                美食
                            </span>
                    </li>
                    <li className="icon">
                    <div>
                         <a href="">
                        <img
                            src={require(`./../../assets/img/dianying.png`)}
                            alt=""
                            
                        />
                        </a>
                        </div>
                            <span>
                                电影
                            </span>
                        
                   
                       
                    </li>
                    <li className="icon">
                    <div>
                         <a href="">
                        <img
                            src={require(`./../../assets/img/jiudian.png`)}
                            alt=""
                            
                        />
                           </a>
                    </div>
                            <span>
                                酒店
                            </span>
                     
                       
                    </li>
                    <li className="icon">
                    <div>
                        <a href="">
                        <img
                            src={require(`./../../assets/img/yule.png`)}
                            alt=""
                        />
                         </a>
                    </div>
                            <span>
                                娱乐
                            </span>
                       
                        
                    </li>
                    <li className="icon">
                    <div>
                        <a href="">
                        <img
                            src={require(`./../../assets/img/waimai.png`)}
                            alt=""
                            
                        />
                        </a>
                    </div>
                            <span>
                                外卖
                            </span>
                        
                        
                    </li>
                    <li className="icon">
                    <div>
                        <a href="">
                        <img
                            src={require(`./../../assets/img/ktv.png`)}
                            alt=""
                           
                        />
                        </a>
                    </div>
                            <span>
                                Ktv
                            </span>
                        
                        
                    </li>
                    <li className="icon">
                    <div>
                         <a href="">
                        <img
                            src={require(`./../../assets/img/zhoubianyou.png`)}
                            alt=""
                           
                        />
                         </a>
                    </div>
                            <span>
                                周边游
                            </span>
                       
                       
                    </li>
                    <li className="icon">
                    <div>
                        <a href="">
                        <img
                            src={require(`./../../assets/img/liren.png`)}
                            alt=""
                            
                        />
                        </a>
                    </div>
                            <span>
                                丽人
                            </span>
                        
                        
                    </li>
                    <li className="icon">
                    <div>
                        <a href="">
                        <img
                            src={require(`./../../assets/img/xiaochi.png`)}
                            alt=""
                            
                        />
                         </a>
                    </div>
                            <span>
                                小吃
                            </span>
                       
                        
                    </li>
                    <li className="icon">
                    <div>
                        <a href="">
                        <img
                            src={require(`./../../assets/img/jipiao.png`)}
                            alt=""
                            
                        />
                         </a>
                    </div>
                            <span>
                                机票
                            </span>
                       
                        
                    </li>
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