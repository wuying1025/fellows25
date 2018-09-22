import React, { Component } from 'react';
import { 
    BrowserRouter as Router, 
    Route, 
    Link ,
    Switch,
    Redirect,
    Prompt,
    NavLink
} from 'react-router-dom';
import PageA from './PageA';
import PageB from './PageB';
import Home from './Home';
import Children from './Children';

import './../style.css';
const Jump = (props) => {
    return <Link to={props.to}>jump</Link>
}

const X = (props) => {
    return (
        <div>
            <button 
                onClick={()=>{
                    // console.log(props);

                    props.history.push('/');
                }}
            >click</button>
        </div>
    )
}

class Main extends Component {
    constructor(props) {
        super(props);
        this.state={
            show:true
        }
        console.log("+++++",props);
    }
    
    render() {
        let style = 
            {
                color:'#f00',
                background:'green'
            };
        
        return (

            <div>
                main主页面
                <Router>
                    <div>
                        <NavLink to="/a/vvv"  activeClassName="aa"
                            // activeStyle={
                            //     style
                            // }
                            >a</NavLink>
                        ----
                        <NavLink  activeClassName="aa"
                            // activeStyle={
                            //    style
                            // }
                             to="/b">b</NavLink>
                        ----

                        <Link to="/a/about" >a</Link>
                        ----
                        <Link to="/a/1">b</Link>
                        ----
                        {/* <Link>c</Link> */}
                        ----
                        {/* <Switch> */}
                            <Route exact path="/a/about" component={PageA} ></Route>
                            <Route exact path="/a/:name" component={PageA} ></Route>
                        {/* </Switch> */}
                        <Prompt when={this.state.show} message="确定离开？"></Prompt>
                    </div>
                </Router>
            </div>
        );
    }
}
export default Main;
