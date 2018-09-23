import React, { Component } from 'react'

export default (props)=>{
    console.log(props)
    return (
        <div>
            <div>
                <div>
                    {props.elem.username}
                </div>
                <div>{props.elem.time}</div>
            </div>
            <div>
                <p>{props.elem.content}</p>
                {
                    props.elem.imgs.map((elem)=>{
                        return <img src={elem.path} key={elem.id}></img>
                    })
                }
                
            </div>
        </div>
    )
}
