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
            show:false
        }
        console.log("+++++",props);
    }
    
    render() {
        return (
            <div>
                main主页面
                <Router>
                    <div>
                        <NavLink activeClassName="selected" to="/" isActive={()=>{
                            console.log(this.props);
                        }}>首页</NavLink>
                        ---
                        <NavLink to="/a/5">跳转A</NavLink>
                        ----
                        <NavLink to="/b">跳转B</NavLink>
                        ----
                        <NavLink to="/render">render</NavLink>
                        ---
                        <NavLink to="/children/6">children</NavLink>
                        ---
                        <NavLink to="/x">编程式导航</NavLink>
                        {/* <Switch>
                            <Route path="/a" component={PageA}></Route>
                            <Route path="/b" component={PageB}></Route>
                            <Route path="/" component={Home}></Route>
                        </Switch> */}
                        <Route exact path="/" component={Home}></Route>
                        <Route path="/a/:id" component={PageA}></Route>
                        <Route path="/b" component={PageB}></Route>
                        <Route path="/render" render={()=>{
                            // return <h1>render页</h1>
                            return <Redirect to="/b" />
                        }}></Route>
                        {/* <Route path="/children/:num" children={Children}></Route> */}
                        <Jump to="/"></Jump>
                        
                        <Route path="/x" component={X}></Route>
                        <Prompt when={this.state.show} message="是否留在当前页面" ></Prompt>
                    </div>
                </Router>
            </div>
        );
    }
}
export default Main;
