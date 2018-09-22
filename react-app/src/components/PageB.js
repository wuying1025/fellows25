import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'

let PageB = withRouter(class PageB extends Component {
    constructor(props) {
        super(props);
        // console.log(props);
    }
    
    render() {
        return (
            <div>
                <button onClick={ ()=>{
                        this.props.history.push('/')
                    }
                }>jump->主页</button>
                B页面
            </div>
        );
    }
})
export default PageB;


