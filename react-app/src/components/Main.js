import React, { Component } from 'react';
import { 
    BrowserRouter as Router, 
    Route, 
    Link ,
    Switch,
    Redirect
} from 'react-router-dom';
import PageA from './PageA';
import PageB from './PageB';
import Home from './Home';
import Children from './Children';

const Jump = (props) => {
    return <Link to={props.to}>jump</Link>
}

class Main extends Component {
    render() {
        return (
            <div>
                main主页面
                <Router>
                    <div>
                        <Link to="/">首页</Link>
                        ---
                        <Link to="/a/5">跳转A</Link>
                        ----
                        <Link to="/b">跳转B</Link>
                        ----
                        <Link to="/render">render</Link>
                        ---
                        <Link to="/children/6">children</Link>
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
                        <Route path="/children/:num" children={Children}></Route>
                        <Jump to="/"></Jump>
                    </div>
                </Router>
            </div>
        );
    }
}
export default Main;
