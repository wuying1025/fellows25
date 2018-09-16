import React, { Component } from 'react';
import store from './../store';
import { connect } from 'react-redux';

//action  是对象  对象中必须有个type
const add = () => {
	console.log('---action');
	return {
		type:'ADD'
	}
}
class App extends Component {
	addHandle(){
		//触发action
		store.dispatch(add());
	}
	render() {
		return (
			<div>
				<h1>{this.props.count}</h1>
				<button onClick = {this.addHandle.bind(this)}>click</button>
			</div>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		count:state.count
	}
}
export default connect(mapStateToProps)(App);
