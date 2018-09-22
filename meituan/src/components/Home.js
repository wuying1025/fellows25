import React, { Component } from 'react'
import { NavBar, Icon, SearchBar, Grid} from 'antd-mobile';
import './../asset/css/home.css';


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[
                    {
                        icon:require('./../asset/img/img1.png'),
                        text:"美食"
                    },
                    {
                        icon:'img2',
                        text:"电影"
                    },
                    {
                        icon:'img3',
                        text:"酒店"
                    },
                    {
                        icon:'img4',
                        text:"娱乐"
                    },
                    {
                        icon:'img5',
                        text:"外卖"
                    },
                    {
                        icon:'img6',
                        text:"ktv"
                    },
                    {
                        icon:'img7',
                        text:"周边游"
                    },
                    {
                        icon:'img8',
                        text:"丽人"
                    },
                    {
                        icon:'img9',
                        text:"小吃"
                    },
                    {
                        icon:'img10',
                        text:"机票"
                    },
                    {
                        icon:require('./../asset/img/img1.png'),
                        text:"美食"
                    },
                    {
                        icon:'img2',
                        text:"电影"
                    },
                    {
                        icon:require('./../asset/img/img1.png'),
                        text:"美食"
                    },
                    {
                        icon:'img2',
                        text:"电影"
                    }
            ]
        }
    }
    
    render() {
    
    return (
        <div>
            <NavBar
                mode="light"
                leftContent="哈尔滨"
                rightContent={[
                    <Icon key="1" type="ellipsis" />,
                ]}
                >
                <SearchBar placeholder="输入搜索内容" maxLength={8} />
            </NavBar>
            <Grid data={this.state.data} isCarousel columnNum={5} />

            

            
            
        </div>
    )
  }
}
