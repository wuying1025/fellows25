import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link ,Switch} from 'react-router-dom';
import PageA from './PageA';
import PageB from './PageB';
import Home from './Home';
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
                        {/* <Switch>
                            <Route path="/a" component={PageA}></Route>
                            <Route path="/b" component={PageB}></Route>
                            <Route path="/" component={Home}></Route>
                        </Switch> */}
                        <Route exact path="/" component={Home}></Route>
                        <Route path="/a/:id" component={PageA}></Route>
                        <Route path="/b" component={PageB}></Route>
                    </div>
                </Router>
            </div>
        );
    }
}
export default Main;
