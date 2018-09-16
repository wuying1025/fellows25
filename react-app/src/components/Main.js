import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PageA from './PageA';
import PageB from './PageB';

class Main extends Component {
    render() {
        return (
            <div>
                main主页面
                <Router>
                    <div>
                        <Link to="/a">跳转A</Link>
                        ----
                        <Link to="/b">跳转B</Link>
                        <Route path="/a" component={PageA}></Route>
                        <Route path="/b" component={PageB}></Route>
                    </div>
                </Router>
            </div>
        );
    }
}

export default Main;
