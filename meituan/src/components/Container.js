import React, { Component } from 'react'
import './../asset/css/container.css';
export default class Container extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
            <div className="container">
                <div className="con-title">{this.props.title}</div>
                <div className="con-content">
                    {this.props.children}
                </div>
            </div>
        )
    }
}


