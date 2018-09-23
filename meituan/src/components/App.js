import React, { Component } from 'react'
import { Button } from 'antd-mobile';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import Home from './Home';
import Detail from './Detail';

export default class App extends Component {
  render() {
    return (
		<div>
			<Router>
				<div>
					<Route exact path="/" component={Home}></Route>
					<Route path="/detail/:id" component={Detail}></Route>
				</div>
			</Router>
		</div>
    )
  }
}
