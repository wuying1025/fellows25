import React, { Component } from 'react'
import './../asset/css/product.css';
import { withRouter } from 'react-router-dom';


export default withRouter((props) => {
    return (
        <div className="pro-container" onClick={
            ()=>{
                props.history.push('/detail/'+props.elem.product_id);
            }
        }>
            <img className="pro-img" src={props.elem.img}></img>
            <div className="pro-content" >
                <div className="pro-title">{props.elem.product_name}</div>
                <p className="pro-detail">{props.elem.description}</p>
                <div>
                    <span className="pro-current-price">{props.elem.discount_price}</span> 
                    <span className="pro-door-price">门市价 {props.elem.price}</span>
                    <span className="pro-sold">已售{props.elem.num}</span>
                </div>
            </div>
        </div>
    )
})
